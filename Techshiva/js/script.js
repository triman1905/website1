{/* <script id='pixel-script-poptin' src='https://cdn.popt.in/pixel.js?id=8260c3759bc69' async='true'></script>  */}
let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  loginForm.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
  navbar.classList.remove('active');
}

window.onscroll = () =>{
  navbar.classList.remove('active');
  loginForm.classList.remove('active');
}

var swiper = new Swiper(".review-slider",{
  spaceBetween: 20,
  centeredSlides: true,
  grabCursor: true,
  autoplay:{
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
