function computerPlay(){
    const start = ['Rock','Paper','Scissors'];
    return start[Math.floor(Math.random()*start.length)];
    } 
    
    function playRound(playerSelection, computerSelection){
        if (playerSelection == null || computerSelection == null) {
            return "Invalid input";
        } else if (playerSelection !== "rock" && playerSelection !== "scissors" && playerSelection !== "paper") {
            return "Invalid input";
        } else if (playerSelection === computerSelection) {
            return `It's a tie! you both picked ${playerSelection}`;
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            return "You win! Rock beats Scissors";
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            return "You win! Paper beats Rock";
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            return "You win! Scissors beats Paper";
        } else {
            return `You lose! ${playerSelection} beats ${computerSelection}`;
        }
    }
    
    function game(){
    
        for(let i=0; i < 5; i++){
            const playerSelection = prompt("Rock, Paper, Scissors").toLowerCase();
            const computerSelection = computerPlay();
            const winner = playRound(playerSelection, computerSelection);
            console.log(winner);
        }
    
    }
    game();