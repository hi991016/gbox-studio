/* -------------------------------------------------------------------------- */
/*                        SHOW MENU HEADER WHEN SCROLL                        */
/* -------------------------------------------------------------------------- */
window.addEventListener("scroll", () => {
  //   Get the position when I scroll to
  let scrollPos = document.querySelector("html").scrollTop;
  //   console.log('scrollPos', scrollPos)
  //   querySelector
  let menuFBIcon = document.querySelector("header .icon-fb");
  let menuHeader = document.querySelector("header .menu");
  let menuLogo = document.querySelector("header .logo");
  let menuLogoSub = document.querySelector(".menu__list .logo");
  let navMenu = document.querySelector(".nav");
  //   When the scroll is greater than 90 viewport height, add the enable class to the header tag
  if (scrollPos > 90) {
    menuHeader.classList.add("enable");
    menuFBIcon.style.display = "none";
    menuLogoSub.classList.add("rotate");
    menuLogo.style.display = "none";
  } else {
    menuFBIcon.style.display = "block";
    menuHeader.classList.remove("enable");
    menuLogoSub.classList.remove("rotate");
    menuLogo.style.display = "block";
  }
});

/* -------------------------------------------------------------------------- */
/*                              MENU SHOW/HIDDEN                              */
/* -------------------------------------------------------------------------- */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.querySelector(".btn-menu");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("open");
  navMenu.classList.toggle("active");
});
//  catch case open menu in mobile, and resize window > desktop
window.addEventListener("resize", function (e) {
  if (window.innerWidth < 768) {
    navMenu.classList.remove("active");
    navToggle.classList.remove("open");
  }
});

/* -------------------------------------------------------------------------- */
/*                               HOVER MENU LINK                              */
/* -------------------------------------------------------------------------- */
$(".nav a").hover(
  function () {
    //  mouseenter
    $(this).siblings().addClass("is-not-hover");
    $(".nav__list a").addClass("is-not-hover");
  },
  function () {
    //  mouseleave
    $(this).siblings().removeClass("is-not-hover");
    $(".nav__list a").removeClass("is-not-hover");
  }
);
$(".nav a").hover(
  function () {
    $(".nav a").addClass("is-not-hover");
    $(this).removeClass("is-not-hover");
  },
  function () {
    $(".nav a").removeClass("is-not-hover");
  }
);
