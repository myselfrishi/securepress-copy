function stickTheNav() {
  let navBar = document.querySelector(".nav-main");
  if(window.scrollY > 50) {
    navBar.classList.add("js-sticky-nav");
  } else {
    navBar.classList.remove("js-sticky-nav");
  }
}

window.addEventListener("scroll", stickTheNav);