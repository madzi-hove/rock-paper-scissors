const choices = ["rock", "paper", "scissors"];

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
	if (winner === "player") {
		console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
	} else if (winner === "computer") {
		console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
	} else console.log("Nobody wins! It's a draw");
};

const displayGameWinner = (playerCount, computerCount) => {
	if (playerCount > computerCount) console.log("Player Wins!");
	else console.log("Computer Wins!");
};

const game = () => {
	let playerCount = 0;
	let computerCount = 0;
	for (let i = 0; i < 5; i++) {
		const computerSelection = getComputerChoice();
		const playerSelection = prompt(
			"Rock, Paper or Scissors?: "
		).toLocaleLowerCase();

		const result = playRound(playerSelection, computerSelection);
		if (result === "player") {
			displayRoundWinner(result, playerSelection, computerSelection);
			playerCount++;
		} else if (result === "computer") {
			displayRoundWinner(result, playerSelection, computerSelection);
			computerCount++;
		} else displayRoundWinner(result, playerSelection, computerSelection);
	}
	displayGameWinner(playerCount, computerCount);
};

game();
