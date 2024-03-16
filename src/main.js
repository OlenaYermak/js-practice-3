// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

const swiperContainer = document.querySelector(".swiper-container");
const prevBtn = document.querySelector(".arrow-btn-left")
const nextBtn = document.querySelector(".arrow-btn-right")



const swiper = new Swiper(swiperContainer, {
    
   
    touch: false,
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
    if (event.key === 'ArrowLeft' ) {
        swiper.slidePrev();
    } else if (event.key === 'ArrowRight') {
        swiper.slideNext();
    }
});
///=======ТАБ=======////
// Додаємо слухачі для перемикання слайдів за допомогою клавіші Tab
document.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') {
        // Перевіряємо, чи впереду є слайди, якщо так, перемикаємо до наступного
        if (swiper.isEnd) {
            swiper.slideTo(0);
        } else {
            swiper.slideNext();
        }
    }
});

//==========mouse=======
swiperContainer.addEventListener('wheel', (event) => {
    if (event.deltaY < 0) {
        swiper.slidePrev();
    } else {
        swiper.slideNext();
    }
});







// mySwiper.on('slideChange', function () {
//   if (mySwiper.isBeginning) {
//     prevBtn.classList.add('disabled');
//   } else {
//     prevBtn.classList.remove('disabled');
//   }

//   if (mySwiper.isEnd) {
//     document.querySelector('.swiper-button-next').classList.add('disabled');
//   } else {
//     document.querySelector('.swiper-button-next').classList.remove('disabled');
//   }
// });

//====================

  
// //   // Додайте обробники подій для кнопок, щоб вони були відключені в кінці списку
//   swiper.on('reachEnd', function () {
//     // Відключіть кнопку next
//     prevBtn.classList.add('swiper-button-disabled');
//   });
  
//   swiper.on('reachBeginning', function () {
//     // Відключіть кнопку prev
//     swiper.navigation.prevEl.classList.add('swiper-button-disabled');
//   });



///====================

