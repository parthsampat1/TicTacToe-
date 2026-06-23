let userscore = 0;
let compscore = 0;
const userScoredata = document.querySelector("#user-score");

const compScoredata = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");

let res = document.querySelector("#msg");

const drawGame = () => {
  console.log("Game draw");
  res.innerText = "Game draw";
  res.style.backgroundColor = "rgb(75, 18, 75)";
};

const winnerdisplay = (userWin) => {
  if (userWin) {
    userscore++;
    userScoredata.innerText = userscore;
    console.log("you won");
    res.innerText = "You won";
    res.style.backgroundColor = "green";
  } else {
    compscore++;
    compScoredata.innerText = compscore;
    console.log("Computer won");
    res.innerText = "Computer won";
    res.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("User Choice : ", userChoice);
  const comp = CompChoice();
  console.log("Computer Choice : ", comp);

  if (userChoice === comp) {
    drawGame();
  } else {
    let userWin = true;

    if (userChoice == "rock") {
      userWin = comp === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = comp === "rock" ? true : false;
    } else {
      userWin = comp === "rock" ? false : true;
    }
    winnerdisplay(userWin);
  }
};

const CompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const idx = Math.floor(Math.random() * 3);
  return options[idx];
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked",userChoice);
    playGame(userChoice);
  });
});
