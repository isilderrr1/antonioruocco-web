document.addEventListener('DOMContentLoaded', () => {
    // Seleziona tutti gli elementi che devono mostrare la telemetria
    const repoDisplays = document.querySelectorAll('.repo-stats');

    repoDisplays.forEach(async (display) => {
        const repoName = display.getAttribute('data-repo');
        
        try {
            // Chiamata alle API pubbliche di GitHub
            const response = await fetch(`https://api.github.com/repos/${repoName}`);
            
            // Gestione errori (es. limite di richieste API superato)
            if (!response.ok) throw new Error('API_LIMIT_OR_NETWORK_ERROR');
            
            const data = await response.json();

            // Estrazione dati
            const mainLanguage = data.language || 'MIXED_ENV';
            const lastUpdate = new Date(data.pushed_at);
            const timeAgo = calculateTimeAgo(lastUpdate);

            // Iniezione dati nell'HTML
            display.innerHTML = `
                <span class="t-label">LANG:</span> <span class="t-val">${mainLanguage}</span>
                <span class="t-separator"> // </span>
                <span class="t-label">LAST_COMMIT:</span> <span class="t-val">${timeAgo}</span>
            `;
        } catch (error) {
            // Fallback se l'API non risponde
            display.innerHTML = `<span class="t-error">[ TELEMETRY_OFFLINE_OR_RATE_LIMITED ]</span>`;
        }
    });

    // Funzione per formattare la data in stile "3 DAYS AGO"
    function calculateTimeAgo(date) {
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const diffHours = Math.floor(diffTime / (1000 * 60 * 60));

        if (diffDays === 0 && diffHours === 0) return 'JUST_NOW';
        if (diffDays === 0) return `${diffHours} HOURS AGO`;
        if (diffDays === 1) return 'YESTERDAY';
        if (diffDays < 30) return `${diffDays} DAYS AGO`;
        
        // Se più vecchio di 30 giorni, mostra la data YYYY-MM-DD
        return date.toISOString().split('T')[0];
    }
    
});