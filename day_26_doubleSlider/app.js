const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
//gets amount of divs in slide right 
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

//index 0 based so need to - one to get last index
//then *100 because it takes up 100vh
//this puts images in correct order
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));


const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    if (direction === 'up') {
        activeSlideIndex++;
        //resets images
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0;
        }
    } else if(direction === 'down') {
        activeSlideIndex--;
        //resets images
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;
        }
    }
    //moves images and text
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}
