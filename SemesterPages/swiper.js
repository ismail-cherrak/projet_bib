const sliderone = document.querySelector('.scrollone');
const sliderWrapperone = sliderone.querySelector('.sldone');
const slidesone = sliderone.querySelectorAll('.bookone');
const prevBtnone = sliderone.querySelector('.scroll_leftone');
const nextBtnone = sliderone.querySelector('.scroll_rightone');
const slideWidthone = slidesone[0].offsetWidth;
const totalSlidesone = slidesone.length;
let currentIndexone = 0;
prevBtnone.style.display="none";

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
prevBtntwo.style.display="none";

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
prevBtnthree.style.display="none";

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
prevBtnfour.style.display="none";

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