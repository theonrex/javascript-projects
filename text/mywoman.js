function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }



//   var button = document.getElementById('change-phrase'),
//     content = document.getElementById('phrase');

// button.onclick = function() {
//     content.innerHTML = 'Your new phrase';
// };

var button = document.getElementById('change-phrase'),
content = document.getElementById('phrase');

button.onclick = function displayText(a, b) {
    let myWoman = ("Adebola");
    if (a !== b) {
        content.innerHTML = myWoman;

    } else content.innerHTML = 'Opps!';


};