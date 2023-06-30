//Check If There's Local Storage

// const { response } = require("express");

let mainColor = localStorage.getItem("color-option");

if(mainColor !== null){

document.documentElement.style.setProperty('--main-color',localStorage.getItem("color-option"));

}


// Toggle Spin Class on Icon
document.querySelector(".toggle-settings .fac").onclick = function () {
    // Toggle Class Fa-spin 
    this.classList.toggle("fa-spin")

    // Toggle Class open
    document.querySelector(".setting-box").classList.toggle("open");
    // Remove Active 
    e.target.parentElement.querySelectorAll(".active").forEach(element =>{
        element.classList.remoove("active");

    });
    e.target.classList.add("active");


}

//Switch Color 
const colors = document.querySelectorAll(".color-list li");
colors.forEach(li =>{
    li.addEventListener("click" ,(e)=>{
        console.log(e.target.dataset.color);
        //setColor 
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
        localStorage.setItem("color-option" , e.target.dataset.color);
    })
})

//  Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

//Get Array of Images 

let imgsArray =  ["01.jpg","02.jpg","03.jpg","04.jpg","06.jpg","07.jpg"];

setInterval(()=>{
    // Get Random Number
    let randomNumber = Math.floor(Math.random() * imgsArray.length);

// Change Background  Image Url

landingPage.style.backgroundImage = 'url("images/Home-page/' + imgsArray[randomNumber] + '")';

},20000);

//Close Popup 

document.addEventListener('click', function (e){

    if(e.target.className === 'close-button'){

        //Remove Current Popup

        e.target.parentNode.remoove();

        document.querySelector(".popup-overlay").remove();
    }
});



// Select All Bullets 

const allBullets = document.querySelectorAll(".bullets .bullet");

allBullets.forEach(bullet =>{
    bullet.addEventListener("click" , (e)=>{
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:'smooth'
        });
    });
});


const allLinks = document.querySelectorAll(".list-unstyled .link");
console.log(allLinks);

allLinks.forEach(link =>{
    link.addEventListener("click" , (e)=>{
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:'smooth'
        })
    })
})



//Select All Links

// const allLinks = document.querySelectorAll(".links .linker");

// allLinks.forEach(link =>{
//     link.addEventListener("click" , (e)=>{
//         e.preventDefault();
//         document.querySelector(e.target.dataset.section).scrollIntoView({
//             behavior:'smooth'
//         });
//     });
// });



// Toggle menu 

// let toogleBtn = document.querySelector(".toggle-menu");
// let theLinks = document.querySelector(".links");


// toogleBtn.onclick = function (){

//     this.classList.toggle("menu-active");

//     theLinks.classList.toggle("open");

// };

//Click Any way 

// document.addEventListener("click" , (e)=>{

//     if (e.target !== toggleBtn) {
            
//     }

// });

// Satrt Gallery 

// var  i = 0 ;
// let  images = ["/Img/images gallery/01.jpg" ,"/Img/images gallery/02.jpg" ,
//  "/Img/images gallery/03.jpg" , "/Img/images gallery/04.jpg" , "/Img/images gallery/05.png" ];

//  function mySlide(param) 
//  {

// if (param === 'next') {
//   i++;
//   if (i === images.length) { 
//       i = images.length - 1;
//       let myOpacity =  document.querySelector('.gallery .right');
//       console.log(myOpacity);
// }
// }
// else {
//   i--;
//   if (i < 0)  { i = 0; }
// }

// document.getElementById('slide').src = images[i];

   
//  }


 