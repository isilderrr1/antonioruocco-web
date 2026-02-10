let allBooks = [];
let currentLang = localStorage.getItem('selectedLang') || 'en';
let typewriterInterval;

async function loadBooks() {
    try {
        const response = await fetch('./books.json'); 
        if (!response.ok) throw new Error(`Status: ${response.status}`);
        allBooks = await response.json();
        renderBooks(allBooks);
        changeLanguage(currentLang); // Imposta la lingua iniziale
        console.log("[SYSTEM] Database libri caricato.");
    } catch (error) {
        console.error("[ERROR] Fallimento:", error);
        document.getElementById('booksGrid').innerHTML = `<p style="color: red; grid-column: 1/-1; text-align: center;">ERROR: DATABASE_NOT_FOUND</p>`;
    }
}

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('selectedLang', lang);
    
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`btn-${lang}`);
    if (activeBtn) activeBtn.classList.add('active');

    const uiTexts = {
        en: { title: "Personal_Library.bin", intro: "A collection of books that have influenced my life..." },
        it: { title: "Libreria_Personale.bin", intro: "Una collezione di libri che hanno influenzato la mia vita..." },
        es: { title: "Biblioteca_Personal.bin", intro: "Una colección de libros que han influido en mi vida..." }
    };

    document.querySelector('.page-title').innerText = uiTexts[lang].title;
    document.querySelector('.section-intro').innerText = uiTexts[lang].intro;
}

function renderBooks(books) {
    const grid = document.getElementById('booksGrid');
    grid.innerHTML = '';

    books.forEach((book, index) => {
        const safeId = `book-${index}`;
        const coverUrl = book.isbn 
            ? `https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`
            : `https://covers.openlibrary.org/b/title/${encodeURIComponent(book.title)}-L.jpg`;
        
        const card = document.createElement('div');
        card.className = 'book-card';
        card.innerHTML = `
            <div class="book-cover-wrapper" id="${safeId}">
                <img src="${coverUrl}" alt="${book.title}" class="book-cover" 
                     onload="checkImageSize(this, '${safeId}')"
                     onerror="handleMissingCover('${safeId}')">
            </div>
            <div class="book-details">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">${book.author}</p>
            </div>
        `;
        card.onclick = () => openModal(book, coverUrl);
        grid.appendChild(card);
    });
}

function checkImageSize(img, safeId) {
    if (img.naturalWidth <= 1) handleMissingCover(safeId);
}

function handleMissingCover(safeId) {
    const wrapper = document.getElementById(safeId);
    if (wrapper) {
        wrapper.classList.add('missing-cover');
        wrapper.innerHTML = '<span>ENCRYPTED_DATA</span>';
    }
}

function openModal(book, cover) {
    const modalTitle = document.getElementById('modalTitle');
    const modalAuthor = document.getElementById('modalAuthor');
    const modalDesc = document.getElementById('modalDesc');
    const modalImg = document.getElementById('modalImg');

    clearInterval(typewriterInterval);
    modalDesc.innerText = ''; 
    
    modalTitle.innerText = book.title;
    modalAuthor.innerText = book.author;
    modalImg.src = cover;
    
    modalImg.onerror = () => { 
        modalImg.src = 'https://placehold.co/300x450/000/ffb000?text=ENCRYPTED'; 
    };

    // LOGICA TRADUZIONE
    const langKey = `description_${currentLang}`;
    const description = book[langKey] || book.description_en || "No description available.";

    const modalElement = document.getElementById('bookModal');
    modalElement.style.display = "block";

    typeWriterEffect(modalDesc, description);
}

function typeWriterEffect(element, text) {
    let i = 0;
    typewriterInterval = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typewriterInterval);
        }
    }, 15);
}

// Ricerca e chiusura Modal
document.getElementById('bookSearch').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = allBooks.filter(b => 
        b.title.toLowerCase().includes(term) || b.author.toLowerCase().includes(term)
    );
    renderBooks(filtered);
});

const modal = document.getElementById('bookModal');
document.querySelector('.close-modal').onclick = () => {
    modal.style.display = "none";
    clearInterval(typewriterInterval);
};
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
        clearInterval(typewriterInterval);
    }
};

loadBooks();