const questions = [
    {
        question: "¿Qué es un espacio vectorial?",
        options: [
            "Un conjunto con operaciones de suma y multiplicación escalar",
            "Un espacio tridimensional",
            "Un conjunto de números reales",
            "Un conjunto de matrices"
        ],
        correctAnswer: 0
    },
    {
        question: "Si A es una matriz invertible, entonces det(A) es:",
        options: [
            "Siempre igual a 1",
            "No igual a 0",
            "Siempre positivo",
            "Siempre negativo"
        ],
        correctAnswer: 1
    },
    {
        question: "La dimensión de un espacio vectorial es:",
        options: [
            "El número de elementos en el espacio",
            "El número de vectores en el espacio",
            "El número de vectores en una base del espacio",
            "Siempre igual a 3"
        ],
        correctAnswer: 2
    },
    {
        question: "¿Qué significa que dos vectores sean linealmente independientes?",
        options: [
            "Que son ortogonales",
            "Que ninguno puede expresarse como múltiplo escalar del otro",
            "Que tienen la misma magnitud",
            "Que apuntan en la misma dirección"
        ],
        correctAnswer: 1
    },
    {
        question: "¿Cuáles son los valores propios del polinomio característico −λ³ − 3λ² − 2λ?",
        options: [
            "0, -1 y -2",
            "1, 2 y 3",
            "0, 1 y 2",
            "-1, -2 y -3"
        ],
        correctAnswer: 0
    },
    {
        question: "Determine la matriz <strong>P</strong> formada por los vectores propios en el orden de la matriz <strong>A</strong>:<br><br>" +
              "<div style='text-align:center; font-family: monospace;'>A = ⎛ 2&nbsp;&nbsp;3&nbsp;&nbsp;2 ⎞<br>" +
              "&nbsp;&nbsp;&nbsp;&nbsp;⎜ -2&nbsp;-3&nbsp;-2 ⎟<br>" +
              "&nbsp;&nbsp;&nbsp;&nbsp;⎝ -2&nbsp;-2&nbsp;-2 ⎠</div>",
    options: [
        `<div style="font-family: monospace;">⎛ 1&nbsp;2&nbsp;1 ⎞<br>⎜ 1&nbsp;1&nbsp;1 ⎟<br>⎝  0&nbsp;2&nbsp;1 ⎠</div>`,
        `<div style="font-family: monospace;">⎛ 1&nbsp;-1&nbsp;0 ⎞<br>⎜ 0&nbsp;1&nbsp;-1 ⎟<br>⎝ 1&nbsp;1&nbsp;1 ⎠</div>`,
        `<div style="font-family: monospace;">⎛ 2&nbsp;1&nbsp;0 ⎞<br>⎜ 1&nbsp;0&nbsp;-1 ⎟<br>⎝ 1&nbsp;-1&nbsp;1 ⎠</div>`,
        `<div style="font-family: monospace;">⎛ 1&nbsp;0&nbsp;1 ⎞<br>⎜ -1&nbsp;1&nbsp;0 ⎟<br>⎝ 0&nbsp;-1&nbsp;1 ⎠</div>`
    ],
    correctAnswer: 0
}
    
    
];
const feedbacks = {
    0: {
        correct: "¡Correcto! Un espacio vectorial debe tener suma de vectores y multiplicación por escalar. <br> Paso a paso:<br>1. Debe cumplir 8 axiomas.<br>2. Entre ellos, asociatividad y existencia del neutro.",
        incorrect: "Un espacio vectorial no es solo un conjunto. <br> Paso a paso:<br>1. Requiere operaciones válidas.<br>2. Debe satisfacer axiomas como la distributividad y existencia de inverso."
    },
    1: {
        correct: "¡Correcto! Una matriz invertible tiene determinante distinto de 0. <br> Paso a paso:<br>1. Si det(A) = 0, no hay inversa.<br>2. Por lo tanto, det(A) ≠ 0.",
        incorrect: "Error. Una matriz invertible debe tener determinante diferente de 0. <br> Paso a paso:<br>1. Calcula det(A).<br>2. Si es 0, no se puede invertir."
    },
    2: {
        correct: "¡Correcto! La dimensión es la cantidad de vectores en una base. <br> Paso a paso:<br>1. Encuentra una base del espacio.<br>2. Cuenta sus vectores.",
        incorrect: "Incorrecto. La dimensión se refiere a la cantidad de vectores en una base. <br> Paso a paso:<br>1. La base debe ser LI.<br>2. Su número define la dimensión."
    },
    3: {
        correct: "¡Correcto! Si no puedes escribir un vector como múltiplo del otro, son linealmente independientes. <br> Paso a paso:<br>1. Intenta expresar uno como combinación del otro.<br>2. Si no puedes, son LI.",
        incorrect: "Incorrecto. La independencia lineal no tiene que ver con magnitudes. <br> Paso a paso:<br>1. Verifica si uno es múltiplo del otro.<br>2. Si lo es, son dependientes."
    },
    4: {
        correct: "¡Correcto! Los valores propios son las raíces del polinomio característico. <br> Paso a paso:<br>1. Factoriza: −λ³ − 3λ² − 2λ = −λ(λ + 1)(λ + 2)<br>2. Las raíces son: 0, -1 y -2.",
        incorrect: "Incorrecto. Para hallar los valores propios, debes factorizar el polinomio. <br> Paso a paso:<br>1. Saca factor común: −λ(λ² + 3λ + 2)<br>2. Factoriza: (λ + 1)(λ + 2)<br>3. Valores propios: 0, -1 y -2."
    },
    5: {
        correct: "¡Correcto! La matriz P está formada por los vectores propios como columnas, en el orden correspondiente a los valores propios de A. <br><br>" +
             "Paso a paso:<br>1. Encuentra los valores propios de A.<br>2. Calcula los vectores propios para cada valor.<br>3. Forma la matriz P con estos vectores como columnas.",
    incorrect: "Incorrecto. Para formar la matriz P necesitas calcular los vectores propios de la matriz A y colocarlos como columnas. <br><br>" +
               "Paso a paso:<br>1. Halla los valores propios.<br>2. Para cada valor propio, encuentra su vector propio.<br>3. Forma la matriz P usando esos vectores como columnas."
    }
    
    
};


let currentScores = {
    'muerte-subita': 0,
    'banco-preguntas': 0,
    'con-tiempo': 0
};

let bestScores = {
    'muerte-subita': parseInt(localStorage.getItem('best-score-muerte-subita')) || 0,
    'banco-preguntas': parseInt(localStorage.getItem('best-score-banco-preguntas')) || 0,
    'con-tiempo': parseInt(localStorage.getItem('best-score-con-tiempo')) || 0
};

let currentQuestionIndex = 0;
let currentMode = null;
let timer = null;
let timeLeft = 60;
let gameQuestions = [];
let selectedAnswer = null;

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('best-score-muerte-subita').textContent = bestScores['muerte-subita'];
    document.getElementById('best-score-banco-preguntas').textContent = bestScores['banco-preguntas'];
    document.getElementById('best-score-con-tiempo').textContent = bestScores['con-tiempo'];
});

function navigateTo(page) {
    document.querySelectorAll('.container').forEach(div => div.style.display = 'none');
    document.getElementById(page).style.display = 'block';
    currentMode = page;
    currentQuestionIndex = 0;

    // Reset
    selectedAnswer = null;
    timeLeft = 60;
    clearInterval(timer);

    // Cargar preguntas aleatorias
    gameQuestions = getRandomQuestions(questions.length);

    if (page === "muerte-subita") {
        currentScores['muerte-subita'] = 0;
        document.getElementById("muerte-subita-score").textContent = "0";
    }

    if (page === "banco-preguntas") {
        currentScores['banco-preguntas'] = 0;
        document.getElementById("banco-preguntas-score").textContent = "0";
    }

    if (page === "con-tiempo") {
        currentScores['con-tiempo'] = 0;
        document.getElementById("con-tiempo-score").textContent = "0";
        startTimer();
    }

    showQuestion(page);
}

function getRandomQuestions(count) {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function showQuestion(mode) {
    const question = gameQuestions[currentQuestionIndex];
    const container = document.getElementById(`${mode}-question`);
    container.innerHTML = `
    <h2>${question.question}</h2>
    <ul class="options">
        ${question.options.map((option, index) => `
            <li>
                <button class="option-button" onclick="selectAnswer(${index}, '${mode}')">${option}</button>
            </li>
        `).join('')}
    </ul>
    <div id="${mode}-feedback" class="feedback"></div>
<button id="${mode}-confirm" class="confirm-button" onclick="confirmAnswer('${mode}')" disabled>Confirmar</button>
<button id="${mode}-feedback-btn" class="feedback-button" style="display: none;" onclick="showFeedback('${mode}')">Ver retroalimentación</button>
<button id="${mode}-next" class="next-button" onclick="nextQuestion('${mode}')" style="display: none;">Siguiente</button>

`;

    const nextBtn = document.getElementById(`${mode}-next`);
    nextBtn.textContent = "continuar";
    nextBtn.style.display = 'none';
}


function selectAnswer(index, mode) {
    selectedAnswer = index;

    // Quitar selección anterior
    document.querySelectorAll(`#${mode}-question .option-button`).forEach(btn => {
        btn.classList.remove('selected');
    });

    // Agregar clase de selección
    document.querySelectorAll(`#${mode}-question .option-button`)[index].classList.add('selected');

    // Mostrar botón "Next"
    document.getElementById(`${mode}-confirm`).disabled = false;

}

function nextQuestion(mode) {
    currentQuestionIndex++;

    if (currentQuestionIndex >= gameQuestions.length) {
        endGame(mode, true);
    } else {
        showQuestion(mode);
        selectedAnswer = null;
    }
}



function continueGame(mode) {
    currentQuestionIndex++;
    if (currentQuestionIndex >= gameQuestions.length) {
        endGame(mode, true);
    } else {
        showQuestion(mode);
        selectedAnswer = null;
        document.getElementById(`${mode}-next`).style.display = 'none';
    }
}


function endGame(mode, win) {
    clearInterval(timer);

    const finalAudio = new Audio(win ? 'sounds/respuesta_correcta.mp3' : 'sounds/spongebob-fail.mp3');
    finalAudio.play().catch(console.warn);

    finalAudio.onended = () => {
        let title = "", message = "";

        if (win) {
            title = "🎉 ¡Felicidades!";
            message = "Has completado todas las preguntas correctamente. ¡Buen trabajo!";
        } else {
            title = "😢 Fin del juego";
            message = mode === "muerte-subita"
                ? "Fallaste una pregunta en modo muerte súbita. ¡Intenta de nuevo!"
                : "Has respondido incorrectamente. ¡Sigue practicando!";
        }

        document.getElementById("end-game-title").textContent = title;
        document.getElementById("end-game-message").innerHTML = message;
        openModal('end-game-modal');

        updateBestScore(mode);
    };
}

function updateBestScore(mode) {
    if (currentScores[mode] > bestScores[mode]) {
        bestScores[mode] = currentScores[mode];
        localStorage.setItem(`best-score-${mode}`, bestScores[mode]);
        document.getElementById(`best-score-${mode}`).textContent = bestScores[mode];
    }
    currentScores[mode] = 0;
}

// Abre el modal especificado
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "flex"; // Muestra el modal
}

// Cierra el modal especificado
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}


// Ejemplo de cómo abrir el modal de reglas
document.querySelector(".btn-small").addEventListener("click", function() {
    openModal('informacion-modal');
});


function startTimer() {
    timeLeft = 60;
    document.getElementById("timer").textContent = timeLeft + "s";
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = timeLeft + "s";
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("¡Tiempo agotado!");
            endGame("con-tiempo", false);
        }
    }, 1000);
}
function confirmAnswer(mode) {
    const question = gameQuestions[currentQuestionIndex];
    const correctAnswer = question.correctAnswer;
    const feedbackDiv = document.getElementById(`${mode}-feedback`);

    if (selectedAnswer === correctAnswer) {
        feedbackDiv.dataset.result = 'correct';
    } else {
        feedbackDiv.dataset.result = 'incorrect';
    }

    // Deshabilita botones
    document.querySelectorAll(`#${mode}-question .option-button`).forEach(btn => btn.disabled = true);
    document.getElementById(`${mode}-confirm`).disabled = true;

    // Muestra botón para ver la retroalimentación
    document.getElementById(`${mode}-feedback-btn`).style.display = 'inline-block';
}
function showFeedback(mode) {
    const question = gameQuestions[currentQuestionIndex];
    const correctAnswer = question.correctAnswer;
    const feedbackDiv = document.getElementById(`${mode}-feedback`);
    const result = feedbackDiv.dataset.result;

    const correctAudio = new Audio('sounds/respuesta_correcta.mp3');
    const incorrectAudio = new Audio('sounds/spongebob-fail.mp3');

    const explanation = getExplanation(currentQuestionIndex);

    if (result === 'correct') {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        currentScores[mode]++;
        document.getElementById(`${mode}-score`).textContent = currentScores[mode];
        correctAudio.play().catch(console.warn);
        feedbackDiv.innerHTML = `<p class="correct-feedback">✅ ¡Correcto!<br>${explanation}</p>`;
    } else {
        showSadEmoji();
        incorrectAudio.play().catch(console.warn);
        feedbackDiv.innerHTML = `<p class="incorrect-feedback">❌ Incorrecto.<br>${explanation}</p>`;

        if (mode === 'muerte-subita') {
            incorrectAudio.onended = () => endGame(mode, false);
            return;
        }
    }

    // Oculta botón retroalimentación y muestra botón siguiente
    document.getElementById(`${mode}-feedback-btn`).style.display = 'none';
    document.getElementById(`${mode}-next`).style.display = 'inline-block';
}

function showSadEmoji() {
    const emojiDiv = document.createElement('div');
    emojiDiv.textContent = "😢";
    emojiDiv.style.position = "fixed";
    emojiDiv.style.top = "50%";
    emojiDiv.style.left = "50%";
    emojiDiv.style.transform = "translate(-50%, -50%)";
    emojiDiv.style.fontSize = "80px";
    emojiDiv.style.zIndex = "1000";
    emojiDiv.style.animation = "fadeOut 1.5s ease forwards";

    document.body.appendChild(emojiDiv);

    setTimeout(() => {
        document.body.removeChild(emojiDiv);
    }, 1500);
}

const tips = [
    "📌 Recuerda: para sumar matrices deben tener la misma dimensión.",
    "💡 Para que una matriz sea invertible, su determinante debe ser ≠ 0.",
    "🎯 Un conjunto de vectores forma una base si son LI y generan el espacio.",
    "🧠 El producto escalar es útil para verificar ortogonalidad.",
    "📘 Usa el método de Gauss-Jordan para encontrar la inversa de una matriz."
];

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => document.body.removeChild(toast), 500);
    }, 4000);
}

setInterval(() => {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    showToast(randomTip);
}, 15000);


setInterval(() => {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    showToast(randomTip);
}, 15000); // cada 15 segundos

// CSS para el toast:
const style = document.createElement("style");
style.innerHTML = `
.custom-toast {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #323232;
    color: white;
    padding: 15px 20px;
    border-radius: 8px;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s, transform 0.5s;
    z-index: 9999;
}
.custom-toast.show {
    opacity: 1;
    transform: translateY(0);
}`;
document.head.appendChild(style);

function getExplanation(index) {
    const explanations = [
        "Un espacio vectorial tiene dos operaciones: suma de vectores y multiplicación por un escalar que cumplen ciertos axiomas.",
        "Una matriz es invertible si su determinante es diferente de cero. Por eso det(A) ≠ 0.",
        "La dimensión es el número de vectores linealmente independientes en una base del espacio.",
        "Dos vectores son linealmente independientes si no puedes obtener uno a partir del otro mediante un escalar."
    ];
    return explanations[index] || "Consulta tu profesor o material de estudio para más detalles.";
}

function confirmAnswer(mode) {
    const question = gameQuestions[currentQuestionIndex];
    const correctAnswer = question.correctAnswer;
    const feedbackDiv = document.getElementById(`${mode}-feedback`);
    const confirmBtn = document.getElementById(`${mode}-confirm`);
    const nextBtn = document.getElementById(`${mode}-next`);
    const correctAudio = new Audio('sounds/respuesta_correcta.mp3');
    const incorrectAudio = new Audio('sounds/spongebob-fail.mp3');

    // Bloquear opciones
    document.querySelectorAll(`#${mode}-question .option-button`).forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === correctAnswer) btn.classList.add('correct');
        if (idx === selectedAnswer && selectedAnswer !== correctAnswer) btn.classList.add('incorrect');
    });

    // Deshabilitar confirmar
    confirmBtn.disabled = true;

    const explanation = getExplanation(currentQuestionIndex);

    if (selectedAnswer === correctAnswer) {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        currentScores[mode]++;
        document.getElementById(`${mode}-score`).textContent = currentScores[mode];
        correctAudio.play().catch(console.warn);
        feedbackDiv.innerHTML = `<p class="correct-feedback">✅ ¡Correcto!<br>${explanation}</p>`;
    } else {
        showSadEmoji();
        incorrectAudio.play().catch(console.warn);
        feedbackDiv.innerHTML = `<p class="incorrect-feedback">❌ Incorrecto.<br>${explanation}</p>`;

        if (mode === 'muerte-subita') {
            incorrectAudio.onended = () => endGame(mode, false);
            return;
        }
    }

    // Mostrar botón "Ver explicación y continuar" (si no es muerte súbita con error)
    nextBtn.style.display = 'inline-block';
}
function reiniciarJuego() {
    navigateTo(currentMode); // Vuelve a iniciar el modo actual
}
function getRandomQuestions(count) {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, questions.length));
}

