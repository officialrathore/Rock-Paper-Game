let choices = document.querySelectorAll(".choice");
let msg = document.getElementById("msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

let userScore = 0 ;
let compScore = 0 ;

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

function genCompChoice(){
let options = ["rock","paper","scissors"];
let randIdx = Math.floor(Math.random()* 3);
return options[randIdx];
}

function drawGame() {
    console.log("game was draw!");
    msg.innerText = "Game was draw! play again...";
    msg.style.backgroundColor = "black";
}

function showWinner(userWin,userChoice,compChoice) {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win!");
        msg.innerText = `you win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lost!");
        msg.innerText = `you lost! ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor = "red";

    }
}

function playGame(userChoice) {
    console.log("user choice =",userChoice);
 let compChoice = genCompChoice();
    console.log("comp choice =",compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }else{
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
            
        }else{
            userWin = compChoice === "rock" ? false : true;

        }
        showWinner(userWin,userChoice,compChoice);
    }
}
