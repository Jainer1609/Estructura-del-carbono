const questions = [
    { question: "¿Cuál de las siguientes opciones es una forma alotrópica del carbono?", options: ["Grafito", "Agua", "Oxígeno", "Hierro"], answer: "Grafito" },
    { question: "¿Cuál es la fórmula química del etanol?", options: ["C2H5OH", "C6H14", "C3H6", "C2H4O"], answer: "C2H5OH" },
    { question: "¿Qué tipo de enlace forma el carbono con otros átomos?", options: ["Covalente", "Iónico", "Metálico", "Electrovalente"], answer: "Covalente" },
    { question: "¿Cuál es la estructura del grafito?", options: ["Capas planas", "Red tridimensional", "Estructura lineal", "Ninguna de las anteriores"], answer: "Capas planas" },
    { question: "¿Cuál de las siguientes es una propiedad del carbono?", options: ["Puede formar cuatro enlaces covalentes", "Es un metal", "No puede formar enlaces", "Es inerte"], answer: "Puede formar cuatro enlaces covalentes" },
    { question: "¿Qué forma de carbono es conocida por su dureza extrema?", options: ["Grafito", "Diamante", "Carbón activado", "Carbón negro"], answer: "Diamante" },
    { question: "¿Cuál es la valencia del carbono?", options: ["2", "4", "6", "8"], answer: "4" },
    { question: "¿Cuál es la fórmula del ácido acético?", options: ["C2H4O2", "C3H6O3", "C2H2O", "C2H6O"], answer: "C2H4O2" },
    { question: "¿Qué tipo de hibridación tiene el carbono en el metano?", options: ["sp", "sp2", "sp3", "sp4"], answer: "sp3" },
    { question: "¿Qué compuesto es un hidrocarburo saturado?", options: ["Hexano", "Benceno", "Etano", "Ambos"], answer: "Ambos" },
    { question: "¿Cuál es el principal componente de los plásticos?", options: ["Carbón", "Silicio", "Oxígeno", "Nitrógeno"], answer: "Carbón" },
    { question: "¿Mediante qué tipo de enlace se une el carbono al hidrógeno en los hidrocarburos?", options: ["Covalente", "Iónico", "Metálico", "Hidrógeno"], answer: "Covalente" },
    { question: "¿Cuál es la fórmula molecular de la glucosa?", options: ["C6H12O6", "C5H10O5", "C4H8O4", "C7H14O7"], answer: "C6H12O6" },
    { question: "¿Qué estructura tiene el fullereno?", options: ["Cápsula", "Esfera", "Cubo", "Pirámide"], answer: "Esfera" },
    { question: "¿Cuál es un uso común del grafito?", options: ["Lápices", "Cocción", "Plásticos", "Solventes"], answer: "Lápices" },
    { question: "¿Qué tipo de compuestos estudia la química orgánica?", options: ["Compuestos inorgánicos", "Compuestos que contienen carbono", "Compuestos metálicos", "Compuestos gaseosos"], answer: "Compuestos que contienen carbono" },
    { question: "¿Cuál es el nombre del carbono en su forma gaseosa?", options: ["Dióxido de carbono", "Monóxido de carbono", "Carbono negro", "Carbono activado"], answer: "Dióxido de carbono" },
    { question: "¿Qué se forma cuando el carbono se combina con oxígeno?", options: ["Agua", "Dióxido de carbono", "Amoníaco", "Acido sulfúrico"], answer: "Dióxido de carbono" },
    { question: "¿Cuál es la principal fuente de carbono en la naturaleza?", options: ["Carbón", "Dióxido de carbono", "Plantas", "Animales"], answer: "Dióxido de carbono" },
    { question: "¿Qué tipo de enlace predomina en los compuestos orgánicos?", options: ["Enlace iónico", "Enlace covalente", "Enlace metálico", "Enlace de hidrógeno"], answer: "Enlace covalente" },
    { question: "¿Cuál es la relación entre el carbono y la vida?", options: ["No hay relación", "Es esencial para la vida", "Es tóxico", "Es un recurso limitado"], answer: "Es esencial para la vida" },
    { question: "¿Qué tipo de reacción es la fotosíntesis?", options: ["Reacción de combustión", "Reacción de adición", "Reacción redox", "Reacción de eliminación"], answer: "Reacción redox" },
    { question: "¿Qué es un hidrocarburo?", options: ["Compuesto que solo contiene carbono e hidrógeno", "Compuesto que contiene oxígeno", "Compuesto que contiene nitrógeno", "Compuesto que no contiene carbono"], answer: "Compuesto que solo contiene carbono e hidrógeno" },
    { question: "¿Cuál es un ejemplo de un biocombustible basado en carbono?", options: ["Etanol", "Gas natural", "Carbón mineral", "Todos los anteriores"], answer: "Etanol" },
    { question: "¿Qué es el carbono activado?", options: ["Un tipo de carbón usado para filtrar", "Un tipo de carbón usado en explosivos", "Un tipo de carbón utilizado en estructuras", "Ninguna de las anteriores"], answer: "Un tipo de carbón usado para filtrar" },
];

function loadQuiz() {
    const quizForm = document.getElementById('quizForm');
    quizForm.innerHTML = '';

    const shuffledQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 10); // Selecciona 10 preguntas aleatorias
    shuffledQuestions.forEach((q, index) => {
        const questionContainer = document.createElement('div');
        questionContainer.classList.add('question');
        questionContainer.innerHTML = `
            <p>${index + 1}. ${q.question}</p>
            ${q.options.map((option, i) => `
                <label>
                    <input type="radio" name="question${index}" value="${option}">
                    ${option}
                </label>
            `).join('')}
        `;
        quizForm.appendChild(questionContainer);
    });
}

function showResults() {
    const quizForm = document.getElementById('quizForm');
    const results = document.getElementById('result');
    let score = 0;

    questions.forEach((q, index) => {
        const selected = quizForm.querySelector(`input[name="question${index}"]:checked`);
        if (selected && selected.value === q.answer) {
            score++;
        }
    });

    results.innerHTML = `Tu puntuación: ${score} de ${questions.length} preguntas.`;
}

function restartQuiz() {
    loadQuiz();
    document.getElementById('result').innerHTML = ''; // Limpiar resultados
}

document.addEventListener('DOMContentLoaded', loadQuiz);
