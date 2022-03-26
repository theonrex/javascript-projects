const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "Web Developer",
        img: "https://res.colud",
        text:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus soluta aperiam eaque corporis quo accusantium vitae, neque quae quam aliquam adipisci! Odit, quasi ut soluta architecto error a incidunt?",
        
    },
    {
        id: 2,
        name: "rr smith",
        job: "Web Developer",
        img: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
        text:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus soluta aperiam eaque corporis quo accusantium vitae, neque quae quam aliquam adipisci! Odit, quasi ut soluta architecto error a incidunt?",
        
    },
    {
        id: 3,
        name: "rex smith",
        job: "Web Developer",
        img: "https://res.colud",
        text:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus soluta aperiam eaque corporis quo accusantium vitae, neque quae quam aliquam adipisci! Odit, quasi ut soluta architecto error a incidunt?",
        
    },
    {
        id: 4,
        name: "abigail smith",
        job: "Web Developer",
        img: "https://res.colud",
        text:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus soluta aperiam eaque corporis quo accusantium vitae, neque quae quam aliquam adipisci! Odit, quasi ut soluta architecto error a incidunt?",
      
    },
    

];

// slect items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextbtn = document.querySelector(".next-btn");
const random = document.querySelector(".random-btn");

// set starting item
let currentItem = 1;

//load initial item

window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem);
   });

// window.addEventListener('DOMContentLoaded', function () {
//  const item = reviews[currentItem];
//  img.src = item.img;
//  author.textContent = item.name;
//  job.textContent = item.job;
//  job.textContent = item.text;
// });

//show person based on item

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
 author.textContent = item.name;
 job.textContent = item.job;
 job.textContent = item.text;
}

// show next person

nextbtn.addEventListener('click', function()
{
currentItem++;
if (currentItem > reviews.length -1){
    currentItem = 0;
}
showPerson(currentItem);
});
// show next person

prevBtn.addEventListener('click', function(){
currentItem--;

if (currentItem < 0) {
    currentItem = reviews.length -1}
showPerson(currentItem);
});




// nextbtn.addEventListener('click', function() {
//     currentItem++;
//     showPerson(currentItem);
// });

// prevBtn.addEventListener('click', function() {
//     currentItem--;
//     showPerson(currentItem);
// });