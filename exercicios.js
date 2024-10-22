// Função para checar as respostas
document.getElementById("checkAnswers").addEventListener("click", function () {
    let score = 0;

    // Respostas corretas
    const correctAnswers = {
        questao1: "B",
        questao2: "B",
        questao3: "A",
        questao4: "A",
        questao5: "B"
    };

    // Verificando as respostas
    for (const question in correctAnswers) {
        const options = document.getElementsByName(question);
        for (let i = 0; i < options.length; i++) {
            if (options[i].checked && options[i].value === correctAnswers[question]) {
                score++;
            }
        }
    }

    // Exibindo o resultado
    document.getElementById("resultado").innerText = `Você acertou ${score} de ${Object.keys(correctAnswers).length} questões.`;
});



document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('cursor');
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
});