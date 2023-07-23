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
            console.log(`Nobody win. ${computerSelection} and ${playerSelection}`)
            return 0
        case "rock-paper":
        case "paper-scissors": 
        case "scissors-rock":
            console.log(`Computer with ${computerSelection} beats your ${playerSelection}`)
            return 1
        case "paper-rock":
        case "scissors-paper":  
        case "rock-scissors":
            console.log(`You with ${playerSelection} beat computer's ${computerSelection}`)
            return 2
    }
}

function game() {
    var playerPoint = 0
    var computerPoint = 0
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Your choice")
        const computerSelection = getComputerChoice()
        switch (gameRound(playerSelection, computerSelection)) {
            case 1:
                computerPoint++
                break
            case 2:
                playerPoint++
                break
        }
        console.log(`You ${playerPoint} and computer ${computerPoint}`)
    }
    if (playerPoint > computerPoint) {
        console.log(`You win! You have ${playerPoint} scores and the computer has ${computerPoint}`)
    } else if (computerPoint > playerPoint) {
        console.log(`Computer wins! You have ${playerPoint} scores and the computer has ${computerPoint}`)
    } else {
        console.log(`Nobody wins! You have ${playerPoint} scores and the computer has ${computerPoint}`)
    }
}

console.log(game())