const btnPrev = document.querySelector('.js-btn-prev');
const btnNext = document.querySelector('.js-btn-next');

const testimonialsItem = document.querySelectorAll('.testimonials-item');
let currentIndex = 0

function swapTestimonials(navigation) {    
    let indexNew = currentIndex
    if (navigation == 'previous') {
        index = currentIndex - 1
        if (index <= 0) {
            index = testimonialsItem.length - 1;
        }
    }else if (navigation == 'next') {
        index = currentIndex + 1
        if (index >= testimonialsItem.length) {
            index = 0
        }
    }
 
    testimonialsItem[currentIndex].classList.remove('activate');
    testimonialsItem[indexNew].classList.add('activate');
}

btnPrev.addEventListener('click', () => swapTestimonials('previous'))
btnNext.addEventListener('click', () => swapTestimonials('next'))