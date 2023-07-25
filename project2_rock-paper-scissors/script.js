function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random() * 3);
    switch(choiceNumber) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    } 
}

function gameRound(playerSelection, computerSelection) {
    let choiceSum = `${playerSelection}-${computerSelection}`
    switch(choiceSum.toLowerCase()) {
        case "rock-rock":
        case "paper-paper":
        case "scissors-scissors":
            mainText.textContent = `Nobody win. ${computerSelection} and ${playerSelection} | Your ${pointsPlayer.textContent} vs computers ${pointsComputer.textContent}`
            break
        case "rock-paper":
        case "paper-scissors": 
        case "scissors-rock":
            pointsComputer.textContent = `${parseInt(pointsComputer.textContent)+1}`
            if (pointsComputer.textContent == '5') {
                mainText.textContent = `Computer's a winner! | Your ${pointsPlayer.textContent} vs computers ${pointsComputer.textContent}`
                pointsPlayer.textContent = `0`
                pointsComputer.textContent = `0`
            } else {
                mainText.textContent = `Computer with ${computerSelection} beats your ${playerSelection} | Your ${pointsPlayer.textContent} vs computers ${pointsComputer.textContent}`
            }
            break
        case "paper-rock":
        case "scissors-paper":  
        case "rock-scissors":
            pointsPlayer.textContent = `${parseInt(pointsPlayer.textContent)+1}`
            if (pointsPlayer.textContent == '5') {
                mainText.textContent = `You're a winner! | Your ${pointsPlayer.textContent} vs computers ${pointsComputer.textContent}`
                pointsPlayer.textContent = `0`
                pointsComputer.textContent = `0`
            } else {
                mainText.textContent = `You with ${playerSelection} beat computer's ${computerSelection} | Your ${pointsPlayer.textContent} vs computers ${pointsComputer.textContent}`
            }
            break
    }
}

const pointsPlayer = document.createElement('div');
pointsPlayer.textContent = `0`
const pointsComputer = document.createElement('div');
pointsComputer.textContent = `0`

const container = document.querySelector('.container');

const mainText = document.createElement('p');
const buttons = document.createElement('div');
const buttonRock = document.createElement('button');
const buttonPaper = document.createElement('button');
const buttonScissors = document.createElement('button');

container.appendChild(mainText);
container.appendChild(buttons);
buttons.appendChild(buttonRock);
buttons.appendChild(buttonPaper);
buttons.appendChild(buttonScissors);

mainText.textContent = 'Choose your hand'
buttonRock.textContent = "Rock";
buttonPaper.textContent = "Paper";
buttonScissors.textContent = "Scissors";

buttonRock.addEventListener('click', () => {gameRound('rock', getComputerChoice())});
buttonPaper.addEventListener('click', () => {gameRound('paper', getComputerChoice())});
buttonScissors.addEventListener('click', () => {gameRound('scissors', getComputerChoice())});
