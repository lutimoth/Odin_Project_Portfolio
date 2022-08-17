var choices = [
    "rock",
    "paper",
    "scissors"
];

function getComputerchoice(){
    compChoice = choices[Math.floor(Math.random()*choices.length)]
    console.log(compChoice)
}