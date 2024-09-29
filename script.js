// randomly choose 'rock', 'paper' or 'scissors'.
// randomly roll an integer between 1 and 3
// output and return rock if integer = 1
// output and return paper if integer = 2
// output and return scissors if integer 3

function getComputerChoice() {
    switch(Math.ceil(Math.random() * 3)) {
        case 1:
            console.log('Computer chose: Rock');
            return 'rock';
            break;
        case 2:
            console.log('Computer chose: Paper');
            return 'paper';
            break;
        case 3:
            console.log('Computer chose: Scissors');
            return 'scissors';
            break;
    }
}

// prompt user for rock paper or scissors
// print answer to console

function getHumanChoice() {
    let choice = prompt('Rock, Paper, or Scissors?').toLowerCase();
    if (choice === 'rock' || choice ===  'paper' || choice === 'scissors') {
        console.log('You picked: ' + choice.charAt(0).toUpperCase() + choice.slice(1));
        return choice;
    } else {
        console.log('Not a valid answer!');
        alert('Not a valid answer!');
        getHumanChoice();
    }
}
 
// init 2 variables called humanScore and computerScore
// init them to 0

let humanScore = 0;
let computerScore = 0;

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

// init variable humanChoice to be equal getHumanChoice
// init variable computerChoice to be equal getHumanChoice
// call a funtion called playRound that takes parameters humanChoice and computerChoice
// if humanChoice === computerChoice return 'tie'
// if humanChoice === "rock" && computerChoice === 'scissors' return 'win''
// if humanChoice === "paper" && computerChoice === 'rock' return 'win'
// if humanChoice === "scissors" && computerChoice === 'paper' return 'win'
// else return 'loss'
// return computer/human winner

function playRound(humanChoice, computerChoice) {
    if (computerChoice === humanChoice) {
        console.log(`Its a tie! You both picked ${humanChoice}!`);
   } else if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!}`);
        humanScore++;
   } else {
        console.log(`You lost! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
   }
}

// function playGame calls the function playRound
// then if neither humanScore or computerScore is 5
// call new computerChoice
// call new humanChoice
// call playGame

function playGame() {
    playRound(humanChoice, computerChoice);
    if (humanScore < 5 && computerScore < 5) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playGame();
    } else if (humanScore === 5) {
        console.log('You won the entire game! Good job.');
        alert('You won the entire game! Good job.');
    } else {
        console.log('You lost to a bad javascript. Humiliating.');
        alert('You lost to a bad javascript. Humiliating.');
    }
}

playGame();
