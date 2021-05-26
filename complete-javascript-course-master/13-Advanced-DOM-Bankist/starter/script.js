'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //or

  section1.scrollIntoView({ behavior: 'smooth' });
});

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

tabsContainer.addEventListener('click', function (e) {
  const click = e.target.closest('.operations__tab');
  if (!click) return;
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  click.classList.add('operations__tab--active');
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));
  document
    .querySelector(`.operations__content--${click.dataset.tab}`)
    .classList.add(`operations__content--active`);
});

const handleHover = function (opacity, e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(function (el) {
      if (el !== link) {
        el.style.opacity = opacity;
      }
    });
    logo.style.opacity = opacity;
  }
};

nav.addEventListener('mouseover', function (e) {
  handleHover(0.5, e);
});

nav.addEventListener('mouseout', function (e) {
  handleHover(1, e);
});

//sticky nav
/*
const initialCoords = section1.getBoundingClientRect();

window.addEventListener('scroll', function () {
  if (window.scrollY >= initialCoords.top) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});
*/

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

//reveal sections
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (entry.isIntersecting) entry.target.classList.remove('section--hidden');
  else return;
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (sec) {
  sectionObserver.observe(sec);
  sec.classList.add('section--hidden');
});

//lazy loading
const imgTargets = document.querySelectorAll('img[data-src]');
const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', function () {
      entry.target.classList.remove('lazy-img');
    });
  } else {
    return;
  }
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(function (im) {
  imgObserver.observe(im);
});

//slider
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const slider = document.querySelector('.slider');
const dotContainer = document.querySelector('.dots');
let count = 0;
const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<btn class="dots__dot" data-slide="${i}")></btn`
    );
  });
};
createDots();
const dots = document.querySelectorAll('.dots__dot');
const activeDots = function (slide) {
  dots.forEach(dot => dot.classList.remove('dots__dot--active'));
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};
const shiftSlides = function (curr) {
  slides.forEach(function (s, index) {
    s.style.transform = `translateX(${100 * (index - curr)}%)`;
    if (index === curr) {
      activeDots(index);
    }
  });
};
shiftSlides(0);

dots.forEach(dot =>
  dot.addEventListener('click', function (e) {
    if (e.target.dataset.slide > count) {
      while (e.target.dataset.slide > count) {
        count++;
      }
    } else {
      while (e.target.dataset.slide < count) {
        count--;
      }
    }
    shiftSlides(count);
  })
);
const shiftRight = function () {
  count++;
  if (count !== slides.length) shiftSlides(count);
  else {
    shiftSlides(0);
    count = 0;
  }
};
const shiftLeft = function () {
  count--;
  if (count > -1) {
    shiftSlides(count);
  } else {
    shiftSlides(slides.length - 1);
    count = slides.length - 1;
  }
};
btnRight.addEventListener('click', function () {
  shiftLeft();
});
btnLeft.addEventListener('click', function () {
  shiftLeft();
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') {
    shiftLeft();
  } else if (e.key === 'ArrowRight') {
    shiftRight();
  }
});

const h1 = document.querySelector('h1');

// h1.addEventListener('mouseenter', function (e) {
//   alert('add eventlistener: Great! you are reading the heading');
// });

const randomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomColor = function () {
  return `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(
    0,
    255
  )})`;
};

/*document.querySelector('.nav__link').addEventListener('click', function (e) {
  console.log('link');
  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log('LINK');
  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav').addEventListener('click', function (e) {
  console.log('LINK');
  this.style.backgroundColor = randomColor();
});
*/
