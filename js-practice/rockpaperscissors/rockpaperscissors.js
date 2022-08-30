var choices = [
    "rock",
    "paper",
    "scissors"
];

let compScore = 0
let playerScore = 0

function getComputerChoice(){
    var compChoice = choices[Math.floor(Math.random()*choices.length)];
    return compChoice
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == "rock" & computerSelection == "paper"){
        compScore++
        return `Computer wins! Paper beats Rock. Score is ${playerScore}-${compScore}`
    } else if (playerSelection == "paper" & computerSelection == "scissors"){
        compScore++
        return `Computer wins! Scissors beats Paper. Score is ${playerScore}-${compScore}`
    } else if (playerSelection == "scissors" & computerSelection == "rock"){
        compScore++
        return `Computer wins! Rock beats Scissors. Score is ${playerScore}-${compScore}`
    } else if (playerSelection == computerSelection) {
        return `Tie! Score is ${playerScore}-${compScore}`
    } else {
        playerScore++
        return `Player wins! ${playerSelection} beats ${computerSelection}. 
        Score is ${playerScore}-${compScore}`
    }
} 



function game(){
    while (playerScore < 5 | compScore < 5){
        const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', (e)=>{
            playRound(e.id, getComputerChoice())
        })
    })
    if (playerScore > compScore){
            return "You Win!"
        } else {
            return "You Lose!"
        }


    }
}

// function game(){
//     for (let i = 0; i < 5; i++){
//     var playerSelection = prompt("Choose rock, paper, or scissors: ").toLowerCase()
//     const computerSelection = getComputerChoice();
//     console.log(playRound(playerSelection, computerSelection))
//     }
//     if (playerScore > compScore){
//         return "You Win!"
//     } else {
//         return "You Lose!"
//     }
// }





