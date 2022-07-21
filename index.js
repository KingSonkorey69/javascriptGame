function computerPlay(){
    const start = ['Rock','Paper','Scissors'];
    return start[Math.floor(Math.random()*start.length)];
    } 
    function validInput(userInput){
        userInput = userInput.toLowerCase();
        if(userInput === "rock"  && userInput === "scissors" && userInput === "paper"){
            return true;
        }else{
            return false;
        }
    };
    function playRound(playerSelection, computerSelection){
        if (playerSelection == null || computerSelection == null) {
            return "Invalid input";
        } else if (playerSelection !== "rock" && playerSelection !== "scissors" && playerSelection !== "paper") {
            return "Invalid input";
        }else if (playerSelection  === computerSelection) {
            return `It's a tie! ${playerSelection}you both picked ${computerSelection}`;
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            return "You win! Rock beats Scissors";
        // }else if (playerSelection === "scissors" && computerSelection === "rock") {
        //         return "You lose! Rock beats Scissors";
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            return "You win! Paper beats Rock";
        // }else if (playerSelection === "rock" && computerSelection === "paper") {
        //         return "You lose! Paper beats Rock";
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            return "You win! Scissors beats Paper";
        // }else if (playerSelection === "paper" && computerSelection === "scissors") {
        //         return "You lose! Scissors beats Paper";
        } else if  (playerSelection === computerSelection){
            return `You win! ${playerSelection} beats ${computerSelection} `;
        }else{
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    }
    
    function game(){
    
        for(let i=0; i < 5; i++){
            const userInput = prompt("Rock, Paper, Scissors").toLowerCase();
            if(validInput(userInput) === false) {
                userInput = prompt('Your selection is invalid! Retry!')
            };
            const computerSelection = computerPlay();
            const winner = playRound(playerSelection, computerSelection);
            console.log(winner);
        }
    
    }
    game();