let colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
];
//select all the square, see the console for better understand
let squares = document.querySelectorAll(".square");
let pickedColor = colors[3];
let colorDisplay = document.getElementById("displayColor");
colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  //loop through all the squares for giving them different colors
  squares[i].style.backgroundColor = colors[i];
  //add click listender to squares
  squares[i].addEventListener("click", function() {
    //grab color of cliked square
    let clickedColor = this.style.backgroundColor;
    //compare color to picked
    if (clickedColor === pickedColor) {
      alert("Correct");
    } else {
      alert("Wrong!");
    }
  });
}
