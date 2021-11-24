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
// validate typed option is rock, paper, or scissors,
// regulate Casing
// return player selection

// determineWinner()
// rock > scissors
// paper > rock
// scissors > paper
// check each selection
// return the Winner

// console.log the winner
// declare scores
// winner score increase

// Game()
// UNTIL score == 5
// computerPlay
// playerPlay
// determineWinner
// declare winner variable (global)
// set winner variable


// console log winner