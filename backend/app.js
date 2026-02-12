const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
    .then(() => console.log("✅ Connesso al Database MongoDB Atlas!"))
    .catch(err => console.error("❌ Errore connessione DB:", err));

// --- SCHEMA E MODELLO ---
const LogSchema = new mongoose.Schema({
    timestamp: { type: String, default: () => new Date().toLocaleString() },
    command: String,
    module: String
});

const TerminalLog = mongoose.model('TerminalLog', LogSchema);

// --- ROTTA TERMINALE ---
app.post('/api/terminal', async (req, res) => {
    const { command, module } = req.body;
    
    // 1. SALVATAGGIO SU MONGODB
    try {
        const nuovoLog = new TerminalLog({ 
            command: command, 
            module: module 
        });
        await nuovoLog.save(); 
        console.log(`[DATABASE] Log salvato: ${command} (${module})`);
    } catch (err) {
        console.error("Errore durante il salvataggio nel DB:", err);
    }

    // 2. LOGICA DI RISPOSTA
    let response = { 
        output: `[SYS] Command "${command}" received. Analyzing execution path...`, 
        monitor: "STATUS: PROCESSING", 
        load: 10 
    };

    switch(module) {
        case 'bruteforce':
            if (command.includes("nmap")) {
                response = { output: "[SERVER] Network scan completed. Target 192.168.1.104 is UP.", monitor: "HOST: 192.168.1.104<br>PORT: 22/SSH", load: 25 };
            } else if (command.includes("hydra")) {
                response = { output: "[SERVER] Brute-force attack in progress. Testing credentials...", monitor: "ATTACK: ACTIVE<br>THREADS: 16<br>LOG: root/****", load: 50 };
            }
            break;

        case 'sql':
            if (command.includes("sqlmap")) {
                response = { output: "[SERVER] Vulnerability confirmed. Injecting payloads...", monitor: "ENGINE: MySQL<br>DB: victim_db<br>VULN: Blind-SQLi", load: 45 };
            } else if (command.includes("--dump")) {
                response = { output: "[SERVER] Database dumped successfully. Check monitor for data.", monitor: "TABLE: users<br>DATA: admin:5f4dcc3b...", load: 85 };
            }
            break;

        case 'xss':
            if (command.includes("<script>")) {
                response = { output: "[SERVER] Remote execution successful. Capturing session tokens.", monitor: "PAYLOAD: Reflected<br>COOKIE_STOLEN: JWT_882x", load: 100 };
            }
            break;

        case 'ransomware':
            if (command.includes("encrypt")) {
                response = { output: "[SERVER] Filesystem encryption started. RSA-2048 keys generated.", monitor: "DIR: /data/vault<br>ALGO: AES-256<br>STATUS: LOCKED", load: 100 };
            }
            break;

        case 'mitigation':
            if (command.includes("tcpdump")) {
                response = { output: "[IDS] Analyzing traffic packets... SYN Flood detected.", monitor: "ALERT: DDoS Attack<br>SRC: 1.2.3.4<br>RATE: 10k p/s", load: 90 };
            } else if (command.includes("iptables")) {
                response = { output: "[FIREWALL] Malicious IP 1.2.3.4 has been blacklisted.", monitor: "POLICY: DROP<br>STATUS: MITIGATED<br>Uptime: 100%", load: 15 };
            }
            break;

        case 'forensics':
            if (command.includes("grep")) {
                response = { output: "[SOC] Log pattern identified. Possible unauthorized login.", monitor: "LOG: auth.log<br>EVENT: Failed Login<br>IP: 203.0.113.5", load: 40 };
            }
            break;

        case 'patching':
            if (command.includes("apt") || command.includes("upgrade")) {
                response = { output: "[UPDATE] Applying security patch CVE-2014-0160.", monitor: "PKG: OpenSSL<br>PATCH: Heartbleed-fix<br>STATUS: SECURE", load: 60 };
            }
            break;
    }

    res.json(response);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 BACKEND ONLINE: http://localhost:${PORT}`);

});
