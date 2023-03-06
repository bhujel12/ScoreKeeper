
const playerOne = {
    score: 0,
    button: document.querySelector('#player1Button'),
    display: document.querySelector('#p1Display')
}

const playerTwo = {
    score: 0,
    button: document.querySelector('#player2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const playToSelect = document.querySelector('#playTo');

let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

playerOne.button.addEventListener('click', function () {
    updateScores(playerOne, playerTwo);
});

playerTwo.button.addEventListener('click', function () {
    updateScores(playerTwo, playerOne);
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
    isGameOver = false;
    for (let player of [playerOne, playerTwo]) {
        player.score = 0;
        player.display.textContent = 0;
        player.button.disabled = false;
        player.display.classList.remove('has-text-success', 'has-text-danger');
    }
}