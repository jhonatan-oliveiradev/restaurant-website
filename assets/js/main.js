// show menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

// removing menu mobile

// when click on each nav__link, it removes the show-menu class

// scroll sections active link

// change background header

// when the scroll is greater than 200vh, add the scroll-header class to the header
