const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const reset = document.querySelector('.reset-btn');
const score1 = document.querySelector('.user-score');
const score2 = document.querySelector('.comp-score');
const display1 = document.querySelector('.computer .comp-option');
const display2 = document.querySelector('.computer .results');
const computerSelection = document.querySelector('.computer img');

let userScore = 0, compScore = 0;
let winner = '';

[rock, paper, scissor].forEach(img => {
    img.addEventListener('click', () => {
        const userOpt = img.id;
        const compOpt = play();
        display1.textContent = 'Computer Choose';
        calcResult(userOpt, compOpt);
        if (winner === 'user') userScore++;
        else if (winner === 'computer') compScore++;
        updateScore();
    });
});

reset.addEventListener('click', () => {
    userScore = compScore = 0;
    winner = '';
    updateScore();
    display1.textContent = '';
    display2.textContent = '';
    computerSelection.src = '';
});

function play() {
    const options = ['rock', 'paper', 'scissor'];
    const choice = options[Math.floor(Math.random() * 3)];
    computerSelection.src = `images/${choice}.svg`;
    return choice;
}

function calcResult(user, comp) {
    if (user === comp) {
        winner = 'tie';
        display2.textContent = 'Tie';
    } else if (
        (user === 'rock' && comp === 'scissor') ||
        (user === 'paper' && comp === 'rock') ||
        (user === 'scissor' && comp === 'paper')
    ) {
        winner = 'user';
        display2.textContent = 'You Won';
        display2.style.color='green';
    } else {
        winner = 'computer';
        display2.textContent = 'Computer Won';
        display2.style.color='red';
    }
}

function updateScore() {
    score1.textContent = userScore;
    score2.textContent = compScore;
}
