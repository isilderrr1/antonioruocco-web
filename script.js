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
        followMe: "Sígueme"
    }
};

    function changeLanguage(lang) {
        // Selettori con controllo di sicurezza per evitare errori "null"
        const elements = {
            'header h1': translations[lang].header,
            '#about-title': translations[lang].aboutMe,
            '#about-p': translations[lang].aboutText,
            '#experience-card h2': translations[lang].experience,
            '#certifications-card h2': translations[lang].certifications,
            '#projects-card h2': translations[lang].projects,
            '#books-card h2': translations[lang].books,
            '.footer-social h4': translations[lang].followMe
        };

        for (let selector in elements) {
            const el = document.querySelector(selector);
            if (el) {
                el.textContent = elements[selector];
            }
        }

        // Gestione classe active sui bottoni
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

function openTerminal() {
    const overlay = document.getElementById('terminal-overlay');
    const output = document.getElementById('terminal-output');
    
    if(overlay) {
        overlay.style.display = 'flex';
        document.getElementById('terminal-input').focus();

        // Messaggio di presentazione di Wintermute (solo la prima volta che si apre)
        if (!terminalInitialized) {
            const greeting = document.createElement('p');
            greeting.style.color = "#00d4ff"; // Colore azzurro olografico per Wintermute
            greeting.innerHTML = "<br>> [SYSTEM] CONNESSIONE NEURALE STABILITA...<br>> [WINTERMUTE] MAINFRAME ONLINE. IN ATTESA DI INPUT...<br>";
            output.appendChild(greeting);
            
            // Auto-scroll e flag
            output.scrollTop = output.scrollHeight;
            terminalInitialized = true;
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
        if (!input) return; // Non fa nulla se premi invio a vuoto

        // 1. Stampa il comando dell'utente a schermo
        const pUser = document.createElement('p');
        pUser.style.color = "#fff";
        pUser.textContent = `$ ${input}`;
        output.appendChild(pUser);

        // Pulisci l'input
        terminalInput.value = "";
        output.scrollTop = output.scrollHeight;

        // 2. Comandi Locali Rapidi (non passano per l'IA)
        if (input.toLowerCase() === "clear") {
            output.innerHTML = "";
            return;
        } else if (input.toLowerCase() === "help") {
            const help = document.createElement('p');
            help.textContent = "> COMANDI DI SISTEMA: 'clear' (pulisce lo schermo), 'help' (aiuto). Qualsiasi altra query sarà processata da WINTERMUTE. Easter Egg: Inserisci il binario corretto.";
            output.appendChild(help);
            output.scrollTop = output.scrollHeight;
            return;
        }

        // 3. Mostra lo stato di "Elaborazione" di Wintermute
        const pLoad = document.createElement('p');
        pLoad.style.color = "#888";
        pLoad.textContent = "> WINTERMUTE STA ELABORANDO LA RICHIESTA...";
        pLoad.classList.add('blink-terminal'); // Usa la tua classe CSS per far lampeggiare il testo
        output.appendChild(pLoad);
        output.scrollTop = output.scrollHeight;

        // 4. Cattura la lingua del browser dell'utente (es. "it-IT", "en-US")
        const browserLanguage = navigator.language || navigator.userLanguage || "en-US";

        // 5. Invia al Backend
        try {
            // Logica dinamica: se sei sul tuo PC usa localhost, se sei online usa Render
            const BACKEND_DOMAIN = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" 
                ? "http://localhost:3000" 
                : "https://antonio-cyber-backend.onrender.com";

            const API_URL = `${BACKEND_DOMAIN}/api/ai-terminal`; 
            
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    command: input,
                    userLanguage: browserLanguage // Inviamo la lingua all'IA!
                })
            });

            const data = await response.json();

            // Rimuovi il messaggio di "Elaborazione..."
            output.removeChild(pLoad);

            // Stampa la risposta di Wintermute
            const pAI = document.createElement('p');
            pAI.style.color = "#00ff41"; 
            
            // Sostituiamo gli eventuali "a capo" dell'IA con <br> per l'HTML
            const formattedResponse = data.response.replace(/\n/g, '<br>');
            pAI.innerHTML = `> ${formattedResponse}`;
            
            output.appendChild(pAI);

        } catch (error) {
            output.removeChild(pLoad);
            const errorMsg = document.createElement('p');
            errorMsg.style.color = "#ff5555";
            errorMsg.textContent = "> ERROR: COLLEGAMENTO AL MAINFRAME INTERROTTO. SERVER OFFLINE.";
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