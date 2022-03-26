//nav bar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  // navbar


  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F" ];

const btn = document.getElementById("btn");
const color = document.querySelector(".bck");

btn.addEventListener("click", function () {
    let hexColor = "#";
    for (let i = 0; i < 6; i++ ) {
        hexColor +=hex[getRandomNumber()];
    }
    color.textContent =hexColor;
document.body.style.backgroundColor = hexColor; 
});

function getRandomNumber() {
        return Math.floor(Math.random() * hex.length);
     };


   