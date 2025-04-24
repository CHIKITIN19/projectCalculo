const questions = [
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
},
{
    question: "¿Qué es un valor propio (autovalor) de una matriz A?",

    options: [
        "Un vector que satisface Av =0",
        "Un escalar λ Av=λv para algún vector no nulo v",
        "La traza de la matriz A.",
        "El determinante de A."
    ],
    correctAnswer: 1
},
{
    question: "La multiplicidad algebraica de un valor propio:",
    options: [
        "Es el número de vectores propios linealmente independientes asociados a él.",
        "Es el número de veces que aparece como raíz del polinomio característico.",
        "Siempre es igual a la multiplicidad geométrica.",
        "Es la dimensión del espacio nulo de A."
    ],
    correctAnswer: 1
},
{
    question: "Si una matriz A es diagonalizable:",

    options: [
        "Todos sus valores propios son distintos.",
        "Tiene exactamente n valores propios (para una matriz n×n).",
        "La multiplicidad geométrica de cada valor propio es igual a su multiplicidad algebraica.",
        "Su determinante es cero."
    ],
    correctAnswer: 2
},
{
    question: "Si A es una matriz simétrica real, ¿qué propiedad especial tienen sus vectores propios?",
    options: [
        "Son siempre ortogonales.",
        "Todos corresponden al mismo valor propio.",
        "No existen.",
        "Son siempre paralelos."
    ],
    correctAnswer: 0
},
{
    question: " ¿Qué significa que una matriz A sea diagonalizable? ",

    options: [
        "Que puede escribirse como A = PDP^-1, donde D es diagonal.",
        "Que todos sus elementos fuera de la diagonal son cero.",
        "Que su determinante es igual a su traza.",
        "Que es invertible."
    ],
    correctAnswer: 0
},
{
    question: "La matriz P en la diagonalización A = PDP^-1 está formada por:",
    options: [
        "Los valores propios de A  en su diagonal.",
        "Los vectores propios de  A como columnas.",
        "Las filas de A escaladas.",
        " La inversa de los vectores propios de A."
    ],
    correctAnswer: 1
},
{
    question: '<img src="../img/ejercicio1.png" alt="Pregunta sobre matriz" width="300" height="200">',
    options: [
        "λ^2-7λ+6",
        "λ^2-7λ+7",
        "λ^2-8λ+6",
        "λ^2-7λ+5."
    ],
    correctAnswer: 0
},
{
    question: '<img src="../img/ejericio2.png" alt="Pregunta sobre matriz" width="300" height="200">',
    options: [
        "λ^2-9λ+18",
        "λ^2-9λ+12",
        "λ^2-9λ-18",
        "λ^2-7λ+54."
    ],
    correctAnswer: 0
},
{
    question: "La ecuacion caracteristica de la pregunta anterior es la siguiente:",
    options: [
        "λ^2-9λ+18=0",
        "λ^2-9λ+12=0",
        "λ^2-9λ-18=0",
        "λ^2-7λ+54=0"
    ],
    correctAnswer: 0
},
{
    question: '<img src="../img/ejercicio3.png" alt="Pregunta sobre matriz" width="300" height="200">',
    options: [
        "1",
        "2",
        "3",
        "No se puede determinar."
    ],
    correctAnswer: 1
},
{
    question: '<img src="../img/ejercicio4.png" alt="Pregunta sobre matriz" width="300" height="200">',
    options: [
        "Tener todos sus elementos diagonales distintos de cero.",
        "Poseer n vectores propios linealmente independientes (para una matriz n×n).",
        "Ser simétrica.",
        "Tener determinante igual a cero."
    ],
    correctAnswer: 1
},
{
    question: '<img src="../img/ejercicio5.png" alt="Pregunta sobre matriz" width="300" height="200">',
    options: [
        "λ=1, λ=2,  λ=3",
        "λ=-1,  λ=2,  λ=-3",
        "λ=0,  λ=2,  λ=4",
        "λ=5,  λ=1,  λ=2"
    ],
    correctAnswer: 0
},
{
    question: '<img src="../img/ejercicio6.png" alt="Pregunta sobre matriz" width="300" height="200">',
    options: [
        "1, porque solo hay un vector propio LI.",
        "2, porque el polinomio característico tiene (λ=1)^2.",
        "0, porque no hay vectores propios.",
        "3, porque la matriz es diagonalizable."
    ],
    correctAnswer: 0
},
{
    question: '<img src="../img/ejercicio7.png" alt="Pregunta sobre matriz" width="300" height="200">',
    options: [
        "1",
        "2",
        "3",
        "6"
    ],
    correctAnswer: 1
},
{
    question: "¿Qué representa la multiplicidad geométrica de un valor propio?",
    options: [
        "El número de veces que aparece en el polinomio característico.",
        "La dimensión del espacio propio asociado.",
        "La traza de la matriz.",
        "ninguna de las anteriores"
    ],
    correctAnswer: 1
}
];
const feedbacks = {

    0: {
        correct: "¡Correcto!",
    incorrect: "Incorrecto. Para formar la matriz P necesitas calcular los vectores propios de la matriz A y colocarlos como columnas. <br><br>" +
               "Paso a paso:<br>1. Halla los valores propios.<br>2. Para cada valor propio, encuentra su vector propio.<br>3. Forma la matriz P usando esos vectores como columnas."
    },
    1:{
        correct:"¡Correcto!",
        incorrect:"Explicación:Por definición, un valor propio 𝜆 de una matriz A es un escalar tal que existe un vector no nulo 𝑣 (llamado vector propio) que cumple:𝐴𝑣=𝜆𝑣 Esto significa que la transformación lineal representada por A no cambia la dirección del vector v, solo lo escala."
    },
    2:{
        correct:"¡Correcto!",
        incorrect:"Explicación:La multiplicidad algebraica de un valor propio es el número de veces que λ aparece como raíz del polinomio característico: 𝜒𝐴(𝜆)=det(𝐴−𝜆𝐼) Esto es un concepto puramente algebraico y se relaciona con la factorización del polinomio."
    },
    3:{
        correct:"¡Correcto!",
        incorrect:"Explicación: Una matriz A es diagonalizable si tiene una base de vectores propios, lo que ocurre si y solo si, para cada valor propio λ, su multiplicidad geométrica (dimensión del espacio nulo de 𝐴−𝜆𝐼) es igual a su multiplicidad algebraica. Esto garantiza que hay suficientes vectores propios para construir la matriz P tal que A = PDP^-1"
    },
    4:{
        correct:"¡Correcto!",
        incorrect:"Explicación:(Teorema espectral: los vectores propios de matrices simétricas reales son ortogonales.) Por el teorema espectral, una matriz simétrica real tiene: Todos sus valores propios reales. Un conjunto de vectores propios ortogonales (incluso ortonormales si se normalizan). Esto permite que matrices simétricas se diagonalicen mediante matrices ortogonales."
    },
    5:{
        correct:"¡Correcto!",
        incorrect:"Explicación:Esa es la definición directa de diagonalización por semejanza: existe una matriz P de vectores propios y una matriz D diagonal con los valores propios en la diagonal, tal que: A = PDP^-1"
    },
    6:{
        correct:"¡Correcto!",
        incorrect:"Explicación:La matriz P contiene en sus columnas los vectores propios de A.  Cada vector propio 𝑣𝑖 corresponde a un valor propio 𝜆𝑖, que va en la posición 𝑖 de la diagonal de D."
    },
    7:{
        correct:"¡Correcto!",
        incorrect:"Explicación:Para calcular el polinomio característico, se usa la fórmula det(A - λI) = 0. En este caso, al resolver el determinante de la matriz A - λI, se obtiene el polinomio característico λ^2-7λ+6."
    },
    8:{
        correct:"¡Correcto!",
        incorrect:"Explicación:El polinomio característico se obtiene al calcular el determinante de la matriz A - λI. En este caso, al resolver el determinante de la matriz A - λI, se obtiene el polinomio característico λ^2-9λ+18."
    },
    9:{
        correct:"¡Correcto!",
        incorrect:"Explicación:La ecuación característica de una matriz se obtiene al igualar el polinomio característico a cero. En este caso, la ecuación característica es λ^2-9λ+18=0."
    },
    10:{
        correct:"¡Correcto!",
        incorrect:"Explicación: det(B−λI)=(5−λ)(λ2−6λ+5), Raíces: λ=5 (doble) y λ=1. (λ=5 aparece dos veces en el polinomio característico)."
    },
    11:{
        correct:"¡Correcto!",
        incorrect:"Explicación:Se requieren 3 vectores LI"
    },
    12:{
        correct:"¡Correcto!",
        incorrect:"Explicación:Calculados previamente: raíces del polinomio característico −λ ^3+6λ ^2−11λ+6=)."
    },
    13:{
        correct:"¡Correcto!",
        incorrect:"Explicación:El espacio propio para λ=1,  está generado por  (−1 1 2), por lo que mg=1."
    },
    14:{
        correct:"¡Correcto!",
        incorrect:"Explicación:El polinomio característico es −(λ−3) ^2 (λ−5), por lo que λ=3 aparece dos veces (ma=2)."
    },
    15:{
        correct:"¡Correcto!",
        incorrect:"Explicación:explicacion La multiplicidad geométrica (mg) es el número de vectores propios linealmente independientes asociados a un valor propio. Se calcula como: mg=n−rango(A−λI)"
    }
    



};
function renderMath() {
    if (typeof MathJax !== 'undefined') {
      MathJax.typesetPromise().catch(err => console.log('MathJax typeset error:', err));
    }
  }
  
  // Llama a esta función después de cargar cada pregunta
  renderMath();

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
<button id="${mode}-next" class="next-button" onclick="${mode === 'banco-preguntas' ? `continueGame('${mode}')` : `nextQuestion('${mode}')`}" style="display: none;">Siguiente</button>

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
        // Deshabilita el botón "Continuar" si es modo banco
        if (mode === 'banco-preguntas') {
            const continueBtn = document.getElementById(`${mode}-next`);
            if (continueBtn) {
                continueBtn.disabled = true;
                continueBtn.textContent = "Fin del banco de preguntas";
                continueBtn.style.backgroundColor = "#ccc"; // opcional: visualmente desactivado
                continueBtn.style.cursor = "not-allowed";
            }
        }
        endGame(mode, true);
    } else {
        showQuestion(mode);
        selectedAnswer = null;
        document.getElementById(`${mode}-next`).style.display = 'none';
    }
}


function endGame(mode, win) {
    clearInterval(timer);

    let title, message;
    if (win) {
        title = "🎉 ¡Felicidades!";
        message = `Has completado el modo ${mode === 'muerte-subita' ? 'Muerte Súbita' : mode} con ${currentScores[mode]} puntos`;
    } else {
        title = "😢 Fin del juego";
        message = mode === "muerte-subita" 
            ? "Fallaste una pregunta en modo Muerte Súbita. ¡Inténtalo de nuevo!" 
            : "Juego terminado";
    }

    // Actualizar mejores puntuaciones
    if (currentScores[mode] > bestScores[mode]) {
        bestScores[mode] = currentScores[mode];
        localStorage.setItem(`best-score-${mode}`, bestScores[mode]);
        document.getElementById(`best-score-${mode}`).textContent = bestScores[mode];
    }

    // Mostrar modal de fin de juego
    document.getElementById("end-game-title").textContent = title;
    document.getElementById("end-game-message").textContent = message;
    openModal('end-game-modal');

    // Reiniciar variables del juego
    currentScores[mode] = 0;
    currentQuestionIndex = 0;
    selectedAnswer = null;
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


function getExplanation(questionIndex) {
    const question = gameQuestions[questionIndex];
    const feedback = feedbacks[questionIndex];
    if (!feedback) return "";  // Si no hay retroalimentación, retorna vacío

    // Obtener el resultado del feedbackDiv
    const mode = currentMode; // Asumiendo que currentMode es global
    const feedbackDiv = document.getElementById(`${mode}-feedback`);
    const result = feedbackDiv ? feedbackDiv.dataset.result : null;

    if (result === 'correct') {
        return feedback.correct || "Correct"; // Mostrar feedback correcto o "Correct" si no hay
    } else {
        return feedback.incorrect || "Incorrect"; // Mostrar feedback incorrecto o "Incorrect" si no hay
    }
}

function showFeedback(mode) {
    const question = gameQuestions[currentQuestionIndex];
    const correctAnswer = question.correctAnswer;
    const feedbackDiv = document.getElementById(`${mode}-feedback`);
    
    // Asegurarnos de obtener el resultado actualizado
    const isCorrect = selectedAnswer === correctAnswer;
    const result = isCorrect ? 'correct' : 'incorrect';
    feedbackDiv.dataset.result = result; // Actualizar el dataset

    const correctAudio = new Audio('sounds/respuesta_correcta.mp3');
    const incorrectAudio = new Audio('sounds/spongebob-fail.mp3');

    const explanation = getExplanation(currentQuestionIndex);

    if (isCorrect) {
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
    "🧮 La ecuación característica se obtiene de |A - λI| = 0, donde A es tu matriz y λ una variable escalar.",
    "📐 El polinomio característico es un polinomio en λ; sus raíces son los **valores propios** (eigenvalores).",
    "💥 Si el determinante |A - λI| = 0 tiene una raíz λ₀, entonces existe un vector no nulo v tal que (A - λ₀I)v = 0.",
    "🔍 Para cada valor propio λ, encuentra los **vectores propios** resolviendo (A - λI)v = 0 (un sistema homogéneo).",
    "🔄 Una matriz **es diagonalizable** si tiene **n** vectores propios linealmente independientes (donde n es el tamaño de la matriz).",
    "📊 Si todos los valores propios son distintos (sin multiplicidad algebraica mayor que 1), la matriz siempre es diagonalizable.",
    "📘 Para diagonalizar: A = PDP⁻¹, donde D es la matriz diagonal con los valores propios y P tiene los vectores propios como columnas."
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


function confirmAnswer(mode) {
    const question = gameQuestions[currentQuestionIndex];
    const correctAnswer = question.correctAnswer;
    const feedbackDiv = document.getElementById(`${mode}-feedback`);
    const confirmBtn = document.getElementById(`${mode}-confirm`);
    const nextBtn = document.getElementById(`${mode}-next`);
    const correctAudio = new Audio('sounds/respuesta_correcta.mp3');
    const incorrectAudio = new Audio('sounds/spongebob-fail.mp3');

    // Verificar si se seleccionó una opción
    if (selectedAnswer === null) {
        alert("Por favor selecciona una opción antes de confirmar.");
        return;
    }

    // Bloquear todas las opciones
    document.querySelectorAll(`#${mode}-question .option-button`).forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === correctAnswer) btn.classList.add('correct');
        if (idx === selectedAnswer && selectedAnswer !== correctAnswer) btn.classList.add('incorrect');
    });

    // Deshabilitar botón de confirmar
    confirmBtn.disabled = true;

    if (selectedAnswer === correctAnswer) {
        // Respuesta correcta
        currentScores[mode]++;
        document.getElementById(`${mode}-score`).textContent = currentScores[mode];
        feedbackDiv.innerHTML = `
            <div class="correct-feedback">
                <strong>✅ ¡Correcto!</strong>
                <p>${feedbacks[currentQuestionIndex]?.correct || 'Respuesta correcta.'}</p>
            </div>
        `;
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        correctAudio.play().catch(console.warn);
        
        // Mostrar botón para continuar
        nextBtn.style.display = 'inline-block';
    } else {
        // Respuesta incorrecta
        const feedback = feedbacks[currentQuestionIndex]?.incorrect || 'Respuesta incorrecta.';
        feedbackDiv.innerHTML = `
            <div class="incorrect-feedback">
                <strong>❌ Incorrecto</strong>
                <p>${feedback}</p>
                <p>La respuesta correcta era: ${question.options[correctAnswer]}</p>
            </div>
        `;
        showSadEmoji();
        incorrectAudio.play().catch(console.warn);
        
        // En modo muerte súbita, mostrar feedback y luego terminar
        if (mode === 'muerte-subita') {
            setTimeout(() => {
                endGame(mode, false);
            }, 6000); // 3 segundos para leer el feedback
        } else {
            // En otros modos, mostrar botón para continuar
            nextBtn.style.display = 'inline-block';
        }
    }
}

function reiniciarJuego() {
    navigateTo(currentMode); // Vuelve a iniciar el modo actual
}
function getRandomQuestions(count) {
    return questions.slice(0, count); // Devuelve las primeras 'count' preguntas, en vez de aleatorias.
}


