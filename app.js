
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const playerOneButton = document.querySelector('#player1Button');
const playerTwoButton = document.querySelector('#player2Button');
const resetButton = document.querySelector('#reset');
const playToSelect = document.querySelector('#playTo');

let playerOneScore = 0;
let playerTwoScore = 0;
let winningScore = 3;
let isGameOver = false;

playerOneButton.addEventListener('click', () => {
    if (!isGameOver) {
        playerOneScore += 1;
        if (playerOneScore === winningScore) {
            isGameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
        }
        p1Display.textContent = playerOneScore;
    }
});

playerTwoButton.addEventListener('click', () => {
    if (!isGameOver) {
        playerTwoScore += 1;
        if (playerTwoScore === winningScore) {
            isGameOver = true;
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
        }
        p2Display.textContent = playerTwoScore;
    }
});

resetButton.addEventListener('click', resetGame);

// if you change this to an arrow function then it will stop working
// because arrow function's 'this' reference has different scope... 
// don't totally understand it yet but can do more research in the future
// something like this.value with function() returns the value in 
// context of the playToSelect selection input thing while as
// an arrow function would make it the higest reference up or something 
// that is my hypothesis

playToSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resetGame();
})

function resetGame() {
    playerOneScore = 0;
    playerTwoScore = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    isGameOver = false;
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');
}