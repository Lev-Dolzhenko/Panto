const infoBtns = document.querySelectorAll('.info-dot');
const selectChoices = document.querySelectorAll('.header__select');


// show/hide choice

for (let infoBtn of infoBtns) {
  infoBtn.addEventListener('click', select)
}

function select(event) {
  event.stopPropagation()
  this.parentNode.querySelector('.header__select').classList.toggle('none');
}

// hide all chocies

document.addEventListener('click', hideSelect)

function hideSelect() {
  for (let selectChoice of selectChoices) {
    selectChoice.classList.add('none')
  }
}

// hide choices doesn't work for choices

for (let selectChoice of selectChoices) {
  selectChoice.addEventListener('click', (e) => { e.stopPropagation() })
}

//swiper

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 42,
  // loop: true,
  // freeMode: true,

  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1230: {
      slidesPerView: 4,
      spaceBetween: 50
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '#nextButton',
    prevEl: '#prevButton',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// tabs

const tabsBtns = document.querySelectorAll('[data-tab]');
const tabsProducts = document.querySelectorAll('[data-tab-value]');

for (let tabsBtn of tabsBtns) {

  tabsBtn.addEventListener('click', function() {
    tabsBtns.forEach((elem) => elem.classList.remove('tab__controls__button--active'));
    this.classList.add('tab__controls__button--active');

    for (let tabsProduct of tabsProducts) {
      if (this.dataset.tab == 'all') {
        tabsProduct.classList.remove('none');
      } else {
        if (tabsProduct.dataset.tabValue === this.dataset.tab) {
          tabsProduct.classList.remove('none')
        } else {
          tabsProduct.classList.add('none');
        }
      }
    }
    swiper.update();
  })
}

//nav mobile

const closeNavBtn = document.getElementById('closeNav');
const openNavBtn = document.getElementById('openNav');
const mobileNav = document.getElementById('nav');

openNavBtn.addEventListener('click', function() {
  mobileNav.classList.remove('none');
})

closeNavBtn.addEventListener('click', function() {
  mobileNav.classList.add('none');
})