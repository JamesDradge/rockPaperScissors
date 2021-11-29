// computerPlay()
// generates a random number between 1-3
// assign number 1-3 to rock, paper, or scissors
// return choice as computer selection

let computerSelection;
let computerChoice;

computerPlay();

function computerPlay(){
    computerChoice = Math.floor((Math.random() * 3) + 1);
        switch (computerChoice){
            case 1:
                computerChoice = "rock";
                break;
            case 2:
                computerChoice = "paper";
                break;
            case 3:
                computerChoice = "scissors";
                break;
            default:
                console.log("An error has occured");
        }
        return computerChoice;
}
computerSelection = computerChoice;

// playerPlay()
// player prompt
// regulate Casing
// validate typed option is rock, paper, or scissors,
// return player selection

let playerInput;
let playerSelection;

playerPlay();

function playerPlay(){
    playerInput = prompt("Please enter rock, paper, or scissors to play.");
    if (playerInput == null){
        return;
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

// determineWinner()
// rock > scissors
// paper > rock
// scissors > paper
// check each selection
// return the Winner

let winner;

getWinner();

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
console.log(winner);
// declare scores
// tell the player the chosen inputs
// console.log the winner
// winner score increase
// output scores

let playerScore = 0;
let computerScore = 0;

adjustScore();

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

// Game()
// UNTIL score == 5
// computerPlay
// playerPlay
// determineWinner
// declare winner variable (global)
// set winner variable


// console log winner