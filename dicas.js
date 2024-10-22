function toggleText() {
    var texto = document.getElementById("texto-curiosidade");
    var botao = document.getElementById("ver-mais");

    if (texto.style.display === "none" || texto.style.display === "") {
        texto.style.display = "block"; // Mostra o texto
        botao.textContent = "Ver menos"; // Muda o texto do botão
    } else {
        texto.style.display = "none"; // Esconde o texto
        botao.textContent = "Ver mais"; // Volta o texto do botão
    }
}

// Array de dicas
const dicas = [
    "Uma curiosidade legal sobre o espanhol é que ele é a segunda língua mais falada do mundo em termos de falantes nativos, perdendo apenas para o mandarim.",
    "O espanhol é a língua oficial de 20 países e é amplamente falado em muitos outros.",
    "Na Espanha, existem várias línguas cooficiais, como o catalão, o basco e o galego.",
    "A língua espanhola é conhecida como 'castelhano' em alguns países.",
    "Mais de 580 milhões de pessoas falam espanhol no mundo todo, incluindo nativos e aprendizes."
];

// Função para atualizar a dica
function atualizarDica() {
    // Seleciona uma dica aleatória do array
    const dicaAleatoria = dicas[Math.floor(Math.random() * dicas.length)];
    
    // Atualiza o texto da dica
    const textoCuriosidade = document.getElementById("texto-curiosidade");
    textoCuriosidade.textContent = dicaAleatoria;
}

// Chama a função ao carregar a página
atualizarDica();

// Atualiza a dica a cada 60 segundos (60000 milissegundos)
setInterval(atualizarDica, 60000);
