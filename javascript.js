console.log("Hello Zakiya!");
console.log ("Lets do this!");

let userSelection = prompt("Let's play! Enter rock, paper or scissors!");
let userChoice = userSelection.toLowerCase(); //without parentheses it doesnt take any value
//console.log(userChoice) trying to see if the userChoice propmt works
if (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors") {
    console.log(userChoice);
} else {
    console.log("Please enter valid choice");
};
   
let computerSelection = function (getComputerChoice) { //named function
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber = 0) {
        console.log('rock');
    } else if (randomNumber = 1) {
        console.log('paper');
    } else if (randomNumber = 2) {
        console.log('scissors');
    }
};
//need to figure out how to use returns instead of console.logs 
console.log(computerSelection(3))