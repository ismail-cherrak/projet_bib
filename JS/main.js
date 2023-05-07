const slider = document.querySelector('.scroll');
const sliderWrapper = slider.querySelector('.sld');
const slides = slider.querySelectorAll('.book');
const prevBtn = slider.querySelector('.scroll_left');
const nextBtn = slider.querySelector('.scroll_right');
const slideWidth = slides[0].offsetWidth;
const totalSlides = slides.length;
let currentIndex = 0;
prevBtn.style.display="none";

sliderWrapper.style.transition = 'transform 0.3s ease';

nextBtn.addEventListener('click', () => {
    currentIndex++;
    prevBtn.style.display="flex";

  sliderWrapper.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
});

prevBtn.addEventListener('click', () => {

    currentIndex--;
if(currentIndex==0){
    prevBtn.style.display="none";
}
  
  sliderWrapper.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
});



//book state 

let etat=0;//availabel=0;notavailable=1;waiting=2;ready to take=3;taken=4

function a(n){
    switch(n){
        case 0:
            document.getElementById("state").innerHTML="Available";
            document.getElementById("state").style.color="green";
            document.getElementById("state").style.textShadow="0px 0px 4px green";
            document.getElementById("ifelse").style.cursor="pointer";
            document.getElementById("ifelse").innerHTML="order";
            document.getElementById("ifelse").style.color="aqua";
            document.getElementById("ifelse").onclick=function(){
               document.querySelector("body").style.opacity=0.8;
               document.getElementById("sur").classList.remove("hide");
               document.getElementById("outone").onclick=function(){
                etat=2;
                a(2);
                document.getElementById("sur").classList.add("hide");
                document.querySelector("body").style.opacity=1;
               }
               document.getElementById("outtwo").onclick=function(){
                document.getElementById("sur").classList.add("hide");
                document.querySelector("body").style.opacity=1;
               }
            }
            break;
        case 1:
                document.getElementById("state").innerHTML="Not Available";
                document.getElementById("state").style.color="red";
                document.getElementById("ifelse").style.opacity="0.5";
        break;
        case 2:
            document.getElementById("state").innerHTML="Waiting";
            document.getElementById("state").style.color="yellow";
            document.getElementById("ifelse").innerHTML="Cancel";
            document.getElementById("ifelse").style.color="red";
            document.getElementById("ifelse").style.cursor="pointer";
            document.getElementById("ifelse").onclick=function(){
                document.querySelector("body").style.opacity=0.8;
                document.getElementById("sur").classList.remove("hide");
                document.getElementById("outone").onclick=function(){
                 etat=0;
                 a(0);
                 document.getElementById("sur").classList.add("hide");
                 document.querySelector("body").style.opacity=1;
                }
                document.getElementById("outtwo").onclick=function(){
                 document.getElementById("sur").classList.add("hide");
                 document.querySelector("body").style.opacity=1;
                }
             }
             break;
        case 3:
            document.getElementById("state").innerHTML="Ready to take";
            document.getElementById("state").style.color="blue";
            document.getElementById("ifelse").innerHTML="Cancel";
            document.getElementById("ifelse").style.color="red";
            document.getElementById("ifelse").style.cursor="pointer";
            document.getElementById("ifelse").onclick=function(){
                document.querySelector("body").style.opacity=0.8;
                document.getElementById("sur").classList.remove("hide");
                document.getElementById("outone").onclick=function(){
                 etat=0;
                 a(0);
                 document.getElementById("sur").classList.add("hide");
                 document.querySelector("body").style.opacity=1;
                }
                document.getElementById("outtwo").onclick=function(){
                 document.getElementById("sur").classList.add("hide");
                 document.querySelector("body").style.opacity=1;
                }
             }
             break;
        case 4:
            //time left
             document.getElementById("yesno").style.opacity="0";

            
}
}


a(etat); 


//rating 
let booksRating =0.0;



function putRating(r){
    
    switch(Math.round(r,round,rating)){
        case 0 :
            round.style.marginLeft="00px";
            rating.innerHTML=Math.round(r); 
        break;
        case 1 :
            round.style.marginLeft="12px";
            rating.innerHTML=Math.round(r);
        break;
        case 2 :
            round.style.marginLeft="24px";
            rating.innerHTML=Math.round(r);
        break;
        case 3 :
            round.style.marginLeft="36px";
            rating.innerHTML=Math.round(r);
        break;
        case 4 :
            round.style.marginLeft="48px";
            rating.innerHTML=Math.round(r);
        break;
        case 5 :
            round.style.marginLeft="60px";
            rating.innerHTML=Math.round(r);
        break;
        
    }
    
}
//putRating(4,document.getElementById("round"),document.getElementById("the_average_rating"));
alert("hi");