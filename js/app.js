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
        question: "¿Cuál es el rango de una matriz?",
        options: [
            "El número de filas de la matriz",
            "El número de columnas de la matriz",
            "La dimensión de la imagen de la transformación lineal asociada",
            "El determinante de la matriz"
        ],
        correctAnswer: 2
    },
    {
        question: "Si A y B son matrices invertibles, entonces (AB)^(-1) es igual a:",
        options: [
            "A^(-1)B^(-1)",
            "B^(-1)A^(-1)",
            "A^(-1) + B^(-1)",
            "A^(-1) - B^(-1)"
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué representa el valor propio de una matriz?",
        options: [
            "La dimensión de la matriz",
            "El determinante de la matriz",
            "Un escalar que, al multiplicar un vector propio, da como resultado el mismo vector escalado",
            "La suma de los elementos diagonales"
        ],
        correctAnswer: 2
    },
    {
        question: "¿Qué es la traza de una matriz?",
        options: [
            "El determinante de la matriz",
            "La suma de los elementos diagonales",
            "El producto de los elementos diagonales",
            "La suma de todos los elementos de la matriz"
        ],
        correctAnswer: 1
    },
    {
        question: "Si un sistema de ecuaciones lineales tiene más ecuaciones que incógnitas, entonces:",
        options: [
            "Siempre tiene solución única",
            "Nunca tiene solución",
            "Puede ser sobredeterminado y no tener solución",
            "Siempre tiene infinitas soluciones"
        ],
        correctAnswer: 2
    },
    {
        question: "¿Qué es una matriz ortogonal?",
        options: [
            "Una matriz donde todos los elementos son iguales",
            "Una matriz donde A * A^T = I",
            "Una matriz con determinante igual a 0",
            "Una matriz diagonal"
        ],
        correctAnswer: 1
    },
    {
        question: "La inversa de una matriz diagonal se obtiene:",
        options: [
            "Invirtiendo cada elemento de la diagonal",
            "Transponiendo la matriz",
            "Multiplicando por -1 cada elemento",
            "Sumando 1 a cada elemento diagonal"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es el núcleo de una transformación lineal?",
        options: [
            "El conjunto de todos los vectores en el dominio",
            "El conjunto de todos los vectores en el codominio",
            "El conjunto de vectores que se transforman en el vector cero",
            "El conjunto de vectores que no cambian con la transformación"
        ],
        correctAnswer: 2
    },
    {
        question: "¿Cuál es el determinante de una matriz singular?",
        options: [
            "1",
            "0",
            "Infinito",
            "No definido"
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué significa que una matriz sea diagonalizable?",
        options: [
            "Que todos sus elementos son cero excepto en la diagonal",
            "Que existe una base en la que la matriz se representa como diagonal",
            "Que su determinante es cero",
            "Que es una matriz cuadrada"
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué es el producto punto entre dos vectores?",
        options: [
            "Un vector",
            "Una matriz",
            "Un escalar",
            "Un tensor"
        ],
        correctAnswer: 2
    }
];

// Variables globales
let currentScores = {
    'muerte-subita': 0,
    'banco-preguntas': 0,
    'con-tiempo': 0
};

let bestScores = {
    'muerte-subita': localStorage.getItem('best-score-muerte-subita') || 0,
    'banco-preguntas': localStorage.getItem('best-score-banco-preguntas') || 0,
    'con-tiempo': localStorage.getItem('best-score-con-tiempo') || 0
};

let currentQuestionIndex = 0;
let currentMode = null;
let timer = null;
let timeLeft = 60;

// Cargar las mejores puntuaciones
document.getElementById('best-score-muerte-subita').textContent = bestScores['muerte-subita'];
document.getElementById('best-score-banco-preguntas').textContent = bestScores['banco-preguntas'];
document.getElementById('best-score-con-tiempo').textContent = bestScores['con-tiempo'];

// Navegación entre páginas
function navigateTo(page) {
    document.getElementById('main-page').style.display = 'none';
    document.getElementById('muerte-subita').style.display = 'none';
    document.getElementById('banco-preguntas').style.display = 'none';
    document.getElementById('con-tiempo').style.display = 'none';
    
    document.getElementById(page).style.display = 'block';
    
    // Si estamos volviendo al menú principal, detener el juego actual
    if (page === 'main-page') {
        stopCurrentGame();
        return;
    }
    
    // Iniciar nuevo juego
    currentMode = page;
    startGame(page);
}

// Abrir modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

// Cerrar modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}
// Iniciar juego
function startGame(mode) {
    currentScores[mode] = 0;
    document.getElementById(`${mode}-score`).textContent = '0';
    currentQuestionIndex = 0;
    
    // Obtener preguntas aleatorias
    gameQuestions = getRandomQuestions(5);
    
    if (mode === 'con-tiempo') {
        // Iniciar temporizador
        timeLeft = 60;
        document.getElementById('timer').textContent = timeLeft;
        startTimer();
    }
    
    // Mostrar primera pregunta
    showQuestion(mode);
}

// Mostrar pregunta actual
function showQuestion(mode) {
    if (currentQuestionIndex >= gameQuestions.length) {
        endGame(mode, false);
        return;
    }
    
    const question = gameQuestions[currentQuestionIndex];
    const questionContainer = document.getElementById(`${mode}-question`);
    
    let html = `
        <h3>${question.question}</h3>
        <div class="options">
    `;
    
    for (let i = 0; i < question.options.length; i++) {
        html += `<div class="option" onclick="checkAnswer(${i}, '${mode}')">${question.options[i]}</div>`;
    }
    
    html += '</div>';
    questionContainer.innerHTML = html;
    
    // Reiniciar temporizador para modo Con Tiempo
    if (mode === 'con-tiempo') {
        timeLeft = 60;
        document.getElementById('timer').textContent = timeLeft;
    }
}

// Iniciar temporizador
function startTimer() {
    clearInterval(timer);
    timer = setInterval(function() {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;
        
        if (timeLeft <= 0) {
            // Si se acaba el tiempo, pasar a la siguiente pregunta
            clearInterval(timer);
            currentQuestionIndex++;
            if (currentQuestionIndex < gameQuestions.length) {
                showQuestion('con-tiempo');
            } else {
                endGame('con-tiempo', false);
            }
        }
    }, 1000);
}

// Verificar respuesta
function checkAnswer(selectedIndex, mode) {
    const correctIndex = gameQuestions[currentQuestionIndex].correctAnswer;
    const isCorrect = selectedIndex === correctIndex;
    
    if (isCorrect) {
        // Respuesta correcta
        currentScores[mode]++;
        document.getElementById(`${mode}-score`).textContent = currentScores[mode];
        
        currentQuestionIndex++;
        
        // En modo Muerte Súbita, seguir hasta fallar
        if (mode === 'muerte-subita') {
            showQuestion(mode);
        }
        // En los otros modos, pasar a la siguiente pregunta o terminar
        else if (currentQuestionIndex < gameQuestions.length) {
            showQuestion(mode);
        } else {
            endGame(mode, false);
        }
    } else {
        // Respuesta incorrecta
        if (mode === 'muerte-subita') {
            // En Muerte Súbita, terminar el juego
            endGame(mode, true);
        } else {
            // En los otros modos, continuar con la siguiente pregunta
            currentQuestionIndex++;
            if (currentQuestionIndex < gameQuestions.length) {
                showQuestion(mode);
            } else {
                endGame(mode, false);
            }
        }
    }
}

// Finalizar juego
function endGame(mode, failed) {
    const score = currentScores[mode];
    const questionContainer = document.getElementById(`${mode}-question`);
    
    let message = '';
    if (mode === 'muerte-subita' && failed) {
        message = `¡Juego terminado! Has fallado una pregunta. Tu puntuación final es: ${score}`;
    } else {
        message = `¡Has completado todas las preguntas! Tu puntuación final es: ${score} de ${gameQuestions.length}`;
    }
    
    questionContainer.innerHTML = `<h3>${message}</h3>`;
    
    // Actualizar mejor puntuación si es necesario
    if (score > bestScores[mode]) {
        bestScores[mode] = score;
        localStorage.setItem(`best-score-${mode}`, score);
        document.getElementById(`best-score-${mode}`).textContent = score;
    }
    
    // Detener temporizador si es necesario
    if (mode === 'con-tiempo') {
        clearInterval(timer);
    }
}

// Detener juego actual
function stopCurrentGame() {
    clearInterval(timer);
    currentMode = null;
}

// Cerrar modales al hacer clic fuera de ellos
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = 'none';
    }
};