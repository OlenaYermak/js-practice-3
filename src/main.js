// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

const swiperContainer = document.querySelector(".swiper-container");
const prevBtn = document.querySelector(".arrow-btn-left")
const nextBtn = document.querySelector(".arrow-btn-right")



const swiper = new Swiper(swiperContainer, {
    
     keyboard: {
        enabled: true, // Дозволяємо взаємодію зі слайдером за допомогою клавіатури
    },
    mousewheel: {
        enabled: true, // Дозволяємо взаємодію зі слайдером за допомогою миші
    },
    // touch: true,
});
console.log(swiper);

//=======button====////

prevBtn.addEventListener("click", function() {
        swiper.slidePrev(); 
});

nextBtn.addEventListener("click", function() {
    
    swiper.slideNext(); 
});
//========arrows key=======///

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft' || event.key ==="Tab") {
        swiper.slidePrev();
    } else if (event.key === 'ArrowRight') {
        swiper.slideNext();
    }
});
///=======ТАБ=======////
// document.querySelectorAll('.swiper-slide').forEach(slide => {
//   slide.addEventListener('focus', () => {
//     const currentIndex = swiper.activeIndex;
//     const nextIndex = currentIndex + 1;

//     if (document.activeElement === slide) {
//       if (nextIndex < swiper.slides.length) {
//         swiper.slideTo(nextIndex);
//       }
//     }
//   });
// });







// mySwiper.on('slideChange', function () {
//   if (mySwiper.isBeginning) {
//     document.querySelector('.swiper-button-prev').classList.add('disabled');
//   } else {
//     document.querySelector('.swiper-button-prev').classList.remove('disabled');
//   }

//   if (mySwiper.isEnd) {
//     document.querySelector('.swiper-button-next').classList.add('disabled');
//   } else {
//     document.querySelector('.swiper-button-next').classList.remove('disabled');
//   }
// });

//====================
// document.addEventListener('DOMContentLoaded', function () {
//   new Swiper('.swiper-container', {
//     slidesPerView: 'auto',
//     spaceBetween: 30,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });
// });

////=================//////

// document.addEventListener('DOMContentLoaded', function () {
//   const swiper = new Swiper('.swiper-container', {
//     direction: 'horizontal',
//     loop: false,
//     keyboard: {
//       enabled: true,
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//       },
//     
//   });
  
//   // Додайте обробники подій для кнопок, щоб вони були відключені в кінці списку
//   swiper.on('reachEnd', function () {
//     // Відключіть кнопку next
//     swiper.navigation.nextEl.classList.add('swiper-button-disabled');
//   });
  
//   swiper.on('reachBeginning', function () {
//     // Відключіть кнопку prev
//     swiper.navigation.prevEl.classList.add('swiper-button-disabled');
//   });
// });


///====================

