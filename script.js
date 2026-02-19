/**
 * Antonio Ruocco Portfolio - Global Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. TRADUZIONE LINGUE ---
    const translations = {
        en: {
            header: "Antonio Ruocco",
            aboutMe: "About Me",
            aboutText: "Maker and electronics geek with a background in international gaming operations. I've transitioned from high-stakes risk management as a Croupier to professional Cybersecurity, backing my self-taught foundation with a Master's degree. My focus is on infrastructure defense and technical analysis, bridging the gap between hardware intuition and software security.",
            experience: "Experience",
            certifications: "Certifications & Skills",
            projects: "Projects",
            books: "Books",
            hobbyTitle: "Maker & Electronics",
            hobbySub: "Hardware hacking, 3D printing and retro-electronics restoration.",
            followMe: "Follow Me"
        },
        it: {
            header: "Antonio Ruocco",
            aboutMe: "Chi Sono",
            aboutText: "Maker e smanettone di elettronica con un passato operativo nel gaming internazionale. Ho convertito la mia esperienza nel risk management come Croupier in una carriera nella Cybersecurity, consolidando anni di studio da autodidatta con un Master di specializzazione. Mi occupo di difesa delle infrastrutture e analisi tecnica, unendo l'intuizione per l'hardware alla sicurezza digitale.",
            experience: "Esperienza",
            certifications: "Certificazioni & Competenze",
            projects: "Progetti",
            books: "Libri",
            hobbyTitle: "Maker ed Elettronica",
            hobbySub: "Hardware hacking, stampa 3D e restauro di elettronica vintage.",
            followMe: "Seguimi"
        },
        es: {
            header: "Antonio Ruocco",
            aboutMe: "Sobre mí",
            aboutText: "Maker y apasionado de la electrónica con trayectoria en operaciones de juego internacional. He redirigido mi capacidad de gestión de riesgos como Croupier hacia la Ciberseguridad, uniendo mi base autodidacta con un Máster de especialización. Me enfoco en la defensa de infraestructuras y análisis técnico, combinando la intuición por el hardware con la seguridad digital.",
            experience: "Experiencia",
            certifications: "Certificaciones & Habilidades",
            projects: "Proyectos",
            books: "Libros",
            hobbyTitle: "Maker y Electrónica",
            hobbySub: "Hardware hacking, impresión 3D y restauración de electrónica antigua.",
            followMe: "Sígueme"
        }
    };

    function changeLanguage(lang) {
        // Mappa dei selettori aggiornata con la card Hobby
        const elements = {
            'header h1': translations[lang].header,
            '#about-title': translations[lang].aboutMe,
            '#about-p': translations[lang].aboutText,
            '#experience-card h2': translations[lang].experience,
            '#certifications-card h2': translations[lang].certifications,
            '#projects-card h2': translations[lang].projects,
            '#books-card h2': translations[lang].books,
            '#hobby-card .card-title': translations[lang].hobbyTitle,
            '#hobby-card .hobby-subtitle': translations[lang].hobbySub,
            '.footer-social h4': translations[lang].followMe
        };

        // Ciclo per aggiornare i testi
        for (let selector in elements) {
            const el = document.querySelector(selector);
            if (el) {
                el.textContent = elements[selector];
            }
        }

        // Gestione classe active sui bottoni lingua
        document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.getElementById(lang === 'en' ? 'english' : lang === 'it' ? 'italian' : 'spanish');
        if (activeBtn) activeBtn.classList.add('active');
    }

    // Event Listeners Bottoni Lingua
    const btnEn = document.getElementById('english');
    const btnIt = document.getElementById('italian');
    const btnEs = document.getElementById('spanish');

    if (btnEn) btnEn.addEventListener('click', () => changeLanguage('en'));
    if (btnIt) btnIt.addEventListener('click', () => changeLanguage('it'));
    if (btnEs) btnEs.addEventListener('click', () => changeLanguage('es'));

    // Inizializzazione (Default English)
    changeLanguage('en');

    // --- 2. IP VISITOR & HASH LOGIC ---
    async function getVisitorIP() {
        const ipElement = document.getElementById('visitor-ip');
        if (!ipElement) return;
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            ipElement.innerText = data.ip;
        } catch (error) {
            ipElement.innerText = "ANONYMOUS";
        }
    }

    const hashElement = document.getElementById('current-hash');
    if (hashElement) {
        const randomHash = Array.from({length: 12}, () => 
            Math.floor(Math.random() * 16).toString(16)).join('');
        hashElement.innerText = randomHash.toUpperCase();
    }

    getVisitorIP();
    changeLanguage('en'); // Default
});

// --- 3. TERMINAL EASTER EGG LOGIC & WINTERMUTE AI ---
let terminalInitialized = false;

// Utility per creare pause in millisecondi (effetto caricamento)
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function openTerminal() {
    const overlay = document.getElementById('terminal-overlay');
    const output = document.getElementById('terminal-output');
    const inputField = document.getElementById('terminal-input');
    
    if(overlay) {
        overlay.style.display = 'flex';

        // Esegue l'animazione solo la prima volta
        if (!terminalInitialized) {
            terminalInitialized = true;
            inputField.disabled = true; // Blocca la tastiera durante il boot

            // Helper per stampare testo nel terminale con ritardo
            const printLine = async (text, delay, color = "#00ff00") => {
                await sleep(delay);
                const p = document.createElement('p');
                p.style.color = color;
                p.innerHTML = text;
                output.appendChild(p);
                output.scrollTop = output.scrollHeight;
            };

            // --- SEQUENZA DI BOOT CINEMATOGRAFICA ---
            await printLine("> [INIT] TENTATIVO DI ACCESSO AL MAINFRAME SOC...", 0);
            await printLine("> AUTENTICAZIONE RICHIESTA.", 400);
            await printLine("> INSERIRE CHIAVE DI DECRIPTAZIONE AMMINISTRATORE:", 400);
            await printLine("$ *********", 600, "#fff"); 
            await printLine("> VERIFICA CHIAVE IN CORSO...", 1500, "#888"); 
            await printLine("> HASH ACCETTATO: <span style='font-size: 0.8rem; color: #888;'>01000001 01101110 01110100 01101111 01101110 01101001 01101111</span> (ANTONIO)", 200);
            await printLine("> [SYSTEM] PROTOCOLLI DI SICUREZZA DISATTIVATI.", 300);
            await printLine("> [SYSTEM] CONNESSIONE NEURALE STABILITA...", 300, "#00d4ff");
            await printLine("> [WINTERMUTE] MAINFRAME ONLINE. IN ATTESA DI INPUT...", 500, "#00d4ff");

            inputField.disabled = false; // Sblocca la tastiera
            inputField.focus(); 
        } else {
            // Se già inizializzato, dà solo il focus all'input
            inputField.focus();
        }
    }
}

function closeTerminal() {
    const overlay = document.getElementById('terminal-overlay');
    if(overlay) overlay.style.display = 'none';
}

document.addEventListener('keypress', async function (e) {
    const terminalInput = document.getElementById('terminal-input');
    const output = document.getElementById('terminal-output');
    
    if (terminalInput === document.activeElement && e.key === 'Enter') {
        const input = terminalInput.value.trim();
        if (!input) return;

        // 1. Stampa comando utente
        const pUser = document.createElement('p');
        pUser.style.color = "#fff";
        pUser.textContent = `$ ${input}`;
        output.appendChild(pUser);

        terminalInput.value = "";
        output.scrollTop = output.scrollHeight;

        // 2. Comandi Locali Rapidi
        if (input.toLowerCase() === "clear") {
            output.innerHTML = "";
            return;
        } else if (input.toLowerCase() === "help") {
            const help = document.createElement('p');
            help.textContent = "> COMANDI DI SISTEMA: 'clear' (pulisce schermo), 'help' (aiuto). Tutte le altre query passano a WINTERMUTE.";
            output.appendChild(help);
            output.scrollTop = output.scrollHeight;
            return;
        }

        // 3. Elaborazione Wintermute
        const pLoad = document.createElement('p');
        pLoad.style.color = "#888";
        pLoad.textContent = "> WINTERMUTE STA ELABORANDO LA RICHIESTA...";
        pLoad.classList.add('blink-terminal'); 
        output.appendChild(pLoad);
        output.scrollTop = output.scrollHeight;

        // 4. Cattura lingua utente
        const browserLanguage = navigator.language || navigator.userLanguage || "en-US";

        // 5. Invia al Backend
        try {
            const BACKEND_DOMAIN = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" 
                ? "http://localhost:3000" 
                : "https://antonio-cyber-backend.onrender.com";

            const API_URL = `${BACKEND_DOMAIN}/api/ai-terminal`; 
            
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    command: input,
                    userLanguage: browserLanguage 
                })
            });

            const data = await response.json();

            // Rimuovi "Elaborazione..."
            if (output.contains(pLoad)) output.removeChild(pLoad);

            // Stampa risposta AI
            const pAI = document.createElement('p');
            pAI.style.color = "#00ff41"; 
            
            const formattedResponse = data.response.replace(/\n/g, '<br>');
            pAI.innerHTML = `> ${formattedResponse}`;
            
            output.appendChild(pAI);

        } catch (error) {
            if (output.contains(pLoad)) output.removeChild(pLoad);
            const errorMsg = document.createElement('p');
            errorMsg.style.color = "#ff5555";
            errorMsg.textContent = "> [ERROR] COLLEGAMENTO AL MAINFRAME INTERROTTO. SERVER OFFLINE.";
            output.appendChild(errorMsg);
        }

        output.scrollTop = output.scrollHeight;
    }
});

// --- RECRUITER EASTER EGG CON LUCCHETTO ---
const padlock = `
     .--------.
    / .------. \\
   / /        \\ \\
   | |        | |
  _| |________| |_
.' |_|        |_| '.
'._____ ____ _____.'
|     .'____'.     |
|    |  ____  |    |
|    | |____| |    |
|    |   /\\   |    |
|    |  /  \\  |    |
'.____'.____.'____.'
`;

console.log(`%c${padlock}`, "color: #00ff00; font-weight: bold; line-height: 1.2;");
console.log("%c[SYSTEM INFO] Scanning Antonio's Portfolio...", "color: #888; font-family: monospace;");
console.log("%c[SUCCESS] Integrity check passed. No red flags found.", "color: #00ff41; font-family: monospace;");
console.log("%c[CONTACT] Ready for recruitment. Protocol: EMAIL", "color: #00ff00; font-weight: bold; font-family: monospace;");
console.log("%c>> Type 'contact()' for details.", "color: #ddd; font-style: italic;");

// Funzione bonus per la console
window.contact = function() {
    console.log("%c[!] Email: antonio.ruocco2k@hotmail.com", "color: #00ff00; font-size: 16px; font-weight: bold;");
    return "Looking forward to hearing from you!";
};