
AOS.init({
duration:1000,
once:true
});

document.querySelectorAll('[data-slider]').forEach((button) => {
button.addEventListener('click', () => {
const sliderName = button.dataset.slider;
const direction = button.dataset.direction;
const track = document.querySelector(`[data-slider-track="${sliderName}"]`);

if(!track){
return;
}

const firstSlide = track.querySelector('.featured-slide');
const gap = 22;
const slideWidth = firstSlide ? firstSlide.getBoundingClientRect().width + gap : 320;
const offset = direction === 'next' ? slideWidth : -slideWidth;

track.scrollBy({
left:offset,
behavior:'smooth'
});
});
});
