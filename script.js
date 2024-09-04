const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const display = document.getElementById("display");
const result = display.querySelector("p");

let player = null;
let computer = null;

function computerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playerChoice(choice) {
  player = choice;
  console.log("Player choice:", player);
  computer = computerChoice();
  console.log("Computer choice:", computer);
  game();
}

rock.addEventListener("click", () => playerChoice("rock"));
paper.addEventListener("click", () => playerChoice("paper"));
scissors.addEventListener("click", () => playerChoice("scissors"));

function game() {
  if (player === computer) {
    return (result.textContent = "Draw!");
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return (result.textContent = `You Win! Computer picked: ${computer}`);
  } else {
    return (result.textContent = `You Lose! Computer picked: ${computer}`);
  }
}

// JavaScript to display the range of years in the copyright notice
const copyrightYearElement = document.getElementById("copyright-year");
const startYear = 2024;
const currentYear = new Date().getFullYear();
const yearRange =
  startYear === currentYear ? currentYear : `${startYear} - ${currentYear}`;
copyrightYearElement.textContent = yearRange;
