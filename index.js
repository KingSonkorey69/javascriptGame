function computerPlay(){
    const start = ['Rock','Paper','Scissors'];
    return start[Math.floor(Math.random()*start.length)];
} 
function validInput(userInput){
    userInput = userInput.toLowerCase();
    if(userInput === "rock" ||  userInput === "scissors" || userInput === "paper"){
    return true;
    }else{
    return false;
    }
};
function playRound(playerSelection, computerSelection){
    if (playerSelection == null || computerSelection == null) {
        return "Invalid input";
    }
    if (playerSelection === computerSelection) {
        return "It's a Tie";
    }
    if (playerSelection !== "rock" || playerSelection !== "scissors" || playerSelection !== "paper") {
        return "Invalid input";
    }
    if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            return "You Win";
        } else {
            return "Computer Wins";
        }
    }else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            return "You Win";
        } else {
            return "Computer Wins";
        }
    }else {
        if (computerSelection === "Paper") {
            return "You Win";
        } else {
            return "Computer Wins";
        }
    }
}
    
function game(){
    for(let i=0; i < 5; i++){
        const playerSelection = prompt("Rock, Paper, Scissors").toLowerCase();
        if(validInput(userInput) === false) {
            console.log("Wrong Input Retry");
            game();
        }else{
            const computerSelection = computerPlay();
            const winner = playRound(playerSelection, computerSelection);
            console.log(`${winner}`);
        }

    }
    
    
}
