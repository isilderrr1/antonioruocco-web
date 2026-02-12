/**
 * INTERACTIVE CYBER_RANGE ENGINE - Split View Edition
 * Antonio Ruocco Portfolio v3.1 (with Exit Logic)
 */

let currentStep = 0;
let activeModule = null;

const history = document.getElementById('terminal-history');
const userInput = document.getElementById('user-input');
const terminal = document.getElementById('sim-terminal');
const monitorContent = document.getElementById('monitor-content');
const loadFill = document.getElementById('load-fill');

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

function triggerSim(type) {
    const modal = document.getElementById('sim-modal');
    activeModule = type;
    currentStep = 0;
    
    modal.style.display = "flex";
    document.getElementById('modal-title').innerText = missionData[type].title;
    history.innerHTML = `<div style='color: #bc13fe; border: 1px solid #bc13fe; padding: 10px; margin-bottom: 15px;'>${missionData[type].briefing}</div>`;
    
    monitorContent.innerHTML = `<div class="idle-msg">INITIALIZING MONITOR FOR ${type.toUpperCase()}...</div>`;
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

    // --- UNIVERSAL EXIT COMMAND ---
    if (cmd === "exit" || cmd === "quit") {
        printToTerm("[SYSTEM] Closing session and cleaning temporary files...");
        setTimeout(() => {
            closeSim();
        }, 600);
        return;
    }

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

// --- HANDLERS ---

function handleBruteForce(cmd) {
    if (currentStep === 0 && cmd.includes("nmap")) {
        printToTerm("[+] Port 22/SSH found on 192.168.1.104.");
        updateMonitor(`<div style="color:#bc13fe">NETWORK_SCAN_RESULTS:</div><br>IP: 192.168.1.104<br>PORT: 22/tcp<br>STATE: <span style="color:#0f0">OPEN</span>`, 25);
        printToTerm("[TASK] Start hydra attack. Type: <b style='color:white'>hydra -l root -P list.txt</b>");
        currentStep++;
    } else if (currentStep === 1 && cmd.startsWith("hydra")) {
        printToTerm("[!] Testing: root... <span style='color:#0f0'>SUCCESS</span> (Pass: password123)");
        updateMonitor(`<div style="color:#bc13fe">ATTACK_LOG:</div><br>[TRY] root/password123 -> <span style="color:#0f0">MATCH</span>`, 60);
        printToTerm("[TASK] Log in to target. Type: <b style='color:white'>ssh root@192.168.1.104</b>");
        currentStep++;
    } else if (currentStep === 2 && cmd.includes("ssh root")) {
        printToTerm("<span style='color:#0f0'>[ACCESS GRANTED] Shell established. Mission complete.</span>");
        printToTerm("<span style='color:#555'>Type 'exit' to return to dashboard.</span>");
        updateMonitor(`<div style="color:#0f0">SESSION_ACTIVE</div><br>User: root<br>Host: 192.168.1.104`, 100);
    }
}

function handleSQL(cmd) {
    if (currentStep === 0 && cmd.includes("sqlmap")) {
        printToTerm("[!] Vulnerable parameter detected: 'id'.");
        updateMonitor(`<div style="color:red">VULN_FOUND</div><br>Target: victim.com<br>Type: Boolean-based blind`, 40);
        printToTerm("[TASK] Extract data. Type: <b style='color:white'>--dump</b>");
        currentStep++;
    } else if (currentStep === 1 && cmd === "--dump") {
        printToTerm("[+] admin | 5f4dcc3b5aa765d61d8327deb882cf99");
        printToTerm("<span style='color:#0f0'>[SUCCESS] Database exfiltration complete.</span>");
        printToTerm("<span style='color:#555'>Type 'exit' to close.</span>");
        updateMonitor(`<div style="color:#bc13fe">DATABASE_DUMP:</div><br>Entries: 1<br>Data: admin:$H$9...`, 90);
    }
}

function handleXSS(cmd) {
    if (cmd.includes("<script>")) {
        printToTerm("<span style='color:yellow'>[ALERT] Script executed! Session hijacked.</span>");
        updateMonitor(`<div style="color:yellow">PAYLOAD_EXECUTED</div><br>Cookie: sess_id=X8829...`, 100);
        printToTerm("<span style='color:#0f0'>[SUCCESS] Admin access obtained. Type 'exit' to quit.</span>");
    }
}

function handleRansomware(cmd) {
    if (cmd.includes("encrypt")) {
        printToTerm("[INFO] Initializing RSA-2048 encryption...");
        updateMonitor(`<div style="color:red">ENCRYPTION_COMPLETE</div><br>Algorithm: AES-256-CBC`, 100);
        printToTerm("<span style='color:red'>[!] WARNING: System encrypted. Type 'exit' to finish.</span>");
    }
}

function handleMitigation(cmd) {
    if (currentStep === 0 && cmd.includes("tcpdump")) {
        printToTerm("[WARN] High SYN packet rate detected from 1.2.3.4");
        updateMonitor(`<div style="color:red">TRAFFIC_ANOMALY</div><br>Src: 1.2.3.4`, 90);
        printToTerm("[TASK] Apply firewall drop rule. Type: <b style='color:white'>iptables -A INPUT -s 1.2.3.4 -j DROP</b>");
        currentStep++;
    } else if (currentStep === 1 && cmd.includes("iptables")) {
        printToTerm("[+] IP 1.2.3.4 successfully blocked.");
        updateMonitor(`<div style="color:#0f0">TRAFFIC_FILTERED</div><br>Status: Protected`, 20);
        printToTerm("<span style='color:#0f0'>[SUCCESS] Service stabilized. Type 'exit'.</span>");
    }
}

function handleForensics(cmd) {
    if (currentStep === 0 && cmd.includes("grep 'failed'")) {
        printToTerm("[FOUND] Brute force detected from IP 203.0.113.5");
        updateMonitor(`<div style="color:#bc13fe">LOG_ANALYSIS</div><br>Count: 45<br>Source: 203.0.113.5`, 50);
        printToTerm("[TASK] Trace IP origin. Type: <b style='color:white'>whois 203.0.113.5</b>");
        currentStep++;
    } else if (currentStep === 1 && cmd.includes("whois")) {
        printToTerm("[INFO] Source: EvilHost VPN. Location: EU.");
        updateMonitor(`<div style="color:#bc13fe">INTEL_REPORT</div><br>Country: RU<br>Risk_Score: 9.8/10`, 100);
        printToTerm("<span style='color:#0f0'>[SUCCESS] Investigation complete. Type 'exit'.</span>");
    }
}

function handlePatching(cmd) {
    if (currentStep === 0 && (cmd.includes("apt list") || cmd === "apt")) {
        printToTerm("[WARN] Vulnerable package found: <b>openssl-v1.1.1</b>");
        updateMonitor(`<div style="color:red">CVE_SCAN_RESULTS</div><br>Vuln: CVE-2014-0160 (Heartbleed)`, 80);
        printToTerm("[TASK] Apply patch. Type: <b style='color:white'>apt install --only-upgrade openssl</b>");
        currentStep++;
    } else if (currentStep === 1 && cmd.includes("install")) {
        printToTerm("[+] Patch applied. OpenSSL updated.");
        updateMonitor(`<div style="color:#0f0">VULN_REMEDIATED</div><br>Status: SECURE`, 10);
        printToTerm("<span style='color:#0f0'>[SUCCESS] System SECURE. Type 'exit' to finish.</span>");
    }
}

function printToTerm(text) {
    history.innerHTML += `<div>${text}</div>`;
    // Forza lo scroll sia del terminale che della finestra modale se necessario
    terminal.scrollTop = terminal.scrollHeight;
}

function closeSim() {
    document.getElementById('sim-modal').style.display = "none";
    history.innerHTML = "";
    activeModule = null;
    currentStep = 0;
}

// Focus automatico sull'input se si clicca nel terminale
terminal.addEventListener('click', () => {
    userInput.focus();
});