let manCount = 0;
let compCount = 0;
let displayVal = document.querySelector("#display"); 
let rockEl = document.querySelector("#rock-el");
rockEl.addEventListener("click",game)


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
        compCount++;
        return "You Lose! Paper beats Rock"
    }else if(computerSelection.toUpperCase() === "SCISSORS"){
        manCount++;
        return "You Win! Rock beats Scissors"
    }
}



function game(){
    
        let playerSelection = this.textContent;
        
        const computerSelection = computerPlay();
        
        displayVal.textContent = playRound(playerSelection, computerSelection);
        
}
   




