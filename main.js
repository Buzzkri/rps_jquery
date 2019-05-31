var options = ["Rock", "Paper", "Scissors"];
var userChoice;
var computerChoice;
var win = document.getElementById("win").innerHTML = "You Win";
// var tied = document.getElementById("win").innerHTML = "You Tied";
// var lose = document.getElementById("win").innerHTML = "You Lose";

// This is for user selection
$("#rock").on("click", function() {
  userChoice = "Rock";
  console.log(userChoice)
  compare(userChoice);
});

$("#paper").on("click", function() {
  userChoice = "Paper";
  console.log(userChoice)
  compare(userChoice);
});

$("#scissors").on("click", function() {
  userChoice = "Scissors";
  console.log(userChoice)
  compare(userChoice);
});

function compare(userChoice) {
  computerChoice = options[Math.floor(Math.random() * options.length)];
  console.log(computerChoice)
if  (userChoice == computerChoice) { 
  return "You tied"; // This needs to be linked to an .innerHTML to output this string.
  } else if
    ((userChoice == "rock" && computerChoice == "scissors") ||
    (userChoice == "paper" && computerChoice == "rock") ||
    (userChoice == "scissors" && computerChoice == "paper"))
    {   
  return "You Win"
  } else {
    return "You Lose"
  }
};
