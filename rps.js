var playerWinsArray = [];
var playerTotal = playerWinsArray.length;

var playerScoreText = document.getElementById("playerScore");
var computerScoreText = document.getElementById("cpuScore");
console.log(playerScoreText);

// display number of player wins
function generateScore(competitor, score) {
  console.log(competitor);
  if (competitor === "player") {
    playerScoreText.innerText = score.length;
  } else if (competitor === "cpu") {
    computerScoreText.innerText = score.length;
  
}

function playGame(playerMove) {
  //plays the game, with the variable playerMove, dependent on which button the player selects (see event listeners below)
  //   console.log("Player uses " + playerMove);
  var cpuMove = generateComputerMove();

  function generateComputerMove() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) return "rock";
    else if (randomNumber > 0.33 && randomNumber < 0.66) return "paper";
    return "scissors";
  }

  //console.log("Cpu uses " + cpuMove);
  showCPUMove(cpuMove);

  // If PM = CM then its a draw and the rest of the JS is ignored. if it is not a draw then continue to read.
  if (playerMove === cpuMove) {
    showMessage("it's a draw");
  } else if (playerMove == "rock") {
    if (cpuMove == "paper") {
      showMessage("cpu wins");
      generateScore("cpu", playerWinsArray);
    } else {
      playerWinsArray.push("player wins");
      generateScore("player", playerWinsArray);
      showMessage("player wins");
    }
  } else if (playerMove == "paper") {
    if (cpuMove == "rock") {
      playerWinsArray.push("player wins");
      generateScore("player", playerWinsArray);
      showMessage("player wins");
    } else {
      showMessage("cpu wins");
      generateScore("cpu", cpuWinsArray);
    }
  } else if (playerMove == "scissors") {
    if (cpuMove == "rock") {
      showMessage("cpu wins");
      generateScore("cpu", playerWinsArray);
    } else {
      playerWinsArray.push("player wins");
      generateScore("player", playerWinsArray);
      showMessage("player wins");
    }
  }

  //function showPlayerScore (playerTotal) {
  //playerScore=document.getElementById("playerTotal")
  //playerScore.innerText = playerTotal
  //}
}

// add EventListeners so that player can select their move (r,p or s) by clicking a button
// create r, p, s buttons in html

var rockBtn = document.getElementById("rock");
rockBtn.addEventListener("click", playRock);
//get the rock button from html, add click event with the function playRock (below)
// if rock button is clicked, the playRock function below will initiate playGame, but will only run the commands related to "rock"
function playRock() {
  playGame("rock"); // run playGame ie the whole function above, but only the ("rock") parts
}

var paperBtn = document
  .getElementById("paper")
  .addEventListener("click", playPaper);
function playPaper() {
  playGame("paper");
}

var scissorsBtn = document
  .getElementById("scissors")
  .addEventListener("click", playScissors);
function playScissors() {
  playGame("scissors");
}

//show the result on the webpage rather than only in the console and take out the alert boxes
//1. create a function called showMessage, to show the result
//2. use .innerText to change the result according to who has won
//3. link result variable to the actual result in playGame

function showMessage(result) {
  var resultElement = document.getElementById("results");
  resultElement.innerText = result;
}

//not needed: function result(){console.log (result)

//show the computer move on the webpage rather than only in the console and take out the alert boxes

function showCPUMove(cpuMove) {
  var moveElement = document.getElementById("computerMove");
  moveElement.innerText = cpuMove;
}

//hwk: take in a username
//display username at top of page
//display by scores

userNameBtn = document.getElementById("username-btn");
userNameBtn.addEventListener("click", addUser);

function addUser() {
  console.log("I'm working");
  var username = document.getElementById("username").value;
  document.getElementById("username-display").innerHTML = username;
}

//save input field
//extract value
//display value - done

//document.getElementById("myspan").innerHTML="newtext"
