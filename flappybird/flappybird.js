// Get the canvas element and its context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game variables
let birdX = 50; // Initial X position of the bird
let birdY = canvas.height / 2; // Initial Y position of the bird
let birdRadius = 20; // Radius of the bird
let gravity = 0.6; // Gravity to pull the bird down
let jumpStrength = 10; // Strength of jump when spacebar is pressed
let score = 0; // Player's score
let gameSpeed = 2; // Speed of the game
let pipes = []; // Array to store pipes

// Event listener for jumping
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        birdY -= jumpStrength;
    }
});

// Game loop function
function gameLoop() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw bird
    ctx.fillStyle = '#f44336';
    ctx.beginPath();
    ctx.arc(birdX, birdY, birdRadius, 0, Math.PI * 2);
    ctx.fill();

    // Apply gravity to bird's Y position
    birdY += gravity;

    // Generate pipes
    if (frames % 120 === 0) {
        let pipeY = Math.random() * (canvas.height - 200) + 100;
        pipes.push({ x: canvas.width, y: pipeY });
    }

    // Move pipes to the left
    for (let i = 0; i < pipes.length; i++) {
        ctx.fillStyle = '#4CAF50';
        ctx.fillRect(pipes[i].x, 0, 50, pipes[i].y);
        ctx.fillRect(pipes[i].x, pipes[i].y + 200, 50, canvas.height - pipes[i].y - 200);
        pipes[i].x -= gameSpeed;

        // Check collision with bird
        if (birdX + birdRadius > pipes[i].x && birdX - birdRadius < pipes[i].x + 50 &&
            (birdY - birdRadius < pipes[i].y || birdY + birdRadius > pipes[i].y + 200)) {
            gameOver();
        }

        // Increment score if bird passes pipe
        if (pipes[i].x === birdX - birdRadius) {
            score++;
        }
    }

    // Draw score
    ctx.fillStyle = '#000';
    ctx.font = '24px Arial';
    ctx.fillText('Score: ' + score, 10, 30);

    // Check if bird touches ground or goes above canvas
    if (birdY + birdRadius > canvas.height || birdY - birdRadius < 0) {
        gameOver();
    }

    // Call gameLoop function recursively
    requestAnimationFrame(gameLoop);
}

// Game over function
function gameOver() {
    alert('Game Over! Your score is ' + score);
    location.reload(); // Reload the page to restart the game
}

// Start the game loop
gameLoop();
