const btnPrev = document.querySelectorAll('.js-btn-prev');
const btnNext = document.querySelectorAll('.js-btn-next');

const testimonialsItem = document.querySelectorAll('.testimonials-item');
let currentIndex = 0

function swapTestimonials(navigation) {    
    let indexNew = currentIndex
    if (navigation == 'previous') {
        indexNew = currentIndex - 1
        if (indexNew < 0) {
            indexNew = testimonialsItem.length - 1;
        }
    }else if (navigation == 'next') {
        indexNew = currentIndex + 1
        if (indexNew >= testimonialsItem.length) {
            indexNew = 0;
        }
    }

    testimonialsItem[currentIndex].classList.remove('activate');
    testimonialsItem[currentIndex].classList.add('disabled');

    testimonialsItem[indexNew].classList.remove('disabled');
    testimonialsItem[indexNew].classList.add('activate');

    currentIndex = indexNew;
}

btnPrev.forEach((e) => e.addEventListener('click', () => swapTestimonials('previous')));
btnNext.forEach((e) => e.addEventListener('click', () => swapTestimonials('previous')));
