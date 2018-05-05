var colors;

var numberOfColors = 6;

var pickedColor;

var squares = document.querySelectorAll(".square");

var colorDisplay = document.getElementById("colorDisplay");

var messageDisplay = document.getElementById("message");

var headingDisplay = document.getElementById("headings");

var playAgainButton = document.getElementById("playAgain");

playAgainButton.addEventListener("click", playAgain);

function pickStartingColors(numberOfColors) {
  var colorsArray = [];

  for (var i = 0; i < numberOfColors; i++) {
    var randomNum1 = randomNumber(256);
    var randomNum2 = randomNumber(256);
    var randomNum3 = randomNumber(256);

    colorsArray.push(
      "rgb(" + randomNum1 + ", " + randomNum2 + ", " + randomNum3 + ")"
    );
  }

  return colorsArray;
}

function checkAnswer() {
  var colorTemp = this.style.backgroundColor;

  console.log(colorTemp + "  " + pickedColor);

  if (colorTemp === pickedColor) {
    messageDisplay.textContent = "Correct!";
    changeColor(pickedColor);
    playAgainButton.textContent = "Play Again?";
  } else {
    this.style.backgroundColor = "#232323";
    messageDisplay.textContent = "Try Again!";
  }
}

function changeColor(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }

  headingDisplay.style.backgroundColor = color;
}

function randomNumber(end) {
  var randomNum = Math.floor(Math.random() * end);

  return randomNum;
}

function initializeSquares() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", checkAnswer);
  }
}

function playAgain() {
  headingDisplay.style.backgroundColor = "rgb(15, 15, 15)";
  playAgainButton.textContent = "New Colors";
  messageDisplay.textContent = "";

  colors = pickStartingColors(numberOfColors);

  pickedColor = colors[randomNumber(squares.length - 1)];

  colorDisplay.textContent = pickedColor;

  initializeSquares();
}

playAgain();
