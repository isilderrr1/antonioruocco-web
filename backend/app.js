const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());

// --- CONNESSIONE DATABASE ---
// Il server prenderà la stringa ESCLUSIVAMENTE dalle variabili d'ambiente (ENV)
// Questo rende il codice sicuro per GitHub.
const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
    console.error("❌ Errore: Variabile MONGO_URI non trovata!");
    console.log("Assicurati di aver configurato la variabile su Render o in un file .env locale.");
}

mongoose.connect(mongoURI)
    .then(() => console.log("✅ Connesso al Database MongoDB Atlas (Cloud)!"))
    .catch(err => {
        console.error("❌ Errore connessione DB:", err);
    });

// --- MODELLI ---
const TerminalLog = mongoose.model('TerminalLog', new mongoose.Schema({
    timestamp: { type: String, default: () => new Date().toLocaleString() },
    command: String, module: String
}));

const MockUser = mongoose.model('MockUser', new mongoose.Schema({
    username: String, password: String, hash: String, role: String
}), 'mock_users');

const Config = mongoose.model('Config', new mongoose.Schema({
    service: String, version: String, status: String, cve: String,
    fix: String, event: String, ip: String, user: String, location: String
}), 'vulnerable_configs');

// --- ROTTA PRINCIPALE ---
app.post('/api/terminal', async (req, res) => {
    const { command, module } = req.body;
    
    // Logga l'attività nel DB
    try {
        await new TerminalLog({ command, module }).save();
    } catch (err) { console.error("Errore log:", err); }

    // Whitelist dei comandi per la validazione
    const validCommands = {
        sql: ['sqlmap', '--dump'],
        bruteforce: ['nmap', 'hydra'],
        patching: ['apt', 'upgrade', 'install'],
        forensics: ['grep', 'whois'],
        mitigation: ['tcpdump', 'iptables'],
        xss: ['<script>', 'alert', 'payload'],
        ransomware: ['encrypt', '--dir']
    };

    // Validazione comando
    const isCommandValid = validCommands[module]?.some(key => command.includes(key));
    if (!isCommandValid && !['exit', 'help', 'quit'].includes(command)) {
        return res.json({ 
            output: `[ERROR] Command "${command}" not recognized in ${module} module.`, 
            monitor: "<span style='color:red'>INVALID_CMD</span>", 
            load: 0 
        });
    }

    let response = { output: "[SYS] Processing...", monitor: "ACTIVE", load: 20 };

    try {
        switch(module) {
            case 'sql':
                if (command.includes("sqlmap")) {
                    response = { output: "[SERVER] SQLi Vulnerability confirmed.", monitor: "DB: victim_db<br>VULN: Blind-SQLi", load: 45 };
                } else if (command.includes("--dump")) {
                    const users = await MockUser.find({});
                    const dataRows = users.map(u => `${u.username}:${u.hash}`).join('<br>');
                    response = { output: `[SERVER] Dump successful. Records retrieved.`, monitor: `<b>TABLE: mock_users</b><br>${dataRows}`, load: 100 };
                }
                break;

            case 'bruteforce':
                if (command.includes("nmap")) {
                    const users = await MockUser.find({});
                    const userNames = users.map(u => u.username).join(', ');
                    response = { output: `[SERVER] Target UP. Found users: ${userNames}`, monitor: `PORT: 22/SSH<br>TARGETS: ${userNames}`, load: 35 };
                } else if (command.includes("hydra")) {
                    const words = command.split(' ');
                    const userIndex = words.indexOf('-l');
                    const targetUsername = userIndex !== -1 ? words[userIndex + 1] : "admin";
                    const targetUser = await MockUser.findOne({ username: targetUsername });
                    response = targetUser 
                        ? { output: `[SUCCESS] Crack complete for ${targetUser.username}`, monitor: `USER: ${targetUser.username}<br>PASS: ${targetUser.password}`, load: 100 }
                        : { output: "[ERROR] User not in database.", monitor: "ATTACK FAILED", load: 0 };
                }
                break;

            case 'patching':
                const vuln = await Config.findOne({ service: "openssl" });
                if (command.includes("upgrade") || command.includes("install")) {
                    response = { 
                        output: `[SUCCESS] ${vuln.service} updated to secure version.`, 
                        monitor: `STATUS: <span style="color:#0f0">SECURE</span><br>PATCH: Applied`, 
                        load: 100 
                    };
                } else {
                    response = { 
                        output: `[WARN] Vulnerable package: ${vuln.service} v${vuln.version}`, 
                        monitor: `VULN: ${vuln.cve}<br>STATUS: <span style="color:red">UNPATCHED</span>`, 
                        load: 50 
                    };
                }
                break;

            case 'forensics':
                const forensicLog = await Config.findOne({ event: "Failed Login" });
                if (command.includes("grep")) {
                    response = { output: `[ALERT] Failed login from ${forensicLog.ip}`, monitor: `IP: ${forensicLog.ip}<br>USER: ${forensicLog.user}`, load: 60 };
                } else {
                    response = { output: `[INFO] Source Trace: ${forensicLog.location}`, monitor: `ORIGIN: ${forensicLog.location}<br>ISP: CloudVPN`, load: 90 };
                }
                break;

            case 'mitigation':
                if (command.includes("tcpdump")) {
                    response = { 
                        output: "[IDS] SYN Flood detected from 1.2.3.4", 
                        monitor: "ALERT: DDoS Attack<br>RATE: 15k p/s<br>STATUS: CRITICAL", 
                        load: 95 
                    };
                } else {
                    response = { 
                        output: "[FIREWALL] Malicious IP 1.2.3.4 blocked.", 
                        monitor: "STATUS: <span style='color:#0f0'>MITIGATED</span><br>POLICY: DROP", 
                        load: 15 
                    };
                }
                break;
            
            case 'xss':
                response = { 
                    output: "[WEB] XSS Payload reflected. Capturing cookies...", 
                    monitor: "EXPLOIT: JS_INJECTION<br>COOKIE: sess_JWT_99a<br>STATUS: HIJACKED", 
                    load: 100 
                };
                break;

            case 'ransomware':
                response = { 
                    output: "[CRITICAL] RSA-2048 encryption active.", 
                    monitor: "ALGO: AES-256-CBC<br>DIR: /home/data<br>STATUS: LOCKED", 
                    load: 100 
                };
                break;

            default:
                response = { output: "[SYS] Command executed.", monitor: "IDLE", load: 0 };
        }
    } catch (err) { 
        console.error("Errore Switch:", err);
        response.output = "[ERROR] Cloud database sync failed."; 
    }
    res.json(response);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 BACKEND ONLINE: http://localhost:${PORT}`));