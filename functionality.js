
//Checks for user selection and starts game
const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playerSelection = e.target.outerText;
    }, game);
    button.addEventListener('click', game);
});

//Create results div
const body = document.querySelector('body');
const results = document.createElement('div');
results.setAttribute('style', 'min-height: 100px; border: black 10px solid;');
body.appendChild(results);

//Keeps track of the game and runs game related functions
function game(){
        computerPlay();
        playerPlay();
        getWinner();
        adjustScore();

    switch (true){
        case (playerScore == 5):
            console.log("You won!...restarting");
            playerScore = 0;
            computerScore = 0;
            break;
        case (computerScore == 5):
            console.log("The computer won!...restarting");
            playerScore = 0;
            computerScore = 0;
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
        const computerChoiceOutput = document.createElement('p');
        computerChoiceOutput.textContent = `The computer chose ${computerSelection}`;
        results.appendChild(computerChoiceOutput);
}

// Normalises casing of player selection
let playerSelection;
function playerPlay(){

    playerSelection = playerSelection.toLowerCase();
    switch (playerSelection){
        case "rock":
        case "paper":
        case "scissors":
            const playerChoiceOutput = document.createElement('p');
            playerChoiceOutput.textContent = `You chose ${playerSelection}`;
            results.appendChild(playerChoiceOutput);
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
            const drawOutput = document.createElement('p');
            drawOutput.textContent = "The round was a draw!";
            results.appendChild(drawOutput);
            winner = "none";
            break;   
        case (computerSelection == "rock" && playerSelection == "scissors"):
        case (computerSelection == "paper" && playerSelection == "rock"):
        case (computerSelection == "scissors" && playerSelection == "paper"):
            const loseOutput = document.createElement('p');
            loseOutput.textContent = "The computer won this round!";
            results.appendChild(loseOutput);
            winner = "computer";
            break;
        case (computerSelection == "rock" && playerSelection == "paper"):
        case (computerSelection == "paper" && playerSelection == "scissors"):
        case (computerSelection == "scissors" && playerSelection == "rock"):
            const winOutput = document.createElement('p');
            winOutput.textContent = "You won this round!";
            results.appendChild(winOutput);
            winner = "player";
            break;
    }
    return winner;
}


//Tracks player and computer scores
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
    console.log(`Your score is ${playerScore} and the computer's score is ${computerScore}`);
}