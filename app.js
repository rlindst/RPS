let userScore = 0;
let computerScore 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice() {
	const choices = ['r', 's', 'p'];
	const randomNUmber = Math.floor(Math.random() * 3);
	return choices [randomNUmber];
}

functon convertToWord(letter){
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	return "Scissors";
}


function win(userChoice, computerChoice) {
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = userChoice + "beats" + computerChoice + ". You Win!";
}

function lose() {
	
}

function draw() {
	console.log("DRAW");
}


function game(userChoice) {
  const computerChoice = getComputerChoice
  switch(userChoice + computerChoice) {
  	case "pr";
  	case "sp";
  	case "rs";
  		win();
  		break;
  	case "rp";
  	case "ps";
  	case "sr";
  		lose();
  		break;
  	case "rr"
  	case "pp";
  	case "ss";
  		draw();

  }
}


function main() {
	rock_div.addEventListener('click', function() {
	    game("r");


	paper_div.addEventListener('click', function() {
		game("p");
	})

	scissors_div.addEventListener('click', function() {
		game("s");
	})
}

main();
