// const colors = ["red", "blue", "yellow", "green"];

// document.getElementById("btn").addEventListener("click", function()

// {
//     document.body.style.backgroundColor = "yellow";
// })





// document.getElementById("btn").addEventListener("click", function(){
//    document.getElementsByClassName(".color")
//    const x = 2;
//    const y = 2;
//     if (x == y){
//         document.body.style.backgroundColor = "blue";
//             document.getElementsByClassName(".color").textContent;

//     }
//     else {
//         document.body.style.backgroundColor = "red";

//     }
//})







const colors = ["red", "purple", "blue", "green", "yellow",];

const btn =document.getElementById("btn");
const color =document.querySelector(".color");


btn.addEventListener("click", function() {

    const randomNumber = getRandomNumber();

document.body.style.backgroundColor = colors[randomNumber];
color.textContent = colors[randomNumber];

})

function getRandomNumber() {
    return [Math.floor(Math.random() * colors.length)];
}










// const colors = ["red", "blue", "yellow", "green"];


// document.getElementById("btn").addEventListener("click", function()
// {
//     const randomNumber = getRandomNumber();
//     document.body.style.backgroundColor = colors[2];
// })





// const colors = ["green", "red", "blue", "pink"]

// const btn =document.getElementById("btn");
// const color = document.querySelector(".color");

// btn.addEventListener('click', function() {
//     //get random number btw 0 -3
//     const randomNumber = getRandomNumber();
//     console.log(randomNumber);

//     document.body.style.backgroundColor = colors[randomNumber];
//     color.textContent = colors[randomNumber];
// });


// function getRandomNumber() {
//     return Math.floor(Math.random() * colors.length)
// }
  

// const colors = ["red", "blue", "yellow", "green"];

// const btn=document.getElementById("btn");
//  const color = document.querySelector(".color");

// btn.addEventListener("click", function()
// {
//     const randomNumber = getRandomNumber();

//     document.body.style.backgroundColor = colors[randomNumber];
//       color.textContent = colors[randomNumber];

// })


// function getRandomNumber() {
//     return Math.floor(Math.random() * colors.length)
// }


