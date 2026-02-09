document.addEventListener('DOMContentLoaded', () => {
    
    // 1. INIZIALIZZA OROLOGIO
    const updateClock = () => {
        const clockElement = document.getElementById('live-clock');
        if (!clockElement) return;

        const now = new Date();
        const timeString = now.toLocaleTimeString('it-IT', { 
            hour12: false, 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
        });
        
        clockElement.innerHTML = `<span class="label">TIME:</span> <span class="value">${timeString}</span>`;
    };

    // 2. GESTIONE STATO ATTIVO LINGUE
    const setupLanguageButtons = () => {
        const buttons = document.querySelectorAll('.lang-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', function() {
                buttons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });
    };

    // 3. SIMULAZIONE CARICAMENTO SISTEMA (Opzionale, log in console)
    console.log("%c [SYSTEM] Encryption AES-256 Active ", "background: #000; color: #00ff00; font-weight: bold;");
    console.log("%c [SYSTEM] Scanline Overlay Initialized ", "background: #000; color: #00d4ff;");

    // Start
    setInterval(updateClock, 1000);
    updateClock();
    setupLanguageButtons();
});