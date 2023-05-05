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
