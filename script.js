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

// --- 3. TERMINAL EASTER EGG LOGIC (Global scope) ---
function openTerminal() {
    const overlay = document.getElementById('terminal-overlay');
    if(overlay) {
        overlay.style.display = 'flex';
        document.getElementById('terminal-input').focus();
    }
}

function closeTerminal() {
    const overlay = document.getElementById('terminal-overlay');
    if(overlay) overlay.style.display = 'none';
}

document.addEventListener('keypress', function (e) {
    const terminalInput = document.getElementById('terminal-input');
    const output = document.getElementById('terminal-output');
    
    if (terminalInput === document.activeElement && e.key === 'Enter') {
        const input = terminalInput.value.trim();
        const p = document.createElement('p');
        p.textContent = `$ ${input}`;
        output.appendChild(p);

        if (input.toLowerCase() === "antonio") {
            const success = document.createElement('p');
            success.style.color = "#ffff00";
            success.innerHTML = "> DECODING SUCCESSFUL...<br>> ACCESS GRANTED. WELCOME, CREATOR.<br>> STATUS: Antonio is currently available for recruitment.";
            output.appendChild(success);
        } else if (input.toLowerCase() === "clear") {
            output.innerHTML = "";
        } else if (input.toLowerCase() === "help") {
            const help = document.createElement('p');
            help.textContent = "> Try to decode the binary string in the hint.";
            output.appendChild(help);
        } else {
            const error = document.createElement('p');
            error.style.color = "#ff5555";
            error.textContent = "> ERROR: ACCESS DENIED.";
            output.appendChild(error);
        }
        terminalInput.value = "";
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