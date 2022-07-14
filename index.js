let btnEl = document.getElementById("btn-el");

btnEl.addEventListener("click", function(){
    game();
})

function computerPlay() {
    let ch = Math.floor(Math.random() * 3);
    //console.log(ch);
    if(ch === 0)    return "rock";
    else if(ch === 1 )  return "paper";
    else    return "scissors";
    //0 = rock
    //1 = paper
    //2 = scissors
}


function playRound(playerSelection, computerSelection) {
    if(playerSelection.toUpperCase() === computerSelection.toUpperCase()){
        return "draw";
    }else if(computerSelection.toUpperCase() === "PAPER"){
        return "You Lose! Paper beats Rock"
    }else if(computerSelection.toUpperCase() === "SCISSORS"){
        return "You Win! Rock beats Scissors"
    }
}

function game(){
    for(let i = 0;i < 5; i++){
        let playerSelection = prompt("enter choice - rock, paper,scissors");
        const computerSelection = computerPlay();

        console.log(playRound(playerSelection, computerSelection));
    }
}
   