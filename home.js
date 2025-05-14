// Seleciona o campo de busca e os cards dos livros
const searchInput = document.getElementById('search-input');
const cards = document.querySelectorAll('.card');

// Adiciona um evento de input ao campo de busca
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    // Filtra os cards com base no termo de busca
    cards.forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        const author = card.querySelector('p:nth-of-type(2)').textContent.toLowerCase();

        if (title.includes(searchTerm) || description.includes(searchTerm) || author.includes(searchTerm)) {
            card.style.display = 'block'; // Mostra o card
        } else {
            card.style.display = 'none'; // Esconde o card
        }
    });
});