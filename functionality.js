
let computerSelection;
let computerChoice;
function computerPlay(){
    computerChoice = Math.floor((Math.random() * 3) + 1);
        switch (computerChoice){
            case 1:
                computerSelection = "rock";
                break;
            case 2:
                computerSelection = "paper";
                break;
            case 3:
                computerSelection = "scissors";
                break;
            default:
                console.log("An error has occured");
        }
}

let playerInput;
let playerSelection;
function playerPlay(){
    playerInput = prompt("Please enter rock, paper, or scissors to play.");
    if (playerInput == null){
        playerPlay();
    }
    playerSelection = playerInput.toLowerCase();
    switch (playerSelection){
        case "rock":
        case "paper":
        case "scissors":
            break;
        default:
            alert("Please ensure your input is 'rock', 'paper', or 'scissors'.");
            playerPlay();
    }
    return playerSelection;
}

let winner;
function getWinner(){
    switch (true) {
        case (computerSelection == "rock" && playerSelection == "rock"):
        case (computerSelection == "paper" && playerSelection == "paper"):
        case (computerSelection == "scissors" && playerSelection == "scissors"):
            alert("The round was a draw!"); 
            winner = "none";
            break;   
        case (computerSelection == "rock" && playerSelection == "scissors"):
        case (computerSelection == "paper" && playerSelection == "rock"):
        case (computerSelection == "scissors" && playerSelection == "paper"):
            alert("The computer won this round!")
            winner = "computer";
            break;
        case (computerSelection == "rock" && playerSelection == "paper"):
        case (computerSelection == "paper" && playerSelection == "scissors"):
        case (computerSelection == "scissors" && playerSelection == "rock"):
            alert("You won this round!")
            winner = "player";
            break;
    }
    return winner;
}

let playerScore = 0;
let computerScore = 0;
function adjustScore(){
    switch (winner){
        case "none":
            break;
        case "computer":
            computerScore++;
            break;
        case "player":
            playerScore++;
            break;
        default:
            console.log("An error has occured");
            break;
    }
    alert(`Your score is ${playerScore} and the computer's score is ${computerScore}`);
}

game();

function game(){
    while (playerScore < 5 && computerScore < 5){
        computerPlay();
        playerPlay();
        getWinner();
        adjustScore();
    }

    switch (true){
        case (playerScore == 5):
            alert("You won!");
            break;
        case (computerScore == 5):
            alert("The computer won!");
            break;
    }
}