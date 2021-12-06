let playerScore = 0;
let computerScore = 0;
let played = false;
//Checks for user selection and starts game
const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (played) {
            playerChoiceOutput.textContent = '';
            computerChoiceOutput.textContent = '';
            roundOutput.textContent = '';
            winnerOutput.textContent = '';
            playerSelection = e.target.outerText;
            played = false;
            resetScores();
        } else {
        playerSelection = e.target.outerText;
        }
    }, game);
    button.addEventListener('click', game);
});
//Create results div
const body = document.querySelector('body');
const results = document.createElement('div');
results.classList.add("results");
body.appendChild(results);

//Create score div 
const ScoreDisplayDiv = document.createElement('div');
ScoreDisplayDiv.classList.add('scoreDiv');
body.appendChild(ScoreDisplayDiv);

// Display player's score
const playerScoreDisplayDiv = document.createElement('div');
playerScoreDisplayDiv.classList.add('playerScoreDiv');
ScoreDisplayDiv.appendChild(playerScoreDisplayDiv);

const playerScoreDisplay = document.createElement('p');
playerScoreDisplay.classList.add('score', 'playerScore');
playerScoreDisplay.textContent = `Player score: ${playerScore}`;
playerScoreDisplayDiv.appendChild(playerScoreDisplay);

// Display computer's score
const computerScoreDisplayDiv = document.createElement('div');
computerScoreDisplayDiv.classList.add('computerScoreDiv');
ScoreDisplayDiv.appendChild(computerScoreDisplayDiv);

const computerScoreDisplay = document.createElement('p');
computerScoreDisplay.classList.add('score', 'computerScore');
computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
computerScoreDisplayDiv.appendChild(computerScoreDisplay);

// Displays player choice
const playerChoiceOutput = document.createElement('p');
results.appendChild(playerChoiceOutput);

// Displays computer's choice
const computerChoiceOutput = document.createElement('p');
results.appendChild(computerChoiceOutput);

// Displays the round result
const roundOutput = document.createElement('p');
results.appendChild(roundOutput);

// Displays the overall winner
const winnerOutput = document.createElement('p');
results.appendChild(winnerOutput);



//Keeps track of the game and runs game related functions
function game(){
    
        computerPlay();
        playerPlay();
        getWinner();
        adjustScore();

    switch (true){
        case (playerScore == 5):
            winnerOutput.textContent = "You won!...restarting";
            played = true;
            break;
        case (computerScore == 5):
            winnerOutput.textContent = "The computer won!...restarting";
            played = true;
            break;
    }
}
//Gets the computer's choice for the round
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
        computerChoiceOutput.textContent = `The computer chose ${computerSelection}`;
}
// Normalises casing of player selection
let playerSelection;
function playerPlay(){

    playerSelection = playerSelection.toLowerCase();
    switch (playerSelection){
        case "rock":
        case "paper":
        case "scissors":
            playerChoiceOutput.textContent = `You chose ${playerSelection}`;
            break;
    }
    return playerSelection;
}
//Determines a winner
let winner;
function getWinner(){
    switch (true) {
        case (computerSelection == "rock" && playerSelection == "rock"):
        case (computerSelection == "paper" && playerSelection == "paper"):
        case (computerSelection == "scissors" && playerSelection == "scissors"):
            roundOutput.textContent = "The round was a draw!";
            winner = "none";
            break;   
        case (computerSelection == "rock" && playerSelection == "scissors"):
        case (computerSelection == "paper" && playerSelection == "rock"):
        case (computerSelection == "scissors" && playerSelection == "paper"):
            roundOutput.textContent = "The computer won this round!";
            winner = "computer";
            break;
        case (computerSelection == "rock" && playerSelection == "paper"):
        case (computerSelection == "paper" && playerSelection == "scissors"):
        case (computerSelection == "scissors" && playerSelection == "rock"):
            roundOutput.textContent = "You won this round!";
            winner = "player";
            break;
    }
    return winner;
}
//Tracks player and computer scores
function adjustScore(){
    switch (winner){
        case "none":
            break;
        case "computer":
            computerScore++;
            computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
            break;
        case "player":
            playerScore++;
            playerScoreDisplay.textContent = `Player score: ${playerScore}`;
            break;
        default:
            console.log("An error has occured");
            break;
    }
}

function resetScores(){
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = `Player score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
    playerChoiceOutput.textContent = '';
    computerChoiceOutput.textContent = '';
    roundOutput.textContent = '';
}