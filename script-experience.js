document.addEventListener('DOMContentLoaded', function() {
    const expTranslations = {
        en: {
            title: "[ EVENT_LOG: CAREER_HISTORY ]",
            exit: "EXIT",
            logStatusOk: "[OK]",
            logStatusInfo: "[INFO]",
            exp1Title: "Cybersecurity Analyst",
            exp1Details: [
                "Network monitoring and threat detection using SOC tools.",
                "Analysis of security logs and incident response activities.",
                "Vulnerability scanning and remediation reporting."
            ],
            exp2Title: "IT Specialist",
            exp2Details: [
                "Management of virtualization environments (VMware/Proxmox).",
                "Configuration of network devices (Switches, Routers, Firewalls).",
                "Support for Windows/Linux server administration."
            ]
        },
        it: {
            title: "[ REGISTRO_EVENTI: STORIA_CARRIERA ]",
            exit: "ESCI",
            logStatusOk: "[OK]",
            logStatusInfo: "[INFO]",
            exp1Title: "Analista Cybersecurity",
            exp1Details: [
                "Monitoraggio di rete e rilevamento minacce tramite strumenti SOC.",
                "Analisi dei log di sicurezza e attività di incident response.",
                "Scansione delle vulnerabilità e reportistica di remediation."
            ],
            exp2Title: "Specialista IT",
            exp2Details: [
                "Gestione di ambienti di virtualizzazione (VMware/Proxmox).",
                "Configurazione di dispositivi di rete (Switch, Router, Firewall).",
                "Supporto per l'amministrazione di server Windows/Linux."
            ]
        },
        es: {
            title: "[ LOG_EVENTOS: HISTORIAL_PROFESIONAL ]",
            exit: "SALIR",
            logStatusOk: "[OK]",
            logStatusInfo: "[INFO]",
            exp1Title: "Analista de Ciberseguridad",
            exp1Details: [
                "Monitoreo de red y detección de amenazas con herramientas SOC.",
                "Análisis de logs de seguridad y respuesta a incidentes.",
                "Escaneo de vulnerabilidades y gestión de remediación."
            ],
            exp2Title: "Especialista IT",
            exp2Details: [
                "Gestión de entornos de virtualización (VMware/Proxmox).",
                "Configuración de dispositivos de red (Switches, Routers, Firewalls).",
                "Soporte para administración de servidores Windows/Linux."
            ]
        }
    };

    function changeLanguage(lang) {
        const data = expTranslations[lang];
        
        // Traduzione Titolo e tasto Exit
        document.querySelector('.log-title').textContent = data.title;
        document.querySelector('.home-text').textContent = data.exit;
        
        // Seleziona le card (log-entry)
        const entries = document.querySelectorAll('.log-entry');
        
        // Traduzione Card 1 (Cybersecurity Analyst)
        if (entries[0]) {
            entries[0].querySelector('.log-status').textContent = data.logStatusOk;
            entries[0].querySelector('h3').innerHTML = `${data.exp1Title} <span class="at">@</span> Enterprise Defense Ltd.`;
            const list1 = entries[0].querySelectorAll('li');
            data.exp1Details.forEach((text, i) => { if(list1[i]) list1[i].textContent = text; });
        }

        // Traduzione Card 2 (IT Specialist)
        if (entries[1]) {
            entries[1].querySelector('.log-status').textContent = data.logStatusInfo;
            entries[1].querySelector('h3').innerHTML = `${data.exp2Title} <span class="at">@</span> Tech Core Solutions`;
            const list2 = entries[1].querySelectorAll('li');
            data.exp2Details.forEach((text, i) => { if(list2[i]) list2[i].textContent = text; });
        }
    }

    // Event Listeners per i bottoni con ID
    document.getElementById('english').onclick = () => changeLanguage('en');
    document.getElementById('italian').onclick = () => changeLanguage('it');
    document.getElementById('spanish').onclick = () => changeLanguage('es');

    // Default Language
    changeLanguage('en'); 
});