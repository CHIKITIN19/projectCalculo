let board;
let boardWidth;
let boardHeight;
let context;

// bird
let birdWidth;
let birdHeight;
let birdX;
let birdY;
let birdImg;

let bird = {
    x: 0,
    y: 0,
    width: 0,
    height: 0
};

// pipes
let pipeArray = [];
let pipeWidth;
let pipeHeight;
let pipeX;
let pipeY = 0;
let pipeGap;

let topPipeImg;
let bottomPipeImg;

// physics
let velocityX;
let velocityY = 0;
let gravity;

let gameOver = false;
let score = 0;
let gameStarted = false;
let pipeInterval;

function initGame() {
    const isMobile = window.innerWidth <= 768;
    
    boardWidth = isMobile ? window.innerWidth : 360;
    boardHeight = isMobile ? window.innerHeight : 640;
    
    // bird
    birdWidth = boardWidth * 0.094;
    birdHeight = boardWidth * 0.066;
    birdX = boardWidth / 8;
    birdY = boardHeight / 2;
    
    bird = {
        x: birdX,
        y: birdY,
        width: birdWidth,
        height: birdHeight
    };
    
    // pipes
    pipeWidth = boardWidth * 0.177;
    pipeHeight = boardHeight * 0.8;
    pipeX = boardWidth;
    pipeGap = boardHeight / (isMobile ? 4 : 5);
    
    // physics
    velocityX = isMobile ? -3 : -2;
    gravity = isMobile ? 0.5 : 0.4;
    
    // Configurar canvas
    board.width = boardWidth;
    board.height = boardHeight;
}

function showMathModal() {
    const modal = document.getElementById('mathModal');
    modal.style.display = 'block';
    
    // Configurar el botón de ejercicios
    const exercisesBtn = document.getElementById('mathExercisesBtn');
    exercisesBtn.onclick = function() {
        window.location.href = "index2.html";
    };
    
    // Permitir cerrar el modal haciendo click fuera del contenido
    modal.onclick = function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    };
}

function endGame() {
    if (gameOver) return; // Evitar múltiples llamadas
    
    gameOver = true;
    clearInterval(pipeInterval);
    
    // Mostrar "GAME OVER" en el canvas
    context.fillStyle = "white";
    context.font = `${boardWidth * 0.125}px sans-serif`;
    context.fillText("GAME OVER", boardWidth * 0.014, boardHeight * 0.14);
    
    // Mostrar el modal después de un breve retraso
    setTimeout(showMathModal, 800);
}

function resetGame() {
    gameOver = false;
    gameStarted = false;
    pipeArray = [];
    score = 0;
    velocityY = 0;
    bird.y = birdY;
    
    // Limpiar el canvas
    context.clearRect(0, 0, board.width, board.height);
    
    // Volver a dibujar el pájaro en posición inicial
    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
}

window.onload = function() {
    board = document.getElementById("board");
    context = board.getContext("2d");
    
    // Añadir clase pc-mode si es PC
    if (window.innerWidth > 768) {
        document.body.classList.add('pc-mode');
        document.getElementById('startScreen').classList.add('pc-mode');
    }
    
    initGame();
    
    // Cargar imágenes
    birdImg = new Image();
    birdImg.src = "../img/flappybird.png";
    birdImg.onload = function() {
        if (!gameStarted) {
            context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
        }
    };
    
    topPipeImg = new Image();
    topPipeImg.src = "../img/toppipe.png";
    
    bottomPipeImg = new Image();
    bottomPipeImg.src = "../img/bottompipe.png";
    
    // Controles del juego
    document.addEventListener("keydown", function(e) {
        if (gameOver) return;
        
        if (e.code === "Space" || e.code === "ArrowUp" || e.code === "KeyX") {
            velocityY = -6;
        }
    });
    
    document.addEventListener("touchstart", function(e) {
        e.preventDefault();
        if (!gameOver) {
            velocityY = -6;
        }
    });
    
    document.addEventListener("click", function(e) {
        if (gameStarted && !gameOver) {
            velocityY = -6;
        }
    });
    
    // Botón de inicio
    document.getElementById("startButton").addEventListener("click", function() {
        if (window.innerWidth > 768) {
            document.body.style.backgroundColor = "#f0f0f0";
            document.getElementById("startScreen").style.backgroundColor = "#f0f0f0";
            document.getElementById("startScreen").style.backgroundImage = "none";
        }
        
        document.getElementById("startScreen").style.display = "none";
        document.getElementById("board").style.display = "block";
        startGame();
    });
    
    // Manejar redimensionamiento
    window.addEventListener("resize", function() {
        if (gameStarted && !gameOver) {
            initGame();
        }
    });
};

function startGame() {
    if (!gameStarted) {
        gameStarted = true;
        gameOver = false;
        pipeArray = [];
        score = 0;
        velocityY = 0;
        bird.y = birdY;
        
        requestAnimationFrame(update);
        pipeInterval = setInterval(placePipes, 1250);
    }
}

function update() {
    requestAnimationFrame(update);
    if (gameOver) return;
    
    context.clearRect(0, 0, board.width, board.height);
    
    // Actualizar posición del pájaro
    velocityY += gravity;
    bird.y += velocityY;
    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
    
    // Verificar si el pájaro salió de la pantalla
    if (bird.y > board.height || bird.y < 0) {
        endGame();
        return;
    }
    
    // Actualizar tubos
    for (let i = 0; i < pipeArray.length; i++) {
        let pipe = pipeArray[i];
        pipe.x += velocityX;
        context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);
        
        if (!pipe.passed && bird.x > pipe.x + pipe.width) {
            score += 0.5;
            pipe.passed = true;
        }
        
        if (detectCollision(bird, pipe)) {
            endGame();
            return;
        }
    }
    
    // Eliminar tubos no visibles
    while (pipeArray.length > 0 && pipeArray[0].x < -pipeWidth) {
        pipeArray.shift();
    }
    
    // Mostrar puntuación
    context.fillStyle = "white";
    context.font = `${boardWidth * 0.125}px sans-serif`;
    context.fillText(Math.floor(score), boardWidth * 0.014, boardHeight * 0.07);
}

function placePipes() {
    if (gameOver) return;
    
    let randomPipeY = pipeY - pipeHeight / 4 - Math.random() * (pipeHeight / 2);
    let openingSpace = pipeGap;
    
    let topPipe = {
        img: topPipeImg,
        x: pipeX,
        y: randomPipeY,
        width: pipeWidth,
        height: pipeHeight,
        passed: false
    };
    
    let bottomPipe = {
        img: bottomPipeImg,
        x: pipeX,
        y: randomPipeY + pipeHeight + openingSpace,
        width: pipeWidth,
        height: pipeHeight,
        passed: false
    };
    
    pipeArray.push(topPipe, bottomPipe);
}

function detectCollision(a, b) {
    return a.x < b.x + b.width &&
           a.x + a.width > b.x &&
           a.y < b.y + b.height &&
           a.y + a.height > b.y;
}