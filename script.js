const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const display = document.getElementById("display");
const result = display.querySelector("p");
const score = document.getElementById("score");
const playerScore = document.querySelector("#player-score span");
const computerScore = document.querySelector("#computer-score span");

let player = null;
let computer = null;
let isGameOver = false;

function computerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playerChoice(choice) {
  if (isGameOver) return;

  player = choice;
  console.log("Player choice:", player);
  computer = computerChoice();
  console.log("Computer choice:", computer);
  game();
  scores();
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

function scores() {
  if (result.textContent === "Draw!") {
    playerScore.textContent = Number(playerScore.textContent) + 1;
    computerScore.textContent = Number(computerScore.textContent) + 1;
  } else if (result.textContent === `You Win! Computer picked: ${computer}`) {
    playerScore.textContent = Number(playerScore.textContent) + 1;
  } else {
    computerScore.textContent = Number(computerScore.textContent) + 1;
  }

  endGame();
}

function endGame() {
  if (
    Number(playerScore.textContent) === 5 ||
    Number(computerScore.textContent) === 5
  ) {
    isGameOver = true;

    if (
      Number(playerScore.textContent) === 5 &&
      Number(computerScore.textContent) === 5
    ) {
      result.textContent = "Draw! New Game Starts in 5 Seconds";
    } else if (Number(playerScore.textContent) === 5) {
      result.textContent = "Player Won! New Game Starts in 5 Seconds";
    } else {
      result.textContent = "Computer Won! New Game Starts in 5 Seconds";
    }
    disableButtons();
    setTimeout(() => {
      playerScore.textContent = "0";
      computerScore.textContent = "0";
      result.textContent = "Play Again";
      isGameOver = false;
      enableButtons();
    }, 3000);
  }
}

function disableButtons() {
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
}

function enableButtons() {
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
}

// JavaScript to display the range of years in the copyright notice
const copyrightYearElement = document.getElementById("copyright-year");
const startYear = 2024;
const currentYear = new Date().getFullYear();
const yearRange =
  startYear === currentYear ? currentYear : `${startYear} - ${currentYear}`;
copyrightYearElement.textContent = yearRange;
