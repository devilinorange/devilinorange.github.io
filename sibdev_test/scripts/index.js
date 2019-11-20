const sidebar = document.getElementsByClassName('sidebar')[0];
const sidebarButton = document.getElementsByClassName('sidebar__button')[0];
const contentSide = document.getElementsByClassName('content-side')[0];
const stickyForm = document.getElementsByClassName('form-sticky')[0];
const links = document.getElementsByClassName('sidebar__menu__item');
let mode = "desktop";
const stickyY = stickyForm.offsetTop;

const getSize = () => {
  const screenSize = window.screen.width;
  if (screenSize <= 430 && mode != "mobile") {
    mode = "mobile";
    // УДАЛЯЕМ ВОЗМОЖНЫЕ КЛАССЫ ДЛЯ iPAD
    sidebar.classList.remove('sidebar_ipad_closed');
    sidebarButton.classList.remove('sidebar__button_ipad_closed');
    contentSide.classList.remove('content-side_ipad');
    sidebar.classList.remove('sidebar_ipad_opened');
    sidebarButton.classList.remove('sidebar__button_ipad_opened');

    sidebar.classList.add('sidebar_mobile_closed');
    sidebarButton.classList.add('sidebar__button_mobile_closed');
    contentSide.classList.add('content-side_mobile');
  } else if (screenSize <= 768 && screenSize > 430 && mode != "pad") {
    mode = "pad";
    // УДАЛЯЕМ ВОЗМОЖНЫЕ КЛАССЫ ДЛЯ mobile
    sidebar.classList.remove('sidebar_mobile_closed');
    sidebarButton.classList.remove('sidebar__button_mobile_closed');
    contentSide.classList.remove('content-side_mobile');
    sidebar.classList.remove('sidebar_mobile_opened');
    sidebarButton.classList.remove('sidebar__button_mobile_opened');

    sidebar.classList.add('sidebar_ipad_closed');
    sidebarButton.classList.add('sidebar__button_ipad_closed');
    contentSide.classList.add('content-side_ipad');
  } else if(screenSize >768 && mode != "desktop") {
    mode = "desktop";
    // УДАЛЯЕМ КЛАССЫ IPAD и MOBILE
    sidebar.classList.remove('sidebar_ipad_closed');
    sidebarButton.classList.remove('sidebar__button_ipad_closed');
    contentSide.classList.remove('content-side_ipad');
    sidebar.classList.remove('sidebar_mobile_closed');
    sidebarButton.classList.remove('sidebar__button_mobile_closed');
    contentSide.classList.remove('content-side_mobile');
  }
}

// "ПРИВЯЗЫВАЕМ" ФОРМУ ПОИСКА ПРИ СКРОЛЛЕ
const scrollCheck = () => {
  if (window.pageYOffset > stickyY) {
    stickyForm.classList.add('form-sticky_active');
    stickyForm.style.width = `${document.getElementsByClassName('content-side')[0].offsetWidth}px`;
  } else {
    stickyForm.classList.remove('form-sticky_active');
    stickyForm.style.width = "100%";
  }
}

// ВЕШАЕМ НЕОБХОДИМЫЙ КЛАСС НА САЙДБАР ПРИ НАЖАТИИ
const sidebarToggle = () => {
  if (sidebar.classList.contains('sidebar_ipad_closed')) {

    sidebar.classList.remove('sidebar_ipad_closed');
    sidebar.classList.add('sidebar_ipad_opened');

    sidebarButton.classList.remove('sidebar__button_ipad_closed');
    sidebarButton.classList.add('sidebar__button_ipad_opened');
  } else if(sidebar.classList.contains('sidebar_ipad_opened')) {

    sidebar.classList.remove('sidebar_ipad_opened');
    sidebar.classList.add('sidebar_ipad_closed');

    sidebarButton.classList.remove('sidebar__button_ipad_opened');
    sidebarButton.classList.add('sidebar__button_ipad_closed');
  } else if(sidebar.classList.contains('sidebar_mobile_closed')) {
    sidebar.classList.remove('sidebar_mobile_closed');
    sidebar.classList.add('sidebar_mobile_opened');

    sidebarButton.classList.remove('sidebar__button_mobile_closed');
    sidebarButton.classList.add('sidebar__button_mobile_opened');
  } else if(sidebar.classList.contains('sidebar_mobile_opened')) {
    sidebar.classList.remove('sidebar_mobile_opened');
    sidebar.classList.add('sidebar_mobile_closed');

    sidebarButton.classList.remove('sidebar__button_mobile_opened');
    sidebarButton.classList.add('sidebar__button_mobile_closed');
  }
}

const linkClick = (e) => {

  for(var i=0; i<links.length; i++) {
    links[i].classList.remove('sidebar__menu__item_active');
  };
  e.target.closest('.sidebar__menu__item').classList.add('sidebar__menu__item_active');
}

window.addEventListener("resize", getSize);
window.addEventListener("scroll", scrollCheck);
sidebarButton.addEventListener("click", sidebarToggle);

for(var i=0; i<links.length; i++) {
  links[i].addEventListener("click", linkClick);
}

getSize();
scrollCheck();
