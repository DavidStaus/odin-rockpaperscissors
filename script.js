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
    let choice = prompt('Rock, Paper, or Scissors?');
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


// take humanChoice and computerChoice and versus them
// rock beat scissors
// scissors beat paper
// paper beats rock
// output to console name of winner and why
// winning choice score is incredmentet by 1

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

function playRound(humanChoice, computerChoice) {

}

// Running code //
playRound()