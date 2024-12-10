let userScore = 0;
let compScore = 0;
let compChoice;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `Congratulations You Win!! Your "${userChoice}" beats "${compChoice}":)`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost :( ! "${compChoice}" beats your "${userChoice}". Better Luck next Time!!`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //paper - l ,scissor - w
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //scissor - l, rock -  w
      userWin = compChoice === "scissors" ? false : true;
    } else if (userChoice === "scissors") {
      //rock - l, paper - w
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

const drawGame = () => {
  msg.style.backgroundColor = "#e0bc00";
  msg.innerText = `Game Was a Draw. Computer also generated "${compChoice}". Play Again`;
};
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
