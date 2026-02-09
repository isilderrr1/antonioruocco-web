document.addEventListener('DOMContentLoaded', function() {
    // Oggetto con i contenuti per ogni lingua
    const translations = {
        en: {
            header: "Antonio Ruocco",
            aboutMe: "About Me",
            aboutText: "Hello! I'm Antonio Ruocco, a cybersecurity enthusiast with a strong foundation in system administration, ethical hacking, and network security. I love solving complex problems and staying updated with the latest tech trends.",
            experience: "Experience",
            certifications: "Certifications & Skills",
            projects: "Projects",
            books: "Books",
            contact: "Contact",
            followMe: "Follow Me",
            email: "antonio.ruocco2k@hotmail.com",
            phone: "+39 334 975 4922"
        },
        it: {
            header: "Antonio Ruocco",
            aboutMe: "Chi Sono",
            aboutText: "Ciao! Sono Antonio Ruocco, un appassionato di cybersecurity con una solida preparazione nell'amministrazione di sistema, hacking etico e sicurezza delle reti. Amo risolvere problemi complessi e rimanere aggiornato con le ultime tendenze tecnologiche.",
            experience: "Esperienza",
            certifications: "Certificazioni & Competenze",
            projects: "Progetti",
            books: "Libri",
            contact: "Contatti",
            followMe: "Seguimi",
            email: "antonio.ruocco2k@hotmail.com",
            phone: "+39 334 975 4922"
        },
        es: {
            header: "Antonio Ruocco",
            aboutMe: "Sobre mí",
            aboutText: "¡Hola! Soy Antonio Ruocco, un entusiasta de la ciberseguridad con una sólida base en administración de sistemas, hacking ético y seguridad de redes. Me encanta resolver problemas complejos y mantenerme actualizado con las últimas tendencias tecnológicas.",
            experience: "Experiencia",
            certifications: "Certificaciones & Habilidades",
            projects: "Proyectos",
            books: "Libros",
            contact: "Contacto",
            followMe: "Sígueme",
            email: "antonio.ruocco2k@hotmail.com",
            phone: "+39 334 975 4922"
        }
    };

    // Funzione per cambiare la lingua
    function changeLanguage(lang) {
        document.querySelector('header h1').textContent = translations[lang].header;
        document.querySelector('.about h2').textContent = translations[lang].aboutMe;
        document.querySelector('.about-text p').textContent = translations[lang].aboutText;
        document.querySelector('#experience h2').textContent = translations[lang].experience;
        document.querySelector('#certifications h2').textContent = translations[lang].certifications;
        document.querySelector('#projects h2').textContent = translations[lang].projects;
        document.querySelector('#books h2').textContent = translations[lang].books;
        document.querySelector('.footer-social h4').textContent = translations[lang].followMe;
        document.querySelector('.footer-contact a[href^="mailto:"]').textContent = translations[lang].email;
        document.querySelector('.footer-contact a[href^="tel:"]').textContent = translations[lang].phone;
        
        // Non modificare il footer (copyright)
        // Non cambiare il contenuto di .footer-brand p (copyright)
    }

    // Aggiungi eventi ai bottoni della lingua
    document.getElementById('english').addEventListener('click', () => changeLanguage('en'));
    document.getElementById('italian').addEventListener('click', () => changeLanguage('it'));
    document.getElementById('spanish').addEventListener('click', () => changeLanguage('es'));

    // Imposta la lingua di default su inglese
    changeLanguage('en');
});

// --- Recruiter Easter Egg ---
const asciiArt = `
   _____      _                 _      
  |  __ \\    | |               | |     
  | |__) |  _| | ___   ___  ___| |__   
  |  _  / | | | |/ _ \\ / __|/ __| '_ \\  
  | | \\ \\ |_| | | (_) | (__| (__| | | |
  |_|  \\_\\__,_|_|\\___/ \\___|\\___|_| |_|
`;

console.log(`%c${asciiArt}`, "color: #4CAF50; font-weight: bold;");
console.log("%c[SYSTEM INFO] Scanning Antonio's Portfolio...", "color: #888; font-family: monospace;");
console.log("%c[SUCCESS] Integrity check passed. No red flags found.", "color: #00ff41; font-family: monospace;");
console.log("%c[CONTACT] Ready for recruitment. Protocol: EMAIL", "color: #4CAF50; font-weight: bold; font-family: monospace;");
console.log("%c>> Type 'contact()' for details.", "color: #ddd; font-style: italic;");

// Funzione bonus: se scrivono contact() nella console, appare la tua mail
window.contact = function() {
    console.log("%c[!] Email: antonio.ruocco2k@hotmail.com", "color: #4CAF50; font-size: 16px; font-weight: bold;");
    return "Looking forward to hearing from you!";
};

function openTerminal() {
    document.getElementById('terminal-overlay').style.display = 'flex';
    document.getElementById('terminal-input').focus();
}

function closeTerminal() {
    document.getElementById('terminal-overlay').style.display = 'none';
}

// 1. Funzioni per l'interfaccia (apertura/chiusura)
function openTerminal() {
    const overlay = document.getElementById('terminal-overlay');
    overlay.style.display = 'flex';
    document.getElementById('terminal-input').focus();
}

function closeTerminal() {
    const overlay = document.getElementById('terminal-overlay');
    overlay.style.display = 'none';
}

// 2. Gestione della logica del terminale
document.addEventListener('DOMContentLoaded', function() {
    
    const terminalInput = document.getElementById('terminal-input');
    const output = document.getElementById('terminal-output');

    if (terminalInput) {
        terminalInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                const input = terminalInput.value.trim();
                
                // Crea la riga del comando digitato
                const p = document.createElement('p');
                p.textContent = `$ ${input}`;
                output.appendChild(p);

                // --- LOGICA DELLA SFIDA ---
                
                // Controlliamo se l'utente scrive "Antonio" (maiuscolo o minuscolo)
                if (input.toLowerCase() === "antonio") {
                    const success = document.createElement('p');
                    success.style.color = "#ffff00"; // Giallo
                    success.innerHTML = `
                        > DECODING SUCCESSFUL...<br>
                        > ACCESS GRANTED. WELCOME, CREATOR.<br>
                        > STATUS: Antonio is currently available for recruitment.
                    `;
                    output.appendChild(success);
                } 
                // Comando per pulire il terminale
                else if (input.toLowerCase() === "clear") {
                    output.innerHTML = "";
                }
                // Comando di aiuto
                else if (input.toLowerCase() === "help") {
                    const help = document.createElement('p');
                    help.textContent = "> Try to decode the binary string in the hint.";
                    output.appendChild(help);
                }
                // Risposta per codice errato
                else {
                    const error = document.createElement('p');
                    error.style.color = "#ff5555"; // Rosso
                    error.textContent = "> ERROR: UNKNOWN COMMAND OR ACCESS DENIED.";
                    output.appendChild(error);
                }

                // Svuota l'input e scrolla verso il basso
                terminalInput.value = "";
                output.scrollTop = output.scrollHeight;
            }
        });
    }

    // --- TRADUZIONE LINGUE (Se la avevi nella landing page) ---
    // Se avevi già dei bottoni per la lingua (EN, IT, ES), aggiungi qui sotto la loro logica
    // Se non ti servono in questa pagina, puoi ignorare questa parte.
});