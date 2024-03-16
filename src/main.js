import Swiper from 'swiper';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';

const swiperContainer = document.querySelector(".swiper-container");
const prevBtn = document.querySelector(".arrow-btn-left")
const nextBtn = document.querySelector(".arrow-btn-right")

// init Swiper:
// const swiper = new Swiper(swiperContainer, {
//   // configure Swiper to use only Navigation module
//   modules: [Navigation],
//   navigation: {
//     prevEl: '.arrow-btn-left', // Селектор кнопки "назад"
//     nextEl: '.arrow-btn-right', // Селектор кнопки "вперед"
//   },
//   on: {
//     reachEnd: function () {
//       nextBtn.disabled = true;
//     },
//     reachBeginning: function () {
//       prevBtn.disabled = true;
//     },
//     slideChange: function () {
//       // Перевірка на досягнення кінця
//       if (this.isEnd) {
//         nextBtn.disabled = true;
//       } else {
//         nextBtn.disabled = false;
//       }
      
//       // Перевірка на досягнення початку
//       if (this.isBeginning) {
//         prevBtn.disabled = true;
//       } else {
//         prevBtn.disabled = false;
//       }
//     }
//   }
// });
///==========today16.03========/////
// const swiper = new Swiper(swiperContainer, {
//     // configure Swiper to use only Navigation module
//     modules: [Navigation],
//     navigation: {
//       prevEl: prevBtn, // Використовуємо змінну prevBtn
//       nextEl: nextBtn, // Використовуємо змінну nextBtn
//     },
//     on: {
//       reachEnd: function () {
//         nextBtn.disabled = true;
//       },
//       reachBeginning: function () {
//         prevBtn.disabled = true;
//       },
//       slideChange: function () {
//         // Перевірка на досягнення кінця
//         if (this.isEnd) {
//           nextBtn.disabled = true;
//         } else {
//           nextBtn.disabled = false;
//         }
        
//         // Перевірка на досягнення початку
//         if (this.isBeginning) {
//           prevBtn.disabled = true;
//         } else {
//           prevBtn.disabled = false;
//         }
//       }
//     }
//   });



  ///=====================
  const swiper = new Swiper(swiperContainer, {
    // configure Swiper to use only Navigation module
    modules: [Navigation, Mousewheel, Keyboard],
    navigation: {
      prevEl: prevBtn, // Використовуємо змінну prevBtn
      nextEl: nextBtn, // Використовуємо змінну nextBtn
    },
    mousewheel:{
        invert: true,
    }, // Включаємо прокрутку колесиком миші
    keyboard: {
        enabled: true, // Включаємо навігацію за допомогою клавіші Tab
        onlyInViewport: false, // Дозволяємо тільки клавішу Tab, якщо слайдер в області видимості
      }, 
    on: {
      reachEnd: function () {
        nextBtn.classList.add('disabled');
      },
      reachBeginning: function () {
        prevBtn.classList.add('disabled');
      },
      slideChange: function () {
        // Перевірка на досягнення кінця
        if (this.isEnd) {
          nextBtn.classList.add('disabled');
        } else {
          nextBtn.classList.remove('disabled');
        }
        
        // Перевірка на досягнення початку
        if (this.isBeginning) {
          prevBtn.classList.add('disabled');
        } else {
          prevBtn.classList.remove('disabled');
        }
      }
    }
  });

 

////=========================
// const swiper = new Swiper(swiperContainer, {
//     // configure Swiper to use only Navigation module
//     modules: [Navigation],
//     navigation: {
//       prevEl: prevBtn, // Використовуємо змінну prevBtn
//       nextEl: nextBtn, // Використовуємо змінну nextBtn
//     },
//     watchOverflow: true, // Автоматично дізейблити кнопки, якщо кількість слайдів менша або рівна кількості, яка може бути показана в контейнері
//   });
///===========end today========/////

// const swiperContainer = document.querySelector(".swiper-container");
// const prevBtn = document.querySelector(".arrow-btn-left")
// const nextBtn = document.querySelector(".arrow-btn-right")



// const swiper = new Swiper(swiperContainer, {
    
   
//     touch: false,
// });
// console.log(swiper);

//=======button====////

// prevBtn.addEventListener("click", function() {
//         swiper.slidePrev(); 
// });

// nextBtn.addEventListener("click", function() {
    
//     swiper.slideNext();
    
// });


//========arrows key=======///

// document.addEventListener('keydown', function(event) {
//     if (event.key === 'ArrowLeft' ) {
//         swiper.slidePrev();
//     } else if (event.key === 'ArrowRight') {
//         swiper.slideNext();
//     }
// });

////========

// document.addEventListener('keydown', function(event) {
//     if (event.key === 'ArrowLeft' && !swiper.isBeginning) {
//         swiper.slidePrev();
//     } else if (event.key === 'ArrowRight' && !swiper.isEnd) {
//         swiper.slideNext();
//     }
// });


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
// swiperContainer.addEventListener('wheel', (event) => {
//     if (event.deltaY < 0) {
//         swiper.slidePrev();
//     } else {
//         swiper.slideNext();
//     }
// });







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

