const burger = document.querySelector('.burger');
const cover = document.querySelector('.cover');
const menu = document.querySelector('.nav__list').cloneNode(1);
const body = document.body;

// open and close menu-burger
burger.addEventListener('click', windowBurger);

function windowBurger(e) {
  cover.classList.toggle('open');
  burger.classList.toggle('active');
  body.classList.toggle('noscroll');
  pastMenu();
}

// past link navigation
function pastMenu() {
  cover.appendChild(menu);
}

// close menu-burger after click link menu
if (burger) {
  menu.querySelectorAll('.nav__link').forEach((link) => {
    link.addEventListener('click', () => {
      cover.classList.remove('open');
      burger.classList.remove('active');
      body.classList.remove('noscroll');
    });
  });
}
