document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. DATABASE LINGUE E TESTI
    // ==========================================
    const langData = {
        en: {
            pageTitle: "CYBER_RANGE_TOPOLOGY",
            pageSub: "Real-world simulated enterprise environment.",
            backBtn: "RETURN_TO_CORE",
            statusOnline: "ONLINE",
            philTitle: "ARCHITECTURE_PHILOSOPHY",
            philDesc: "The design of this laboratory intentionally deviates from classic CTF scenarios to simulate the dynamics of a real modern enterprise infrastructure.",
            phil1: "<span class='highlight-blue'>Modern Targets:</span> No intentionally outdated machines (e.g., Metasploitable). Targets are modern, patched systems.",
            phil2: "<span class='highlight-red'>Stealth Attack Ops:</span> Using a custom Debian OS for offensive operations instead of Kali Linux, bypassing basic SOC signatures.",
            phil3: "<span class='highlight-green'>Active Defense:</span> Wazuh SIEM integrated with real agents on victim endpoints and OPNsense firewall for active monitoring.",
            phil4: "<span class='highlight-purple'>Air-Gapped Malware Net:</span> Isolated detonation network (VMnet6) utilizing INetSim to spoof malware network checks.",
            labels: { ip: "IP_ADDRESS", os: "OS_KERNEL", role: "ROLE/SVC", notes: "SYS_NOTES // INTEL_REPORT" },
            nodes: {
                fw: { desc: ["Main gateway and edge firewall.", "Handles NAT, strict segmentation, and inter-vlan routing.", "Intrusion Prevention System (IPS) actively monitoring traffic."] },
                atk1: { desc: ["Primary attacker offensive box.", "Equipped with custom C2 frameworks and Metasploit.", "Isolated from host network to prevent accidental leaks."] },
                dc: { desc: ["Windows Server Domain Controller (ARES.LOCAL).", "Deliberately vulnerable to Kerberoasting & AS-REP Roasting.", "Contains misconfigured GPOs for privilege escalation paths."] },
                winclient: { desc: ["Standard domain-joined workstation (Windows 10).", "Used as Patient Zero to simulate phishing payloads.", "Target for lateral movement via Pass-the-Hash."] },
                linweb: { desc: ["Internal LAMP stack application server.", "Hosts custom vulnerable web apps for code injection.", "Contains SUID misconfigurations for Linux root escalation."] },
                wazuh: { desc: ["Centralized SIEM & XDR Manager.", "Ingests syslogs, Windows Event Logs, and Suricata alerts.", "Configured with custom active response rules."] },
                dmzweb: { desc: ["Public-facing Nginx Web Server in isolated DMZ.", "Deliberately vulnerable to SQLi, XSS, and LFI.", "Simulates a compromised external perimeter asset."] },
                malgw: { desc: ["INetSim gateway strictly for the malware network.", "Fakes internet services (DNS, HTTP) for malware execution.", "Air-gapped from production to prevent lateral infection."] },
                flare: { desc: ["Windows FlareVM reverse engineering environment.", "Pre-loaded with x64dbg, Ghidra, and Sysinternals.", "Snapshot-revert enabled after every detonation."] }
            }
        },
        it: {
            pageTitle: "TOPOLOGIA_CYBER_RANGE",
            pageSub: "Ambiente enterprise simulato per operazioni avanzate di attacco e difesa.",
            backBtn: "RITORNA_AL_CORE",
            statusOnline: "ONLINE",
            philTitle: "FILOSOFIA_ARCHITETTURALE",
            philDesc: "Il design di questo laboratorio si discosta volutamente dai classici scenari CTF per simulare le dinamiche di una vera infrastruttura enterprise moderna.",
            phil1: "<span class='highlight-blue'>Target Moderni:</span> Nessuna macchina intenzionalmente obsoleta (es. Metasploitable). I target sono sistemi moderni patchati.",
            phil2: "<span class='highlight-red'>Operazioni Stealth:</span> Utilizzo di una Debian custom per le offensive al posto di Kali Linux, per evadere le signature dei SOC.",
            phil3: "<span class='highlight-green'>Difesa Attiva:</span> Wazuh SIEM integrato con agenti reali sui sistemi vittima e sul firewall per un monitoraggio attivo.",
            phil4: "<span class='highlight-purple'>Malware Net Isolata:</span> Rete per detonazione 'Air-gapped' (VMnet6) con INetSim per ingannare i check di rete dei malware.",
            labels: { ip: "INDIRIZZO_IP", os: "SISTEMA_OPERATIVO", role: "RUOLO_NODO", notes: "SYS_NOTES // REPORT_INTELLIGENCE" },
            nodes: {
                fw: { desc: ["Gateway principale e firewall perimetrale.", "Gestisce regole rigide di NAT, segmentazione e routing Inter-VLAN.", "Intrusion Prevention System (IPS) in monitoraggio attivo."] },
                atk1: { desc: ["Macchina offensiva primaria (Red Team).", "Equipaggiata con framework C2 custom e Metasploit.", "Totalmente isolata dalla rete host fisica per sicurezza."] },
                dc: { desc: ["Domain Controller Windows Server (Dominio: ARES.LOCAL).", "Vulnerabilità attive: Kerberoasting e AS-REP Roasting.", "GPO configurate in modo errato per test di Privilege Escalation."] },
                winclient: { desc: ["Workstation standard connessa al dominio (Windows 10).", "Utilizzata come 'Paziente Zero' per simulazioni di phishing.", "Bersaglio per movimenti laterali tramite Pass-the-Hash."] },
                linweb: { desc: ["Application server interno con stack LAMP.", "Ospita web app vulnerabili custom per test di Code Injection.", "File SUID mal configurati per test di escalation a root."] },
                wazuh: { desc: ["Manager centralizzato SIEM & XDR.", "Raccoglie Syslog, Eventi Windows e alert di Suricata IPS.", "Regole personalizzate di Active Response per la mitigazione."] },
                dmzweb: { desc: ["Web Server Nginx esposto al pubblico in DMZ isolata.", "Deliberatamente vulnerabile a SQLi, XSS e LFI.", "Simula un asset del perimetro esterno compromesso."] },
                malgw: { desc: ["Gateway INetSim dedicato esclusivamente alla rete Malware.", "Simula servizi internet (DNS, HTTP) per ingannare i malware.", "Rete 'Air-gapped' per prevenire infezioni accidentali."] },
                flare: { desc: ["Ambiente FlareVM per Reverse Engineering di malware.", "Strumentazione completa: x64dbg, Ghidra e Sysinternals suite.", "Revert automatico degli snapshot dopo ogni detonazione."] }
            }
        },
        es: {
            pageTitle: "TOPOLOGÍA_CYBER_RANGE",
            pageSub: "Entorno empresarial simulado para operaciones ofensivas y defensivas.",
            backBtn: "VOLVER_AL_CORE",
            statusOnline: "EN_LÍNEA",
            philTitle: "FILOSOFÍA_DE_ARQUITECTURA",
            philDesc: "El diseño de este laboratorio se aleja intencionalmente de los escenarios clásicos de CTF para simular la dinámica de una infraestructura empresarial moderna.",
            phil1: "<span class='highlight-blue'>Objetivos Modernos:</span> Sin máquinas obsoletas (ej. Metasploitable). Los objetivos son sistemas modernos.",
            phil2: "<span class='highlight-red'>Operaciones Sigilosas:</span> Uso de un OS Debian personalizado en lugar de Kali Linux para evadir firmas del SOC.",
            phil3: "<span class='highlight-green'>Defensa Activa:</span> Wazuh SIEM integrado con agentes reales en los endpoints y firewall para monitoreo.",
            phil4: "<span class='highlight-purple'>Red de Malware Aislada:</span> Red de detonación aislada (VMnet6) con INetSim para análisis seguro.",
            labels: { ip: "DIRECCIÓN_IP", os: "SISTEMA_OPERATIVO", role: "ROL_DEL_NODO", notes: "SYS_NOTES // REPORTE_INTEL" },
            nodes: {
                fw: { desc: ["Puerta de enlace principal y firewall.", "Maneja NAT, segmentación estricta y enrutamiento inter-vlan.", "IPS monitoreando activamente el tráfico."] },
                atk1: { desc: ["Máquina atacante principal (Red Team).", "Equipada con frameworks C2 y Metasploit.", "Aislada de la red host para evitar fugas."] },
                dc: { desc: ["Controlador de Dominio Windows (ARES.LOCAL).", "Vulnerable a Kerberoasting y AS-REP Roasting.", "GPOs mal configuradas para escalada de privilegios."] },
                winclient: { desc: ["Estación de trabajo en dominio (Windows 10).", "Paciente Cero para simulaciones de phishing.", "Objetivo para movimiento lateral (Pass-the-Hash)."] },
                linweb: { desc: ["Servidor de aplicaciones interno (LAMP).", "Aloja aplicaciones web vulnerables para inyección.", "Mala configuración SUID para escalada a root en Linux."] },
                wazuh: { desc: ["Gestor centralizado SIEM & XDR.", "Recopila Syslogs, Eventos de Windows y alertas de Suricata.", "Reglas de respuesta activa personalizadas."] },
                dmzweb: { desc: ["Servidor Web público en DMZ aislada.", "Vulnerable deliberadamente a SQLi, XSS y LFI.", "Simula un activo del perímetro externo comprometido."] },
                malgw: { desc: ["Puerta de enlace INetSim para análisis de malware.", "Falsifica servicios de internet (DNS, HTTP).", "Aislado (Air-gapped) para evitar infecciones."] },
                flare: { desc: ["Entorno FlareVM para ingeniería inversa.", "Pre-cargado con x64dbg, Ghidra y Sysinternals.", "Reversión de instantáneas tras cada detonación."] }
            }
        }
    };

    const machineSpecs = {
        fw: { hostname: "FW-OPNSENSE", ip: "10.10.10.1", os: "FreeBSD / OPNsense", role: "Router / Edge Firewall" },
        atk1: { hostname: "ATK-DEBIAN01", ip: "10.10.10.10", os: "Debian Custom", role: "Offensive Operations" },
        dc: { hostname: "DC-ARES01", ip: "10.10.20.10", os: "Windows Server 2022", role: "Active Directory DC" },
        winclient: { hostname: "WIN-CLIENT01", ip: "10.10.20.20", os: "Windows 10 Pro x64", role: "Corporate Endpoint" },
        linweb: { hostname: "LINUX-WEB01", ip: "10.10.20.30", os: "Ubuntu Server 22.04", role: "Internal Web App" },
        wazuh: { hostname: "SOC-WAZUH01", ip: "10.10.30.10", os: "CentOS / Linux", role: "SIEM & IDS Manager" },
        dmzweb: { hostname: "DMZ-WEB01", ip: "10.10.40.20", os: "Debian 12", role: "Public Web Server" },
        malgw: { hostname: "MAL-GW01", ip: "10.66.66.1", os: "REMnux Linux", role: "INetSim Gateway" },
        flare: { hostname: "FLARE-WIN01", ip: "10.66.66.10", os: "Windows 10 Commando", role: "Malware Sandbox" }
    };

    let currentLang = 'it'; 

    function setLanguage(lang) {
        currentLang = lang;
        const data = langData[lang];

        if(document.getElementById('page-title')) document.getElementById('page-title').innerText = data.pageTitle;
        if(document.getElementById('back-btn-text')) document.getElementById('back-btn-text').innerText = data.backBtn;
        
        if(document.getElementById('phil-title')) {
            document.getElementById('phil-title').innerHTML = `<i class="fas fa-book-reader"></i> ${data.philTitle}`;
            document.getElementById('phil-desc').innerText = data.philDesc;
            document.getElementById('phil-1').innerHTML = data.phil1;
            document.getElementById('p-stealth').innerHTML = data.phil2;
            document.getElementById('p-soc').innerHTML = data.phil3;
            document.getElementById('p-mal').innerHTML = data.phil4;
        }

        document.querySelectorAll('.status-txt').forEach(el => el.innerText = data.statusOnline);
        document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.getElementById(`lang-${lang}`);
        if(activeBtn) activeBtn.classList.add('active');

        if(document.getElementById('node-modal') && document.getElementById('node-modal').style.display === 'flex') {
            updateModalTranslations();
        }
    }

    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
    document.getElementById('lang-it').addEventListener('click', () => setLanguage('it'));
    document.getElementById('lang-es').addEventListener('click', () => setLanguage('es'));

    const modal = document.getElementById('node-modal');
    const closeBtn = document.getElementById('close-modal');
    let currentNodeId = null; 

    document.querySelectorAll('.vm-node, .fw-box').forEach(node => {
        node.addEventListener('click', () => {
            currentNodeId = node.getAttribute('data-node');
            const specs = machineSpecs[currentNodeId];
            if(specs) {
                document.getElementById('modal-hostname').innerText = specs.hostname;
                document.getElementById('modal-ip').innerText = specs.ip;
                document.getElementById('modal-os').innerText = specs.os;
                document.getElementById('modal-role').innerText = specs.role;
                updateModalTranslations();
                modal.classList.add('show-modal'); // MODO CORRETTO
            }
        });
    });

    function updateModalTranslations() {
        if(!currentNodeId) return;
        const labels = langData[currentLang].labels;
        const descArray = langData[currentLang].nodes[currentNodeId].desc;

        const labelElements = document.querySelectorAll('.tech-label');
        if(labelElements.length >= 4) {
            labelElements[0].innerText = labels.ip;
            labelElements[1].innerText = labels.os;
            labelElements[2].innerText = labels.role;
            labelElements[3].innerText = labels.notes;
        }

        const listContainer = document.getElementById('modal-desc-list');
        listContainer.innerHTML = ""; 
        descArray.forEach(item => {
            const li = document.createElement('li');
            li.innerText = item;
            listContainer.appendChild(li);
        });
    }

    if(closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('show-modal')); // MODO CORRETTO
    window.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('show-modal'); }); // MODO CORRETTO

    setLanguage(currentLang);

    // ==========================================
    // 4. SIMULATORE DI RETE LIVE (ONLY ENGLISH)
    // ==========================================
    const logBox = document.getElementById('traffic-log');
    
    function logTraffic(message, type) {
        if(!logBox) return;
        const p = document.createElement('p');
        p.className = type === 'attack' ? 'log-atk' : 'log-def';
        const time = new Date().toLocaleTimeString('en-US', { hour12: false }); 
        p.innerText = `[${time}] ${message}`;
        logBox.appendChild(p);
        logBox.scrollTop = logBox.scrollHeight;
    }

    const scenarios = [
        { attacker: 'atk1', target: 'dmzweb', def: 'wazuh', logAtk: "> ATK-DEBIAN injecting SQLi payload to DMZ-WEB01...", logDef: "> WAZUH ALERT: SQL Injection pattern blocked on DMZ!" },
        { attacker: 'atk1', target: 'dc', def: 'wazuh', logAtk: "> ATK-DEBIAN requesting TGS tickets (Kerberoasting)...", logDef: "> WAZUH ALERT: Anomalous Kerberos ticket request on DC-ARES01!" },
        { attacker: 'atk1', target: 'fw', def: 'fw', logAtk: "> ATK-DEBIAN initiating stealth SYN port scan...", logDef: "> FW-OPNSENSE ALERT: IPS blocking source IP for Port Scan." },
        { attacker: 'winclient', target: 'dc', def: 'wazuh', logAtk: "> WIN-CLIENT attempting Pass-the-Hash lateral movement...", logDef: "> WAZUH ALERT: Suspicious NTLM auth traffic detected!" }
    ];

    setInterval(() => {
        document.querySelectorAll('.vm-node, .fw-box').forEach(n => {
            n.classList.remove('active-attack', 'active-target', 'active-defense');
        });

        const s = scenarios[Math.floor(Math.random() * scenarios.length)];
        const nodeAtk = document.getElementById(`node-${s.attacker}`);
        const nodeTgt = document.getElementById(`node-${s.target}`);
        const nodeDef = document.getElementById(`node-${s.def}`);

        if(nodeAtk) nodeAtk.classList.add('active-attack');
        logTraffic(s.logAtk, 'attack');

        setTimeout(() => {
            if(nodeTgt) nodeTgt.classList.add('active-target');
            if(nodeDef) nodeDef.classList.add('active-defense');
            logTraffic(s.logDef, 'defense');
            
            setTimeout(() => {
                if(nodeAtk) nodeAtk.classList.remove('active-attack');
                if(nodeTgt) nodeTgt.classList.remove('active-target');
                if(nodeDef) nodeDef.classList.remove('active-defense');
            }, 2000);

        }, 1500);

    }, 8000); 

});