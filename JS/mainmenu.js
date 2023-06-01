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






