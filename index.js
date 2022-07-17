let manCount = 0;
let compCount = 0;
let displayVal = document.querySelector("#display"); 
let rockEl = document.querySelector("#rock-el");
let paperEl = document.querySelector("#paper-el");
let scissorEl = document.querySelector("#scissor-el");

rockEl.addEventListener("click",game);
paperEl.addEventListener("click",game);
scissorEl.addEventListener("click",game);



function computerPlay() {
    let ch = Math.floor(Math.random() * 3);
    //console.log(ch);
    if(ch === 0)    return "rock";
    else if(ch === 1 )  return "paper";
    else return "scissor";
    //0 = rock
    //1 = paper
    //2 = scissors
}


function playRound(playerSelection, computerSelection) {
    // if(playerSelection.toUpperCase() === computerSelection.toUpperCase()){
    //     return "draw";
    // }else if(computerSelection.toUpperCase() === "PAPER"){
    //     compCount++;
    //     return "You Lose! Paper beats Rock"
    // }else if(computerSelection.toUpperCase() === "SCISSORS"){
    //     manCount++;
    //     return "You Win! Rock beats Scissors"
    // }
    let P = playerSelection.toUpperCase();
    let C = computerSelection.toUpperCase();
    if(P === C){ return "draw"};
    if(P === "ROCK"){
        if(C === "PAPER"){
            return "You Lose, Paper Beats Rock";
        }else if(C === "SCISSORS"){
            return "You Win, Rock Beats Scissors";
        }
    }
    if(P === "PAPER"){
        if(C === "ROCK"){
            return "You win, Paper Beats Rock";
        }else if(C === "SCISSORS"){
            return "You Lose, Scissors Beats Paper";
        }
    }
    if(P === "SCISSOR"){
        if(C === "PAPER"){
            return "You Win, Scissors Beats Paper";
        }else if(C === "ROCK"){
            return "You Lose, Rock Beats Scissors";
        }
    }
}



function game(){
    
        let playerSelection = this.textContent;
        
        const computerSelection = computerPlay();
        
        displayVal.textContent = playRound(playerSelection, computerSelection);
        
}
   




