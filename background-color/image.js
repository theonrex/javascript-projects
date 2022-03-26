


// function myFunction() {
//     document.getElementById("myDIV").style.backgroundImage = "url(https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg)";
//  }

// const images = ['01.png'];


// var images = new Array();

// images[0] = new Image();
// images[0].src = '01.png';

// images[1] = new Image();
// images[1].src = '02.png';


// console.log(images);
 
// const btn = document.getElementById('imagebtn');
// const div = document.getElementById('myDIV')

// btn.addEventListener('click', function()
// {

//     const random = 0;
//     document.body.style.backgroundColor = images[random];

    // div.style.backgroundImage = images[0];;
    // var images = ['01.jpg','02.jpg','03.jpg','04.jpg'];

  

    // // var images = [ 'https://i2.wp.com/digitalcora.com/wp-content/uploads/2020/01/20200416_232359_0000.png?w=560&ssl=1', 'https://i0.wp.com/digitalcora.com/wp-content/uploads/2021/04/podcast-.jpg?resize=300%2C300&ssl=1','http://lorempixel.com/400/200/sports/3','http://lorempixel.com/400/200/sports/4' ];
    // var index = 0;

    // function buildImage() {
    //   var img = document.createElement('img')
    //   img.src = images[index];
    //   document.getElementById('content').appendChild(img);
    // }

    // function changeImage(){
    //   var img = document.getElementById('content').getElementsByTagName('img')[0]
    //   index++;
    //   index = index % 4; // This is for if this is the last image then goto first image I have 4 images so I've given 4 change accordingly 
    //   img.src = images[index];
    // }

    // var className = ['01.jpg','02.jpg','03.jpg','04.jpg'];

    var className = ['imageOne','imageTwo','imageThree','imageFour'], 
    index = 0;

function updateClassName() {
  this.className = className[++index % className.length];
}

document.getElementById('body').addEventListener("click", updateClassName);