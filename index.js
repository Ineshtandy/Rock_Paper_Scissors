let manCount = 0;
let compCount = 0;
let displayVal = document.querySelector("#display"); 
let displayManScore = document.querySelector("#man"); 
let displayCompScore = document.querySelector("#comp"); 

let rockEl = document.querySelector("#rock-el");
let paperEl = document.querySelector("#paper-el");
let scissorEl = document.querySelector("#scissor-el");
let reloadEl = document.querySelector("#reload-el");

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

    if(P === C){
        displayManScore.textContent = "MAN " + manCount;
            displayCompScore.textContent = "COMP " + compCount;
        return "draw";
    }
    if(P === "ROCK"){
        if(C === "PAPER"){
            compCount++;
            displayManScore.textContent = "MAN " + manCount;
            displayCompScore.textContent = "COMP " + compCount;
            return "You Lose, Paper Beats Rock";
        }else if(C === "SCISSOR"){
            manCount++;
            displayManScore.textContent = "MAN " + manCount;
            displayCompScore.textContent = "COMP " + compCount;
            return "You Win, Rock Beats Scissors";
        }
    }
    if(P === "PAPER"){
        if(C === "ROCK"){
            manCount++;
            displayManScore.textContent = "MAN " + manCount;
            displayCompScore.textContent = "COMP " + compCount;
            return "You win, Paper Beats Rock";
        }else if(C === "SCISSOR"){
            compCount++;
            displayManScore.textContent = "MAN " + manCount;
            displayCompScore.textContent = "COMP " + compCount;
            return "You Lose, Scissors Beats Paper";
        }
    }
    if(P === "SCISSOR"){
        if(C === "PAPER"){
            manCount++;
            displayManScore.textContent = "MAN " + manCount;
            displayCompScore.textContent = "COMP " + compCount;
            return "You Win, Scissors Beats Paper";
        }else if(C === "ROCK"){
            compCount++;
            displayManScore.textContent = "MAN " + manCount;
            displayCompScore.textContent = "COMP " + compCount;
            return "You Lose, Rock Beats Scissors";
        }
    }
}



function game(){
    if(compCount < 5 && manCount < 5){
        let playerSelection = this.textContent;
        
        const computerSelection = computerPlay();

        displayVal.textContent = playRound(playerSelection, computerSelection);
    }else{
        if(compCount === 5){
            displayVal.textContent = "COMP WINS";
            reloadEl.textContent = "CLICK TO REPLAY";
            reloadEl.addEventListener("click",reload,false);
        }else{
            displayVal.textContent = "MAN WINS";
            reloadEl.textContent = "CLICK TO REPLAY";
            reloadEl.addEventListener("click",reload,false);
        }
        
    }   
}

function reload(){
    reload = location.reload();
}
   




