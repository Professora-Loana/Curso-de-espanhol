// Função para salvar o nome no localStorage e redirecionar
function salvarNome(event) {
    event.preventDefault(); // Impede a navegação padrão do link
    const nome = document.getElementById('name').value; // Obtém o valor do campo de entrada
    localStorage.setItem('nome', nome); // Armazena o nome no localStorage
    window.location.href = 'menu.html'; // Redireciona para a página 2
}

// Mensagem de saudação
const nome = localStorage.getItem('nome');
const mensagem = nome ? `Holla ${nome}, como estas ?` : 'Ola';
document.getElementById('saudacao').innerText = mensagem;

// Modal para os livros
document.addEventListener("DOMContentLoaded", function () {
    const livros = document.querySelectorAll(".livro");
    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close");
    const linkList = document.getElementById("linkList");

    // Adiciona evento de clique para cada livro
    livros.forEach(livro => {
        livro.addEventListener("click", function () {
            const links = livro.getAttribute("data-links").split(',');
            linkList.innerHTML = ""; // Limpa a lista de links
            links.forEach(link => {
                const li = document.createElement("li");
                li.innerHTML = `<a href="${link}" target="_blank">${link}</a>`;
                linkList.appendChild(li);
            });
            modal.style.display = "block"; // Exibe o modal
        });
    });

    closeButton.addEventListener("click", function () {
        modal.style.display = "none"; // Fecha o modal
    });

    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none"; // Fecha o modal se clicar fora
        }
    });
});

// Funções de rolagem


function scrollleft() {
    const livrosContainer = document.getElementById('livros');
    livrosContainer.scrollBy({ left: -500, behavior: 'smooth' });
}

function scrollright() {
    const livrosContainer = document.getElementById('livros');
    livrosContainer.scrollBy({ left: 500, behavior: 'smooth' });
}




