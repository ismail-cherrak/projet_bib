//SWIPER:

const sliderone = document.querySelector('.scrollone');
const sliderWrapperone = sliderone.querySelector('.sldone');
const slidesone = sliderone.querySelectorAll('.bookone');
const prevBtnone = sliderone.querySelector('.scroll_leftone');
const nextBtnone = sliderone.querySelector('.scroll_rightone');
const slideWidthone = slidesone[0].offsetWidth;
const totalSlidesone = slidesone.length;
let currentIndexone = 0;
prevBtnone.style.display="flex";
nextBtnone.style.display="flex";

sliderWrapperone.style.transition = 'transform 0.3s ease';

nextBtnone.addEventListener('click', () => {
    currentIndexone++;
    prevBtnone.style.display="flex";

  sliderWrapperone.style.transform = `translateX(${-slideWidthone * currentIndexone}px)`;
});

prevBtnone.addEventListener('click', () => {

    currentIndexone--;
if(currentIndexone==0){
    prevBtnone.style.display="none";
}
  
  sliderWrapperone.style.transform = `translateX(${-slideWidthone * currentIndexone}px)`;
});






const slidertwo = document.querySelector('.scrolltwo');
const sliderWrappertwo = slidertwo.querySelector('.sldtwo');
const slidestwo = slidertwo.querySelectorAll('.booktwo');
const prevBtntwo = slidertwo.querySelector('.scroll_lefttwo');
const nextBtntwo = slidertwo.querySelector('.scroll_righttwo');
const slideWidthtwo = slidestwo[0].offsetWidth;
const totalSlidestwo = slidestwo.length;
let currentIndextwo = 0;
prevBtntwo.style.display="flex";
nextBtntwo.style.display="flex";

sliderWrappertwo.style.transition = 'transform 0.3s ease';

nextBtntwo.addEventListener('click', () => {
    currentIndextwo++;
    prevBtntwo.style.display="flex";

  sliderWrappertwo.style.transform = `translateX(${-slideWidthtwo * currentIndextwo}px)`;
});

prevBtntwo.addEventListener('click', () => {

    currentIndextwo--;
if(currentIndextwo==0){
    prevBtntwo.style.display="none";
}
  
  sliderWrappertwo.style.transform = `translateX(${-slideWidthtwo * currentIndextwo}px)`;
});
















const sliderthree = document.querySelector('.scrollthree');
const sliderWrapperthree = sliderthree.querySelector('.sldthree');
const slidesthree = sliderthree.querySelectorAll('.bookthree');
const prevBtnthree = sliderthree.querySelector('.scroll_leftthree');
const nextBtnthree = sliderthree.querySelector('.scroll_rightthree');
const slideWidththree = slidesthree[0].offsetWidth;
const totalSlidesthree = slidesthree.length;
let currentIndexthree = 0;
prevBtnthree.style.display="flex";
nextBtnthree.style.display="flex";

sliderWrapperthree.style.transition = 'transform 0.3s ease';

nextBtnthree.addEventListener('click', () => {
    currentIndexthree++;
    prevBtnthree.style.display="flex";

  sliderWrapperthree.style.transform = `translateX(${-slideWidththree * currentIndexthree}px)`;
});

prevBtnthree.addEventListener('click', () => {

    currentIndexthree--;
if(currentIndexthree==0){
    prevBtnthree.style.display="none";
}
  
  sliderWrapperthree.style.transform = `translateX(${-slideWidththree * currentIndexthree}px)`;
});










const sliderfour = document.querySelector('.scrollfour');
const sliderWrapperfour = sliderfour.querySelector('.sldfour');
const slidesfour = sliderfour.querySelectorAll('.bookfour');
const prevBtnfour = sliderfour.querySelector('.scroll_leftfour');
const nextBtnfour = sliderfour.querySelector('.scroll_rightfour');
const slideWidthfour = slidesfour[0].offsetWidth;
const totalSlidesfour = slidesfour.length;
let currentIndexfour = 0;
prevBtnfour.style.display="flex";
nextBtnfour.style.display="flex";

sliderWrapperfour.style.transition = 'transform 0.3s ease';

nextBtnfour.addEventListener('click', () => {
    currentIndexfour++;
    prevBtnfour.style.display="flex";

  sliderWrapperfour.style.transform = `translateX(${-slideWidthfour * currentIndexfour}px)`;
});

prevBtnfour.addEventListener('click', () => {

    currentIndexfour--;
if(currentIndexfour==0){
    prevBtnfour.style.display="none";
}
  
  sliderWrapperfour.style.transform = `translateX(${-slideWidthfour * currentIndexfour}px)`;
});




//book state 

let etatone=0;//availabel=0;notavailable=1;waiting=2;ready to take=3;taken=4

function a(n){
    switch(n){
        case 0:
            document.querySelector(".stateone").innerHTML="Available";
            document.querySelector(".stateone").style.color="green";
            document.querySelector(".stateone").style.textShadow="0px 0px 4px green";
            document.querySelector(".ifelseone").style.cursor="pointer";
            document.querySelector(".ifelseone").innerHTML="Order";
            document.querySelector(".ifelseone").style.color="aqua";
          /*  document.querySelector(".ifelseone").onclick=function(){
               document.querySelector("body").style.opacity=0.8;
               document.getElementById("surone").classList.remove("hide");
               document.querySelector(".outoneone").onclick=function(){
                etatone=2;
                a(2);
                document.getElementById("surone").classList.add("hide");
                document.querySelector("body").style.opacity=1;
               }
               document.querySelector(".outtwoone").onclick=function(){
                document.getElementById("surone").classList.add("hide");
                document.querySelector("body").style.opacity=1;
               }
            }*/
            break;
        case 1:
                document.querySelector(".stateone").innerHTML="Not Available";
                document.querySelector(".stateone").style.color="red";
                document.querySelector(".ifelseone").style.opacity="0.5";
        break;
        case 2:
            document.querySelector(".stateone").innerHTML="Waiting";
            document.querySelector(".stateone").style.color="yellow";
            document.querySelector(".ifelseone").innerHTML="Cancel";
            document.querySelector(".ifelseone").style.color="red";
            document.querySelector(".ifelseone").style.cursor="pointer";
           /* document.querySelector(".ifelseone").onclick=function(){
                document.querySelector("body").style.opacity=0.8;
                document.getElementById("surone").classList.remove("hide");
                document.querySelector(".outoneone").onclick=function(){
                 etatone=0;
                 a(0);
                 document.getElementById("surone").classList.add("hide");
                 document.querySelector("body").style.opacity=1;
                }
                document.querySelector(".outtwoone").onclick=function(){
                 document.getElementById("surone").classList.add("hide");
                 document.querySelector("body").style.opacity=1;
                }
             }*/
             break;
        case 3:
            document.querySelector(".stateone").innerHTML="Ready to take";
            document.querySelector(".stateone").style.color="blue";
            document.querySelector(".ifelseone").innerHTML="Cancel";
            document.querySelector(".ifelseone").style.color="red";
            document.querySelector(".ifelseone").style.cursor="pointer";
           /* document.querySelector(".ifelseone").onclick=function(){
                document.querySelector("body").style.opacity=0.8;
                document.getElementById("surone").classList.remove("hide");
                document.querySelector(".outoneone").onclick=function(){
                 etatone=0;
                 a(0);
                 document.getElementById("surone").classList.add("hide");
                 document.querySelector("body").style.opacity=1;
                }
                document.querySelector(".outtwoone").onclick=function(){
                 document.getElementById("surone").classList.add("hide");
                 document.querySelector("body").style.opacity=1;
                }
             }*/
             break;
        case 4:
            //time left
             document.querySelector(".yesnoone").style.opacity="0";
    }
}


a(etatone);

//rating 
let booksRatingone =4;



function putRatingone(r,roundone){
    
    switch(Math.round(r)){
        case 0 :
            roundone.style.marginLeft="00px"; 
        break;
        case 1 :
            roundone.style.marginLeft="12px";
        break;
        case 2 :
            roundone.style.marginLeft="24px";
        break;
        case 3 :
            roundone.style.marginLeft="400px";
        break;
        case 4 :
            roundone.style.marginLeft="48px";
        break;
        case 5 :
            roundone.style.marginLeft="60px";
        break;
        
    }
    
}
putRatingone(document.getElementsByClassName("the_average_ratingone")[0],document.getElementsByClassName("roundone")[0]);

