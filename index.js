let colors = generateRandomColors(6);
//select all the square, see the console for better understand
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("displayColor");
colorDisplay.textContent = pickedColor;
let messageDisplay = document.querySelector("#message");
let heading = document.querySelector("#heading");

for (let i = 0; i < squares.length; i++) {
  //loop through all the squares for giving them different colors
  squares[i].style.backgroundColor = colors[i];

  //add click listender to squares
  squares[i].addEventListener("click", function() {
    //grab color of cliked square
    let clickedColor = this.style.backgroundColor;

    //compare color to picked
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct";
      changeColors(clickedColor);
      heading.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
