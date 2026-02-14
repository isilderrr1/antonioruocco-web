const translations = {
    en: {
        exit_btn: "[ EXIT_TO_DASHBOARD ]",
        archive_title: "> DECLASSIFIED_INTELLIGENCE_ARCHIVE",
        status_line: "ACCESS_LEVEL: LEVEL_4 | STATUS: ENCRYPTED_LINK_ACTIVE",
        filter_all: "ALL_THREATS",
        filter_apt: "APT_GROUPS",
        filter_vuln: "VULNERABILITIES",
        archive_desc: "This database contains declassified technical analyses of high-profile cyber threats, Advanced Persistent Threats (APTs), and critical vulnerabilities. All data has been verified and sanitized for educational and research purposes.",
        read_more: "READ_FULL_ANALYSIS",
        case1_title: "APT: LAZARUS GROUP",
        case1_summary: "Analysis of state-sponsored cyber-espionage and financial heist operations linked to North Korea.",
        case2_title: "WANNACRY RANSOMWARE",
        case2_summary: "Technical breakdown of the global worm exploiting the EternalBlue (MS17-010) vulnerability.",
        case3_title: "MOVEit ZERO-DAY",
        case3_summary: "Analysis of the massive SQL injection (CVE-2023-34362) used for large-scale data exfiltration.",
        case4_title: "STUXNET WORM",
        case4_summary: "Deconstruction of the most sophisticated cyber-weapon designed for industrial sabotage.",
        case5_title: "REvil RANSOMWARE",
        case5_summary: "Analysis of the RaaS model and the supply chain attack against Kaseya VSA.",
        case6_title: "CROWDSTRIKE INCIDENT",
        case6_summary: "Technical post-mortem of the logic error in Channel File 291 that crashed 8.5M devices."
    },
    it: {
        exit_btn: "[ DISCONNETTI ]",
        archive_title: "> ARCHIVIO_INTELLIGENCE_DECLASSIFICATO",
        status_line: "LIVELLO_ACCESSO: 4 | STATO: TUNNEL_CRITTOGRAFATO_ATTIVO",
        filter_all: "TUTTE_LE_MINACCE",
        filter_apt: "GRUPPI_APT",
        filter_vuln: "VULNERABILITÀ",
        archive_desc: "Questo database contiene analisi tecniche declassificate di minacce informatiche di alto profilo, Advanced Persistent Threats (APT) e vulnerabilità critiche. Tutti i dati sono stati verificati e bonificati per scopi educativi e di ricerca.",
        read_more: "LEGGI_ANALISI_COMPLETA",
        case1_title: "APT: GRUPPO LAZARUS",
        case1_summary: "Analisi delle operazioni di spionaggio informatico e furti finanziari legati alla Corea del Nord.",
        case2_title: "WANNACRY RANSOMWARE",
        case2_summary: "Analisi tecnica del worm che ha sfruttato la vulnerabilità EternalBlue (MS17-010).",
        case3_title: "MOVEit ZERO-DAY",
        case3_summary: "Analisi della SQL injection massiva (CVE-2023-34362) usata per l'esfiltrazione dati.",
        case4_title: "WORM STUXNET",
        case4_summary: "Decostruzione della più sofisticata arma informatica progettata per il sabotaggio industriale.",
        case5_title: "REvil RANSOMWARE",
        case5_summary: "Analisi del modello RaaS e dell'attacco supply chain contro Kaseya VSA.",
        case6_title: "INCIDENTE CROWDSTRIKE",
        case6_summary: "Post-mortem tecnico dell'errore logico nel Channel File 291 che ha bloccato 8.5M di dispositivi."
    },
    es: {
        exit_btn: "[ DESCONECTAR ]",
        archive_title: "> ARCHIVO_DE_INTELIGENCIA_DESCLASIFICADO",
        status_line: "NIVEL_ACCESO: 4 | ESTADO: ENLACE_ENCRIPTADO_ACTIVO",
        filter_all: "TODAS_LAS_AMENAZAS",
        filter_apt: "GRUPOS_APT",
        filter_vuln: "VULNERABILIDADES",
        archive_desc: "Esta base de datos contiene análisis técnicos desclasificados de amenazas cibernéticas de alto perfil, Amenazas Persistentes Avanzadas (APT) y vulnerabilidades críticas. Todos los datos han sido verificados y sanitizados con fines educativos y de investigación.",
        read_more: "LEER_ANÁLISIS_COMPLETO",
        case1_title: "APT: GRUPO LAZARUS",
        case1_summary: "Análisis de operaciones de ciberespionaje y robos financieros vinculados a Corea del Norte.",
        case2_title: "WANNACRY RANSOMWARE",
        case2_summary: "Desglose técnico del gusano que explotó la vulnerabilidad EternalBlue (MS17-010).",
        case3_title: "MOVEit ZERO-DAY",
        case3_summary: "Análisis de la inyección SQL masiva (CVE-2023-34362) utilizada para la exfiltración de datos.",
        case4_title: "STUXNET WORM",
        case4_summary: "Deconstrucción del arma cibernética más sofisticada diseñada para el sabotaje industrial.",
        case5_title: "REvil RANSOMWARE",
        case5_summary: "Análisis del modelo RaaS y del ataque a la cadena de suministro contra Kaseya VSA.",
        case6_title: "INCIDENTE CROWDSTRIKE",
        case6_summary: "Post-mortem técnico del error lógico en el Channel File 291 que colapsó 8.5M de dispositivos."
    }
};

const reportDetails = {
    en: {
        "case-1": `
            <strong>CONTEXT:</strong> State-sponsored actor (North Korea) focused on funding the regime bypassing international sanctions through massive cyber-heists and crypto theft.<br><br>
            <strong>TECHNICAL BREAKDOWN:</strong>
            <ul>
                <li><strong>Payload:</strong> Custom 'Manuscrypt' backdoor.</li>
                <li><strong>Execution:</strong> DLL Side-loading through legitimate signed binaries to bypass EDR.</li>
                <li><strong>C2 Infrastructure:</strong> Multi-tier proxy network masking exfiltration traffic.</li>
            </ul><br>
            <strong>IMPACT & EFFECTS:</strong> Hundreds of millions of dollars stolen globally (e.g., Bangladesh Bank heist, Ronin Network). Severe compromise of DeFi platforms.<br><br>
            <strong>RESOLUTION:</strong> Enhanced SWIFT network security protocols, international sanctions, and freezing of laundered crypto assets by global task forces.
        `,
        "case-2": `
            <strong>CONTEXT:</strong> May 2017 global ransomware epidemic. The threat actors weaponized 'EternalBlue', an exploit allegedly developed by the NSA and leaked by the Shadow Brokers.<br><br>
            <strong>TECHNICAL BREAKDOWN:</strong>
            <ul>
                <li><strong>Exploitation:</strong> Buffer overflow in the SMBv1 protocol via crafted packets.</li>
                <li><strong>Propagation:</strong> DoublePulsar backdoor installed the payload spreading it automatically across LANs and WANs.</li>
            </ul><br>
            <strong>IMPACT & EFFECTS:</strong> 200,000+ computers infected in 150 countries. Critical disruption to the UK's NHS, FedEx, and global logistics, causing billions in damages.<br><br>
            <strong>RESOLUTION:</strong> A security researcher (Marcus Hutchins) registered a hardcoded "kill-switch" domain, halting the worm's spread. Microsoft issued emergency out-of-band patches (KB4012598).
        `,
        "case-3": `
            <strong>CONTEXT:</strong> May 2023 zero-day exploitation by the Cl0p ransomware gang targeting Progress Software's MOVEit Transfer, a managed file transfer (MFT) solution.<br><br>
            <strong>TECHNICAL BREAKDOWN:</strong>
            <ul>
                <li><strong>Injection:</strong> Unauthenticated SQL Injection (CVE-2023-34362) in the 'moveitisapi.dll' endpoint.</li>
                <li><strong>Web Shell:</strong> Deployment of 'human2.aspx' to manipulate Azure Blob Storage.</li>
            </ul><br>
            <strong>IMPACT & EFFECTS:</strong> Exfiltration of highly sensitive data affecting over 60 million individuals and thousands of government and corporate entities worldwide.<br><br>
            <strong>RESOLUTION:</strong> Vendor released emergency patches. Organizations were forced to rotate all service account credentials, Azure SAS tokens, and audit IIS logs for exfiltration signs.
        `,
        "case-4": `
            <strong>CONTEXT:</strong> Discovered in 2010, widely believed to be a joint US-Israeli cyberweapon aimed at sabotaging Iran's nuclear enrichment program.<br><br>
            <strong>TECHNICAL BREAKDOWN:</strong>
            <ul>
                <li><strong>Zero-Days:</strong> Utilized four 0-days, including LNK vulnerability (CVE-2010-2568).</li>
                <li><strong>Payload:</strong> Injected code into Siemens Simatic S7-300 PLCs, altering centrifuge rotor speeds while spoofing normal telemetry to operators.</li>
            </ul><br>
            <strong>IMPACT & EFFECTS:</strong> Physically destroyed approximately 1,000 nuclear centrifuges at the Natanz facility, significantly delaying the nuclear program. It changed the landscape of ICS/OT security forever.<br><br>
            <strong>RESOLUTION:</strong> The code eventually escaped into the wild. Siemens updated PLC firmware, and industries globally adopted strict air-gapping and zero-trust OT architecture.
        `,
        "case-5": `
            <strong>CONTEXT:</strong> July 2021 supply chain attack. The REvil gang compromised Kaseya VSA, a remote monitoring tool used by Managed Service Providers (MSPs).<br><br>
            <strong>TECHNICAL BREAKDOWN:</strong>
            <ul>
                <li><strong>Vector:</strong> Authentication bypass and arbitrary command execution on VSA servers.</li>
                <li><strong>Deployment:</strong> Pushed malicious payloads as legitimate "software updates" disabling Windows Defender via PowerShell.</li>
            </ul><br>
            <strong>IMPACT & EFFECTS:</strong> Up to 1,500 downstream businesses encrypted globally. Massive operational downtime with an initial ransom demand of $70 million.<br><br>
            <strong>RESOLUTION:</strong> Kaseya shut down SaaS servers immediately and deployed patches. A universal decryptor key was later obtained through global law enforcement operations.
        `,
        "case-6": `
            <strong>CONTEXT:</strong> July 2024 global IT outage. Not a cyberattack, but a catastrophic failure in QA testing by cybersecurity vendor CrowdStrike during a routine sensor update.<br><br>
            <strong>TECHNICAL BREAKDOWN:</strong>
            <ul>
                <li><strong>Logic Error:</strong> Channel File 291 update contained an out-of-bounds memory read (null pointer reference).</li>
                <li><strong>Kernel Panic:</strong> As the Falcon sensor operates at Ring 0 (Kernel), the invalid read triggered an immediate BugCheck.</li>
            </ul><br>
            <strong>IMPACT & EFFECTS:</strong> 8.5 million Windows devices crashed into a Blue Screen of Death (BSOD) loop. Grounded flights globally, halted banking operations, and disrupted hospitals.<br><br>
            <strong>RESOLUTION:</strong> Required manual intervention (booting into Safe Mode to delete the corrupted .sys file). CrowdStrike subsequently completely overhauled their staged rollout and testing procedures.
        `
    },
    it: {
        "case-1": `
            <strong>CONTESTO:</strong> Attore state-sponsored (Corea del Nord) focalizzato sul finanziamento del regime eludendo le sanzioni internazionali attraverso furti finanziari e di criptovalute su larga scala.<br><br>
            <strong>ANALISI TECNICA:</strong>
            <ul>
                <li><strong>Payload:</strong> Backdoor personalizzata 'Manuscrypt'.</li>
                <li><strong>Esecuzione:</strong> DLL Side-loading tramite binari legittimi firmati per eludere i sistemi EDR.</li>
                <li><strong>Infrastruttura C2:</strong> Rete proxy multi-livello per mascherare il traffico di esfiltrazione.</li>
            </ul><br>
            <strong>EFFETTI E IMPATTO:</strong> Centinaia di milioni di dollari rubati a livello globale (es. attacco alla Banca del Bangladesh, Ronin Network). Grave compromissione delle piattaforme DeFi.<br><br>
            <strong>RISOLUZIONE:</strong> Miglioramento dei protocolli di sicurezza della rete SWIFT, sanzioni internazionali e congelamento degli asset crittografici riciclati da parte delle task force globali.
        `,
        "case-2": `
            <strong>CONTESTO:</strong> Epidemia globale di ransomware del maggio 2017. Gli attaccanti hanno armato 'EternalBlue', un exploit sviluppato dalla NSA e trapelato tramite i Shadow Brokers.<br><br>
            <strong>ANALISI TECNICA:</strong>
            <ul>
                <li><strong>Sfruttamento:</strong> Buffer overflow nel protocollo SMBv1 tramite pacchetti manipolati.</li>
                <li><strong>Propagazione:</strong> La backdoor DoublePulsar ha installato il payload diffondendolo automaticamente attraverso LAN e WAN.</li>
            </ul><br>
            <strong>EFFETTI E IMPATTO:</strong> Oltre 200.000 computer infettati in 150 paesi. Interruzione critica del sistema sanitario britannico (NHS), di FedEx e della logistica globale, causando danni per miliardi.<br><br>
            <strong>RISOLUZIONE:</strong> Un ricercatore (Marcus Hutchins) ha registrato un dominio "kill-switch" hardcoded nel codice, bloccando la diffusione. Microsoft ha rilasciato patch di emergenza fuori ciclo (KB4012598).
        `,
        "case-3": `
            <strong>CONTESTO:</strong> Maggio 2023, sfruttamento zero-day da parte della gang ransomware Cl0p contro MOVEit Transfer di Progress Software, una soluzione per il trasferimento sicuro di file (MFT).<br><br>
            <strong>ANALISI TECNICA:</strong>
            <ul>
                <li><strong>Iniezione:</strong> SQL Injection non autenticata (CVE-2023-34362) nell'endpoint 'moveitisapi.dll'.</li>
                <li><strong>Web Shell:</strong> Distribuzione di 'human2.aspx' per manipolare l'Azure Blob Storage.</li>
            </ul><br>
            <strong>EFFETTI E IMPATTO:</strong> Esfiltrazione di dati altamente sensibili che ha colpito oltre 60 milioni di individui e migliaia di enti governativi e aziendali in tutto il mondo.<br><br>
            <strong>RISOLUZIONE:</strong> Il vendor ha rilasciato patch di emergenza. Le organizzazioni hanno dovuto ruotare le credenziali degli account di servizio, i token SAS di Azure e analizzare i log IIS per rilevare le esfiltrazioni.
        `,
        "case-4": `
            <strong>CONTESTO:</strong> Scoperto nel 2010, si ritiene sia un'arma informatica congiunta USA-Israele volta a sabotare il programma di arricchimento nucleare dell'Iran.<br><br>
            <strong>ANALISI TECNICA:</strong>
            <ul>
                <li><strong>Zero-Days:</strong> Ha utilizzato quattro vulnerabilità 0-day, inclusa la falla LNK (CVE-2010-2568).</li>
                <li><strong>Payload:</strong> Codice iniettato nei PLC Siemens Simatic S7-300, che ha alterato la velocità dei rotori delle centrifughe falsificando al contempo la telemetria mostrata agli operatori.</li>
            </ul><br>
            <strong>EFFETTI E IMPATTO:</strong> Ha distrutto fisicamente circa 1.000 centrifughe nucleari nell'impianto di Natanz, ritardando significativamente il programma nucleare. Ha cambiato per sempre il panorama della sicurezza ICS/OT.<br><br>
            <strong>RISOLUZIONE:</strong> Il codice è infine sfuggito al controllo finendo su internet. Siemens ha aggiornato i firmware dei PLC e le industrie hanno adottato rigide architetture OT "air-gapped" e zero-trust.
        `,
        "case-5": `
            <strong>CONTESTO:</strong> Attacco alla supply chain del luglio 2021. La gang REvil ha compromesso Kaseya VSA, uno strumento di monitoraggio remoto utilizzato dai Managed Service Providers (MSP).<br><br>
            <strong>ANALISI TECNICA:</strong>
            <ul>
                <li><strong>Vettore:</strong> Bypass dell'autenticazione ed esecuzione di comandi arbitrari sui server VSA.</li>
                <li><strong>Distribuzione:</strong> Ha inviato payload malevoli mascherati da "aggiornamenti software" legittimi, disabilitando Windows Defender tramite PowerShell.</li>
            </ul><br>
            <strong>EFFETTI E IMPATTO:</strong> Fino a 1.500 aziende a valle crittografate a livello globale. Enormi tempi di inattività operativa con una richiesta di riscatto iniziale di 70 milioni di dollari.<br><br>
            <strong>RISOLUZIONE:</strong> Kaseya ha spento immediatamente i server SaaS e ha distribuito patch. Una chiave di decrittazione universale è stata successivamente ottenuta tramite operazioni delle forze dell'ordine internazionali.
        `,
        "case-6": `
            <strong>CONTESTO:</strong> Disservizio IT globale del luglio 2024. Non un attacco informatico, ma un catastrofico fallimento nei test di QA da parte di CrowdStrike durante un aggiornamento di routine del sensore.<br><br>
            <strong>ANALISI TECNICA:</strong>
            <ul>
                <li><strong>Errore Logico:</strong> L'aggiornamento del Channel File 291 conteneva una lettura di memoria fuori limite (riferimento a un puntatore nullo).</li>
                <li><strong>Kernel Panic:</strong> Poiché il sensore Falcon opera al Ring 0 (Kernel), la lettura non valida ha innescato un BugCheck immediato.</li>
            </ul><br>
            <strong>EFFETTI E IMPATTO:</strong> 8,5 milioni di dispositivi Windows si sono bloccati in un loop di Blue Screen of Death (BSOD). Voli bloccati a livello globale, operazioni bancarie interrotte e ospedali paralizzati.<br><br>
            <strong>RISOLUZIONE:</strong> Ha richiesto un intervento manuale (avvio in modalità provvisoria per eliminare il file .sys corrotto). CrowdStrike ha successivamente revisionato completamente le proprie procedure di test e di rilascio scaglionato.
        `
    },
    es: {
        "case-1": `
            <strong>CONTEXTO:</strong> Actor patrocinado por el estado (Corea del Norte) enfocado en financiar al régimen eludiendo sanciones internacionales mediante robos cibernéticos masivos y sustracción de criptomonedas.<br><br>
            <strong>ANÁLISIS TÉCNICO:</strong>
            <ul>
                <li><strong>Payload:</strong> Backdoor personalizada 'Manuscrypt'.</li>
                <li><strong>Ejecución:</strong> DLL Side-loading a través de binarios legítimos firmados para eludir sistemas EDR.</li>
                <li><strong>Infraestructura C2:</strong> Red proxy multinivel para enmascarar el tráfico de exfiltración.</li>
            </ul><br>
            <strong>IMPACTO Y EFECTOS:</strong> Cientos de millones de dólares robados a nivel mundial (ej. robo al Banco de Bangladesh, Ronin Network). Compromiso severo de plataformas DeFi.<br><br>
            <strong>RESOLUCIÓN:</strong> Mejora de los protocolos de seguridad de la red SWIFT, sanciones internacionales y congelación de criptoactivos lavados por parte de fuerzas de trabajo globales.
        `,
        "case-2": `
            <strong>CONTEXTO:</strong> Epidemia global de ransomware en mayo de 2017. Los atacantes utilizaron 'EternalBlue', un exploit supuestamente desarrollado por la NSA y filtrado por los Shadow Brokers.<br><br>
            <strong>ANÁLISIS TÉCNICO:</strong>
            <ul>
                <li><strong>Explotación:</strong> Desbordamiento de búfer en el protocolo SMBv1 mediante paquetes manipulados.</li>
                <li><strong>Propagación:</strong> La puerta trasera DoublePulsar instaló el payload propagándolo automáticamente por redes LAN y WAN.</li>
            </ul><br>
            <strong>IMPACTO Y EFECTOS:</strong> Más de 200.000 ordenadores infectados en 150 países. Interrupción crítica del NHS del Reino Unido, FedEx y logística global, causando miles de millones en daños.<br><br>
            <strong>RESOLUCIÓN:</strong> Un investigador (Marcus Hutchins) registró un dominio "kill-switch" incrustado en el código, deteniendo la propagación. Microsoft emitió parches de emergencia (KB4012598).
        `,
        "case-3": `
            <strong>CONTEXTO:</strong> Mayo de 2023, explotación zero-day por parte de la banda de ransomware Cl0p contra MOVEit Transfer de Progress Software, una solución de transferencia de archivos (MFT).<br><br>
            <strong>ANÁLISIS TÉCNICO:</strong>
            <ul>
                <li><strong>Inyección:</strong> Inyección SQL no autenticada (CVE-2023-34362) en el endpoint 'moveitisapi.dll'.</li>
                <li><strong>Web Shell:</strong> Despliegue de 'human2.aspx' para manipular Azure Blob Storage.</li>
            </ul><br>
            <strong>IMPACTO Y EFECTOS:</strong> Exfiltración de datos altamente confidenciales que afectó a más de 60 millones de personas y miles de entidades gubernamentales y corporativas en todo el mundo.<br><br>
            <strong>RESOLUCIÓN:</strong> El proveedor lanzó parches de emergencia. Las organizaciones se vieron obligadas a rotar las credenciales de cuentas de servicio, tokens SAS de Azure y auditar los registros IIS.
        `,
        "case-4": `
            <strong>CONTEXTO:</strong> Descubierto en 2010, se cree que es un arma cibernética conjunta de EE. UU. e Israel destinada a sabotear el programa de enriquecimiento nuclear de Irán.<br><br>
            <strong>ANÁLISIS TÉCNICO:</strong>
            <ul>
                <li><strong>Zero-Days:</strong> Utilizó cuatro exploits 0-day, incluida la vulnerabilidad LNK (CVE-2010-2568).</li>
                <li><strong>Payload:</strong> Código inyectado en PLCs Siemens Simatic S7-300, alterando la velocidad de las centrífugas mientras falsificaba la telemetría normal mostrada a los operadores.</li>
            </ul><br>
            <strong>IMPACTO Y EFECTOS:</strong> Destruyó físicamente unas 1.000 centrífugas nucleares en la instalación de Natanz, retrasando significativamente el programa nuclear. Cambió para siempre el panorama de la seguridad ICS/OT.<br><br>
            <strong>RESOLUCIÓN:</strong> El código finalmente escapó a internet. Siemens actualizó el firmware de los PLC y las industrias adoptaron estrictas arquitecturas de "air-gap" y zero-trust.
        `,
        "case-5": `
            <strong>CONTEXTO:</strong> Ataque a la cadena de suministro en julio de 2021. La banda REvil comprometió Kaseya VSA, una herramienta de monitorización remota utilizada por Proveedores de Servicios Gestionados (MSP).<br><br>
            <strong>ANÁLISIS TÉCNICO:</strong>
            <ul>
                <li><strong>Vector:</strong> Omisión de autenticación y ejecución de comandos arbitrarios en servidores VSA.</li>
                <li><strong>Despliegue:</strong> Envió payloads maliciosos camuflados como "actualizaciones de software" legítimas, desactivando Windows Defender mediante PowerShell.</li>
            </ul><br>
            <strong>IMPACTO Y EFECTOS:</strong> Hasta 1.500 empresas cliente cifradas a nivel mundial. Inactividad operativa masiva con una demanda de rescate inicial de 70 millones de dólares.<br><br>
            <strong>RESOLUCIÓN:</strong> Kaseya apagó los servidores SaaS inmediatamente y desplegó parches. Posteriormente, se obtuvo una clave de descifrado universal mediante operaciones policiales globales.
        `,
        "case-6": `
            <strong>CONTEXTO:</strong> Caída informática global en julio de 2024. No fue un ciberataque, sino un fallo catastrófico de control de calidad (QA) del proveedor CrowdStrike durante una actualización de su sensor.<br><br>
            <strong>ANÁLISIS TÉCNICO:</strong>
            <ul>
                <li><strong>Error Lógico:</strong> La actualización del Channel File 291 contenía una lectura de memoria fuera de los límites (referencia a un puntero nulo).</li>
                <li><strong>Kernel Panic:</strong> Como el sensor Falcon opera en el Ring 0 (Kernel), la lectura inválida provocó un BugCheck inmediato.</li>
            </ul><br>
            <strong>IMPACTO Y EFECTOS:</strong> 8,5 millones de dispositivos Windows entraron en un bucle de pantalla azul de la muerte (BSOD). Vuelos cancelados a nivel mundial, operaciones bancarias detenidas y hospitales interrumpidos.<br><br>
            <strong>RESOLUCIÓN:</strong> Requirió intervención manual (arrancar en Modo Seguro para eliminar el archivo .sys dañado). Posteriormente, CrowdStrike revisó por completo sus procedimientos de pruebas y despliegue escalonado.
        `
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. GESTIONE FILTRI
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.intel-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-key');

            cards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'filter_all' || 
                   (filterValue === 'filter_apt' && category === 'apt_groups') || 
                   (filterValue === 'filter_vuln' && category === 'vulnerabilities')) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 2. GESTIONE LINGUA
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            langButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Traduci elementi UI
            document.querySelectorAll('[data-key]').forEach(element => {
                const key = element.getAttribute('data-key');
                if (translations[lang][key]) {
                    element.textContent = translations[lang][key];
                }
            });
            
            // Aggiorna anche il contenuto del modal se è aperto
            const modal = document.getElementById('report-modal');
            if (modal.classList.contains('active')) {
                const currentCardId = modal.getAttribute('data-current-card');
                document.getElementById('modal-content').innerHTML = reportDetails[lang][currentCardId];
            }
        });
    });

    // 3. GESTIONE MODAL (REPORT COMPLETI)
    const modal = document.getElementById('report-modal');
    const closeBtn = document.querySelector('.modal-close');
    const overlay = document.querySelector('.modal-overlay');

    document.querySelectorAll('.view-report-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Previene il comportamento del link se presente
            const card = e.target.closest('.intel-card');
            const caseId = card.querySelector('.case-id').textContent;
            const caseTitle = card.querySelector('h3').textContent;
            const cardId = card.id;
            const currentLang = document.querySelector('.lang-btn.active').getAttribute('data-lang');

            // Popola Modal
            document.getElementById('modal-case-id').textContent = caseId;
            document.getElementById('modal-title').textContent = caseTitle;
            document.getElementById('modal-content').innerHTML = reportDetails[currentLang][cardId] || "Content under decryption...";
            
            // Salva l'ID della card attiva nel modal (serve per la traduzione in tempo reale)
            modal.setAttribute('data-current-card', cardId);

            // Mostra Modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; 
        });
    });

    // Chiusura Modal
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    // 4. GESTIONE CARICAMENTO (OVERLAY)
    const loadingOverlay = document.getElementById('loading-overlay');
    if(loadingOverlay) {
        setTimeout(() => {
            loadingOverlay.classList.add('hidden');
        }, 1800);
    }
});