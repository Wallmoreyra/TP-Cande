document.addEventListener('DOMContentLoaded', function(){
    const slideContainer = document.getElementById('carousel');
    const slides = slideContainer.querySelectorAll('img');
    let currentSlideIndex = 0;

    function showSlide(index){
        slides.forEach((slide, slideIndex) =>{
            if (slideIndex === index) {
                slide.style.display = 'block';
            } else{
                slide.style.display = 'none';
            }
        });
    }

    function nextSlide(){
        currentSlideIndex++;
        if (currentSlideIndex >= slides.length){
            currentSlideIndex = 0;
        }
        showSlide(currentSlideIndex);
    }

    const intervalTime = 3000;
    setInterval(nextSlide, intervalTime);
    showSlide(currentSlideIndex);

});

document.addEventListener('DOMContentLoaded', function(){
    const slideContainer = document.getElementById('nuevoCarrusel');
    const slides = slideContainer.querySelectorAll('img');
    let currentSlideIndex = 0;

    function showSlide(index){
        slides.forEach((slide, slideIndex) =>{
            if (slideIndex === index) {
                slide.style.display = 'block';
            } else{
                slide.style.display = 'none';
            }
        });
    }

    function nextSlide(){
        currentSlideIndex++;
        if (currentSlideIndex >= slides.length){
            currentSlideIndex = 0;
        }
        showSlide(currentSlideIndex);
    }

    function prevSlide(){
        currentSlideIndex--;
        if (currentSlideIndex < 0){
            currentSlideIndex = slides.length - 1;
        }
        showSlide(currentSlideIndex);
    }


    const intervalTime = 3000;
    setInterval(nextSlide, intervalTime);
    showSlide(currentSlideIndex);

    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

});