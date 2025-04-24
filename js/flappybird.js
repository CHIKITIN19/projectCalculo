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
    // Ajustar dimensiones según el dispositivo
    const isMobile = window.innerWidth <= 768;
    
    boardWidth = isMobile ? window.innerWidth : 360;
    boardHeight = isMobile ? window.innerHeight : 640;
    
    // bird
    birdWidth = boardWidth * 0.094; // ~34px en 360px
    birdHeight = boardWidth * 0.066; // ~24px en 360px
    birdX = boardWidth / 8;
    birdY = boardHeight / 2;
    
    bird = {
        x: birdX,
        y: birdY,
        width: birdWidth,
        height: birdHeight
    };
    
    // pipes
    pipeWidth = boardWidth * 0.177; // ~64px en 360px
    pipeHeight = boardHeight * 0.8; // ~512px en 640px
    pipeX = boardWidth;
    pipeGap = boardHeight / (isMobile ? 4 : 5); // Más espacio en móviles
    
    // physics
    velocityX = isMobile ? -3 : -2; // Más rápido en móviles
    gravity = isMobile ? 0.5 : 0.4; // Gravedad ajustada
    
    // Configurar canvas
    board.width = boardWidth;
    board.height = boardHeight;
}

window.onload = function () {
    board = document.getElementById("board");
    context = board.getContext("2d");
    
    initGame();
    
    birdImg = new Image();
    birdImg.src = "../img/flappybird.png";
    birdImg.onload = function () {
        context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
    };
    
    topPipeImg = new Image();
    topPipeImg.src = "../img/toppipe.png";
    
    bottomPipeImg = new Image();
    bottomPipeImg.src = "../img/bottompipe.png";
    
    // Controles
    document.addEventListener("keydown", moveBird);
    
    // Control táctil para móviles
    document.addEventListener("touchstart", function(e) {
        e.preventDefault();
        moveBird({code: "Space"});
    });
    
    document.addEventListener("click", function(e) {
        if (gameStarted && !gameOver) {
            moveBird({code: "Space"});
        }
    });
    
    document.getElementById("startButton").addEventListener("click", function () {
        document.getElementById("startScreen").style.display = "none";
        document.getElementById("board").style.display = "block";
        startGame();
    });
    
    // Redimensionar al cambiar orientación
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
        pipeInterval = setInterval(placePipes, 1000);
    }
}

function update() {
    requestAnimationFrame(update);
    if (gameOver) return;
    
    context.clearRect(0, 0, board.width, board.height);
    
    // bird
    velocityY += gravity;
    bird.y = Math.max(bird.y + velocityY, 0);
    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
    
    if (bird.y > board.height) {
        gameOver = true;
    }
    
    // pipes
    for (let i = 0; i < pipeArray.length; i++) {
        let pipe = pipeArray[i];
        pipe.x += velocityX;
        context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);
        
        if (!pipe.passed && bird.x > pipe.x + pipe.width) {
            score += 0.5;
            pipe.passed = true;
        }
        
        if (detectCollision(bird, pipe)) {
            gameOver = true;
        }
    }
    
    while (pipeArray.length > 0 && pipeArray[0].x < -pipeWidth) {
        pipeArray.shift();
    }
    
    // Score
    context.fillStyle = "white";
    context.font = `${boardWidth * 0.125}px sans-serif`; // ~45px en 360px
    context.fillText(Math.floor(score), boardWidth * 0.014, boardHeight * 0.07); // 5px, 45px
    
    if (gameOver) {
        context.fillText("GAME OVER", boardWidth * 0.014, boardHeight * 0.14); // 5px, 90px
        clearInterval(pipeInterval);
        setTimeout(redirectToMainIndex, 1000);
    }
}

function redirectToMainIndex() {
    window.location.href = "index.html";
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
    pipeArray.push(topPipe);
    
    let bottomPipe = {
        img: bottomPipeImg,
        x: pipeX,
        y: randomPipeY + pipeHeight + openingSpace,
        width: pipeWidth,
        height: pipeHeight,
        passed: false
    };
    pipeArray.push(bottomPipe);
}

function moveBird(e) {
    if (e.code === "Space" || e.code === "ArrowUp" || e.code === "KeyX") {
        velocityY = -6;
        
        if (gameOver) {
            redirectToMainIndex();
        }
    }
    
    if (gameOver && (e.code === "Enter" || e.code === "KeyR")) {
        redirectToMainIndex();
    }
}

function detectCollision(a, b) {
    return a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y;
}