const choices = document.querySelectorAll(".choice");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let choiceDiv = document.querySelector(".choice-div");
let userChosse = document.querySelector("#user-choice");
let compChosse = document.querySelector("#comp-choice");

let userScoreCount = 0;
let compScoreCount = 0;

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        const compChoice = getCompChoice();
        const result = getResult(userChoice, compChoice);

        userChosse.textContent = userChoice;
        compChosse.textContent = compChoice;

        showWinner(result);
    })
});

function showWinner(result) {
    if (result === "win") {
        userScoreCount++;
        userScore.textContent = userScoreCount;
        userScore.style.color = "green";
        msg.innerText = "You win.."
        msg.style.color = "green";
    } else if (result === "lose") {
        compScoreCount++;
        compScore.textContent = compScoreCount
        compScore.style.color = "red";
        msg.innerText = "You lose.."
        msg.style.color = "red";
    } else {
        msg.innerText = " It\'s draw.."
        msg.style.color = "#2568fb";
    }
}

const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function getResult(userChoice, compChoice) {
    if (userChoice === compChoice) {
        return "draw";
    } else if ((userChoice === "rock" && compChoice === "scissors") || (userChoice === "paper" && compChoice === "rock") || (userChoice === "scissors" && compChoice === "paper")) {
        return "win";
    } else {
        return "lose";
    }
}