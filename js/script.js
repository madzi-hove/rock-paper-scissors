const choices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
};

const computerSelection = getComputerChoice();
const playerSelection = prompt(
	"Rock, Paper or Scissors?: "
).toLocaleLowerCase();

const playRound = (playerSelection, computerSelection) => {
	if (playerSelection == computerSelection) return "No winner's! It's a draw";

	if (playerSelection == "rock" && computerSelection == "paper")
		return `You Lose! ${computerSelection} beats ${playerSelection}`;

	if (playerSelection == "paper" && computerSelection == "scissors")
		return `You Lose! ${computerSelection} beats ${playerSelection}`;

	if (playerSelection == "scissors" && computerSelection == "rock")
		return `You Lose! ${computerSelection} beats ${playerSelection}`;

	return `You Win! ${playerSelection} beats ${computerSelection}`;
};

console.log(playRound(playerSelection, computerSelection));
