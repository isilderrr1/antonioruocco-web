/**
 * INTERACTIVE CYBER_RANGE ENGINE - Split View Edition
 * Antonio Ruocco Portfolio v3.2 (Full-Stack Cloud Integrated)
 */

let currentStep = 0;
let activeModule = null;

const history = document.getElementById('terminal-history');
const userInput = document.getElementById('user-input');
const terminal = document.getElementById('sim-terminal');
const monitorContent = document.getElementById('monitor-content');
const loadFill = document.getElementById('load-fill');

// URL del tuo backend su Render
const BACKEND_URL = 'https://antonio-cyber-backend.onrender.com/api/terminal';

const missionData = {
    bruteforce: {
        title: "SSH_BRUTE_FORCE_LAB",
        briefing: "<b>PURPOSE:</b> Gain unauthorized access by systematically testing thousands of password combinations.<br><b>VECTOR:</b> SSH Protocol (Port 22).",
        firstTask: "[TASK] Scan the network to identify vulnerable targets. Type: <b style='color:white'>nmap -sV target</b>"
    },
    sql: {
        title: "SQL_INJECTION_LAB",
        briefing: "<b>PURPOSE:</b> Manipulate database queries via unvalidated input to extract sensitive data.<br><b>VECTOR:</b> URL parameter 'id='.",
        firstTask: "[TASK] Verify the URL's vulnerability. Type: <b style='color:white'>sqlmap -u victim.com/id=1</b>"
    },
    xss: {
        title: "CROSS_SITE_SCRIPTING_LAB",
        briefing: "<b>PURPOSE:</b> Inject malicious client-side scripts to steal session cookies.<br><b>VECTOR:</b> Unfiltered web input form.",
        firstTask: "[TASK] Inject a payload to read cookies. Type: <b style='color:white'>&lt;script&gt;alert(document.cookie)&lt;/script&gt;</b>"
    },
    ransomware: {
        title: "RANSOMWARE_SIMULATION",
        briefing: "<b>PURPOSE:</b> Encrypt victim system files and demand a ransom.<br><b>VECTOR:</b> Malicious file execution (Dropper).",
        firstTask: "[TASK] Launch the data encryption module. Type: <b style='color:white'>encrypt --dir /data --key RSA2048</b>"
    },
    mitigation: {
        title: "DDOS_MITIGATION_LAB",
        briefing: "<b>DEFENSE:</b> Identify and filter a resource saturation attack (SYN Flood).<br><b>SYSTEM:</b> IPtables (Linux Firewall).",
        firstTask: "[TASK] Analyze incoming packets for anomalies. Type: <b style='color:white'>tcpdump -n</b>"
    },
    forensics: {
        title: "DIGITAL_FORENSICS_LAB",
        briefing: "<b>DEFENSE:</b> Reconstruct an attack timeline by analyzing system logs.<br><b>SYSTEM:</b> Auth Log Analysis.",
        firstTask: "[TASK] Search for failed login attempts in the log. Type: <b style='color:white'>grep 'failed' auth.log</b>"
    },
    patching: {
        title: "VULNERABILITY_PATCHING_LAB",
        briefing: "<b>DEFENSE:</b> Remediate security flaws by updating software and applying security patches.<br><b>SYSTEM:</b> Package Manager (APT).",
        firstTask: "[TASK] Audit the system for outdated security packages. Type: <b style='color:white'>apt list --upgradable</b>"
    }
};

// --- BACKEND INTEGRATION ---
async function notifyBackend(cmd, module) {
    try {
        const response = await fetch(BACKEND_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ command: cmd, module: module })
        });
        
        const data = await response.json();
        
        // Stampa log del server nel terminale (colore grigio corsivo)
        if (data.output) {
            printToTerm(`<span style="color:#888; font-style: italic;">${data.output}</span>`);
        }
        
        // Aggiorna il Monitor e la Load Bar con i dati del database
        if (data.monitor) {
            updateMonitor(data.monitor, data.load);
        }
    } catch (err) {
        // Gestione risveglio server Render (Cold Start)
        console.warn("Backend is waking up or unreachable. Commands are still processed locally.");
    }
}

function triggerSim(type) {
    const modal = document.getElementById('sim-modal');
    activeModule = type;
    currentStep = 0;
    
    modal.style.display = "flex";
    document.getElementById('modal-title').innerText = missionData[type].title;
    history.innerHTML = `<div style='color: #bc13fe; border: 1px solid #bc13fe; padding: 10px; margin-bottom: 15px;'>${missionData[type].briefing}</div>`;
    
    // Messaggio iniziale di caricamento
    monitorContent.innerHTML = `<div class="idle-msg">ESTABLISHING ENCRYPTED CONNECTION TO RENDER CLOUD...</div>`;
    loadFill.style.width = "0%";
    
    printToTerm(missionData[type].firstTask);
    setTimeout(() => userInput.focus(), 100);
}

function updateMonitor(html, load) {
    if (html) monitorContent.innerHTML = html;
    if (load) loadFill.style.width = load + "%";
}

userInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const cmd = this.value.toLowerCase().trim();
        this.value = "";
        if (cmd) processCommand(cmd);
    }
});

function processCommand(cmd) {
    history.innerHTML += `<div><span style="color:#bc13fe">root@vault:~#</span> ${cmd}</div>`;

    // COMANDO EXIT
    if (cmd === "exit" || cmd === "quit") {
        printToTerm("[SYSTEM] Closing session and cleaning temporary files...");
        setTimeout(() => {
            closeSim();
        }, 600);
        return;
    }

    // CHIAMATA AL BACKEND (RENDER CLOUD)
    notifyBackend(cmd, activeModule);

    // LOGICA LOCALE
    switch(activeModule) {
        case 'bruteforce': handleBruteForce(cmd); break;
        case 'sql': handleSQL(cmd); break;
        case 'xss': handleXSS(cmd); break;
        case 'ransomware': handleRansomware(cmd); break;
        case 'mitigation': handleMitigation(cmd); break;
        case 'forensics': handleForensics(cmd); break;
        case 'patching': handlePatching(cmd); break;
    }
    
    terminal.scrollTop = terminal.scrollHeight;
}

// --- HANDLERS (LOCALE) ---
function handleBruteForce(cmd) {
    if (currentStep === 0 && cmd.includes("nmap")) {
        // Il backend restituirà la lista nomi, noi diamo l'istruzione generica
        printToTerm("[TASK] Enumeration complete. Multiple targets identified in the database.");
        printToTerm("Select a user from the list and attack. Example: <b style='color:white'>hydra -l m_rossi -P pass.txt</b>");
        currentStep;
    } else if (currentStep === 1 && cmd.includes("hydra")) {
        // Controlliamo se il comando hydra contiene un nome (se l'utente ha scritto solo "hydra" senza parametri)
        if (cmd.includes("-l")) {
            printToTerm("<span style='color:#0f0'>[SUCCESS] Brute-force simulation completed for the selected target.</span>");
            printToTerm("<span style='color:#555'>You can try to attack another discovered user or type 'exit'.</span>");
        } else {
            printToTerm("<span style='color:#ff4444'>[ERROR] Syntax error. Usage: hydra -l [user] -P [wordlist]</span>");
        }
    }
}

function handleSQL(cmd) {
    if (currentStep === 0 && cmd.includes("sqlmap")) {
        printToTerm("[TASK] Exploitation module loaded. Type: <b style='color:white'>--dump</b> to extract users.");
        currentStep++;
    } else if (currentStep === 1 && cmd === "--dump") {
        printToTerm("<span style='color:#0f0'>[SUCCESS] Real-time data received from MongoDB Cloud.</span>");
    }
}

function handleXSS(cmd) {
    if (cmd.includes("<script>")) {
        printToTerm("<span style='color:yellow'>[ALERT] Script executed! Session hijacked.</span>");
    }
}

function handleRansomware(cmd) {
    if (cmd.includes("encrypt")) {
        printToTerm("<span style='color:red'>[CRITICAL] Filesystem is being encrypted. Key stored on C2 server. Simulation complete.</span>");
    }
}

function handleMitigation(cmd) {
    if (currentStep === 0 && cmd.includes("tcpdump")) {
        printToTerm("[TASK] Attack identified. Block the source IP: <b style='color:white'>iptables -A INPUT -s 1.2.3.4 -j DROP</b>");
        currentStep = 1;
    } else if (currentStep === 1 && cmd.includes("iptables")) {
        printToTerm("<span style='color:#0f0'>[SUCCESS] IP 1.2.3.4 blacklisted. System traffic stabilized.</span>");
    }
}

function handleForensics(cmd) {
    if (currentStep === 0 && cmd.includes("grep")) {
        printToTerm("[TASK] Suspicious IP found. Trace it: <b style='color:white'>whois [IP]</b>");
        currentStep++;
    } else if (currentStep === 1 && cmd.includes("whois")) {
        printToTerm("<span style='color:#0f0'>[SUCCESS] Attack source traced. Investigation report generated.</span>");
    }
}

function handlePatching(cmd) {
    // PASSO 0: L'utente cerca pacchetti vulnerabili
    if (currentStep === 0 && (cmd.includes("apt") || cmd.includes("list"))) {
        printToTerm("[TASK] Vulnerability found in OpenSSL. Apply patch: <b style='color:white'>sudo apt upgrade openssl</b>");
        currentStep = 1; // Forza il passaggio al passo 1
    } 
    // PASSO 1: L'utente applica la patch
    else if (currentStep === 1 && (cmd.includes("upgrade") || cmd.includes("install"))) {
        printToTerm("<span style='color:#0f0'>[SUCCESS] Security update applied. System status: SECURE.</span>");
        printToTerm("Simulation complete. Type 'exit' to close the lab.");
        currentStep = 2; // Lab finito
    }
}

function printToTerm(text) {
    history.innerHTML += `<div>${text}</div>`;
    terminal.scrollTop = terminal.scrollHeight;
}

function closeSim() {
    document.getElementById('sim-modal').style.display = "none";
    history.innerHTML = "";
    activeModule = null;
    currentStep = 0;
}

terminal.addEventListener('click', () => {
    userInput.focus();
});