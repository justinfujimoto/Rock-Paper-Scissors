//user choice

var userChoice = prompt("Do you choose rock, paper or scissors?");

//computer choice

//computerChoice is set to a random number between 0 - 1 
var computerChoice = Math.random(); 

//print computerChoice
console.log(computerChoice);

//if the number is equal to 0.33 or less, computerChoice = rock
if (computerChoice <= 0.33) {
    computerChoice = "rock";
}

//else if the number is 0.34 AND is equal to or less than 0.66, computerChoice = scissors
else if (computerChoice  = 0.34 && computerChoice <= 0.66) {
 computerChoice = "scissors";   
}

//else if above 0.67, computerChoice = rock
else {
    computerChoice = "rock";
}