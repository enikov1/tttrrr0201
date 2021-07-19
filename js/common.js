'user strict';

const popup_message = document.querySelector('#popup_message');
const button_popup_close = document.querySelector('.js_close_popup');
const button_active_popup_message = document.querySelectorAll('._js_popup_message');

button_popup_close.addEventListener('click', () => popup_message.classList.remove('active'));

button_active_popup_message.forEach(e=> {
	e.addEventListener('click', (event) => {
		event.preventDefault();

		popup_message.classList.add('active');
	});
});

const swiper = new Swiper('#result_slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
	clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: document.querySelector('.results .slider-button-next'),
    prevEl: document.querySelector('.results .slider-button-prev')
  }
});