let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#com-score");

const compChoices = () => {
  const options = ["rock", "paper", "scissor"];
  const Idx = Math.floor(Math.random() * 3);

  return options[Idx];
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const showWinner = (userWin,user,comp) => {
  if (userWin) {
    console.log("you Win");
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText=`You Win! Your ${user} beats ${comp}`;
    msg.style.backgroundColor="green";
} else {
    console.log("Goa Mara");
    compScore++;
    compScorePara.innerText=compScore;
    msg.innerText=`you lose. ${comp} beats your ${user}`
    msg.style.backgroundColor="red";
}
};


const playGame = (user) => {
    console.log("user choice = ", user);
    
    //generete computer choice
    const comp = compChoices();
    console.log("comp choice = ", comp);
    
    if (user === comp) {
        //draw game
        drawGame();
    } else {
        let youWin = true;
        if (user === "rock") {
            youWin = comp === "paper" ? false : true;
        } else if (user === "paper") {
            youWin = comp === "scissor" ? false : true;
        } else {
            youWin = comp === "rock" ? false : true;
        }
        showWinner(youWin,user,comp);
    }
};

const drawGame = () => {
    console.log("Drawwwwwwwwwwwwww");
    msg.innerText="Draw. Play again"
    msg.style.backgroundColor="#391d1d";
};