// const container = document.querySelector(".container");
// const scoreContainer = document.querySelector(".scores-container");
const btnContainer = document.querySelector(".btn-container");
const playerGameScore = document.querySelector(".player-score");
const computerGameScore = document.querySelector(".computer-score");
const message = document.querySelector(".message");
const choices = ["rock", "paper", "scissors"];
let playerCount = 0;
let computerCount = 0;

// let playerSelection;
const getComputerChoice = () => {
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
};

const playRound = (playerSelection, computerSelection) => {
	if (playerSelection == computerSelection) return "draw";

	if (playerSelection == "rock" && computerSelection == "paper")
		return "computer";

	if (playerSelection == "paper" && computerSelection == "scissors")
		return "computer";

	if (playerSelection == "scissors" && computerSelection == "rock")
		return "computer";

	return "player";
};

const displayRoundWinner = (winner, playerSelection, computerSelection) => {
	let text;
	if (winner === "player") {
		text = `You Win! ${playerSelection} beats ${computerSelection}`;
	} else if (winner === "computer") {
		text = `You Lose! ${computerSelection} beats ${playerSelection}`;
	} else text = "Nobody wins! It's a draw";
	message.innerText = text;
};

const displayGameWinner = (playerScore, computerScore) => {
	if (playerScore === 5 || computerScore === 5) {
		if (playerScore > computerScore)
			message.textContent = "You have won the best of 5!";
		else message.textContent = "Computer has won the best of 5!";
		playerGameScore.textContent = 0;
		computerGameScore.textContent = 0;
		playerCount = 0;
		computerCount = 0;
		setTimeout(() => {
			message.textContent = "Best of 5, Let's Play";
		}, 3000);
	}
};

const game = (playerSelection) => {
	const computerSelection = getComputerChoice();
	const result = playRound(playerSelection, computerSelection);
	if (result === "player") {
		displayRoundWinner(result, playerSelection, computerSelection);
		playerCount++;
		playerGameScore.textContent = playerCount;
	} else if (result === "computer") {
		displayRoundWinner(result, playerSelection, computerSelection);
		computerCount++;
		computerGameScore.textContent = computerCount;
	} else displayRoundWinner(result, playerSelection, computerSelection);

	displayGameWinner(playerCount, computerCount);
};

const playGame = () => {
	message.textContent = "Best of 5, Let's Play";
	btnContainer.addEventListener("click", (e) => {
		const playerChoice = e.target.id.toLowerCase();
		game(playerChoice);
	});
};

playGame();
