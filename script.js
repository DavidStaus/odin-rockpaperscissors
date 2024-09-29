console.log("Hello, world!");


// randomly choose 'Rock', 'Paper' or 'Scissors'.

// randomly roll an integer between 1 and 3
// output and return rock if integer = 1
// output and return paper if integer = 2
// output and return scissors if integer 3

function getComputerChoice() {
    switch(Math.ceil(Math.random() * 3)) {
        case 1:
            console.log('Computer chose: Rock');
            return 'Rock';
            break;
        case 2:
            console.log('Computer chose: Paper');
            return 'Paper';
            break;
        case 3:
            console.log('Computer chose: Scissors');
            return 'Scissors';
            break;
    }
}

// prompt user for Rock Paper or Scissors
// print answer to console

function getHumanChoice() {
    let choice = prompt('Rock, Paper, or Scissors?').charAt(0).toUpperCase;
    if (choice === 'Rock' || choice ===  'Paper' || choice === 'Scissors') {
        console.log(choice);
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


// init variable humanChoice to be equal getHumanChoice
// init variable computerChoice to be equal getHumanChoice
// call a funtion called playRound that takes parameters humanChoice and computerChoice
// if humanChoice === computerChoice return 'tie'
// if humanChoice === "Rock" && computerChoice === 'Scissors' return 'win''
// if humanChoice === "Paper" && computerChoice === 'Rock' return 'win'
// if humanChoice === "Scissors" && computerChoice === 'Paper' return 'win'
// else return 'loss'
// return computer/human winner

function playRound(humanChoice, computerChoice) {
    if (computerChoice === humanChoice) {
        console.log(`Its a tie! You both picked ${humanChoice}!`);
        return 'Tie';
   } else if ((humanChoice === 'Rock' && computerChoice === 'Scissors') || (humanChoice === 'Paper' && computerChoice === 'Rock') || (humanChoice === 'Scissors' && computerChoice === 'Paper')) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!}`);
        return 'humanWin!';
   } else {
        console.log(`You lost! ${computerChoice} beats ${humanChoice}!`);
        return 'computerWin';
   }
}


getComputerChoice();

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);

