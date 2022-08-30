var choices = [
    "rock",
    "paper",
    "scissors"
];

const container = document.querySelector('#gamespace')
const content = document.createElement('div');
content.classList.add('content');

const finalScore = document.createElement('div')
finalScore.classList.add('content')

let compScore = 0
let playerScore = 0

function getComputerChoice(){
    var compChoice = choices[Math.floor(Math.random()*choices.length)];
    return compChoice
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == "rock" & computerSelection == "paper"){
        compScore++
        scoreChecker(playerScore, compScore)
        return `Computer wins! Paper beats Rock. Score is ${playerScore}-${compScore}`
    } else if (playerSelection == "paper" & computerSelection == "scissors"){
        compScore++
        scoreChecker(playerScore, compScore)
        return `Computer wins! Scissors beats Paper. Score is ${playerScore}-${compScore}`
    } else if (playerSelection == "scissors" & computerSelection == "rock"){
        compScore++
        scoreChecker(playerScore, compScore)
        return `Computer wins! Rock beats Scissors. Score is ${playerScore}-${compScore}`
    } else if (playerSelection == computerSelection) {
        return `Tie! Score is ${playerScore}-${compScore}`
    } else {
        playerScore++
        scoreChecker(playerScore, compScore)
        return `Player wins! ${playerSelection} beats ${computerSelection}. 
        Score is ${playerScore}-${compScore}`
    }
} 

function scoreChecker(playerScore, compScore){
    if (playerScore == 5) {
        resetGame()
        return finalScore.textContent = `Player wins! Final score was ${playerScore}-${compScore}`
    }
    if (compScore == 5) {
        resetGame()
        return finalScore.textContent =  `Computer wins! Final score was ${playerScore}-${compScore}`
    }
}

function resetGame(){
    compScore = 0
    playerScore = 0
}

const buttons = document.querySelectorAll('button');


// const play_button = document.querySelector('#play')
// play_button.addEventListener('click', game())

buttons.forEach((button) => {
    button.addEventListener('click', ()=>{
        console.log(playRound(button.id, getComputerChoice()))
        content.textContent = `${playerScore}-${compScore}`
    })
})

// if (playerScore == 5 | compScore == 5){
//     if (playerScore > compScore){
//         content.textContent = `Player wins! Final score is  ${playerScore}-${compScore}`
//     }
//     else {
//         content.textContent = `Computer wins! Final score is  ${playerScore}-${compScore}`
//     }
// }

container.appendChild(content);
container.appendChild(finalScore);

// function game(){
//     while (playerScore < 5 | compScore < 5){
//         var playerChoice = buttons.forEach((button) => {
//             button.addEventListener('click', ()=>{
//                 button.id
//             })
//         const computerSelection = getComputerChoice();
//         console.log(playRound(playerChoice, computerSelection))
//         })
//         content.textContent = `${playerScore}-${compScore}`
//     }
//     if (playerScore > compScore){
//         return "You Win!"
//     } else {
//         return "You Lose!"
//     }
// }





