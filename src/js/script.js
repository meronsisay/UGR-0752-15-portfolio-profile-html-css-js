document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu"); //
  const navLinks = document.querySelector(".nav_links");
  const menu2 = document.querySelector(".menu2");

  const isHomePage = document.body.classList.contains("home-page");

  console.log(isHomePage);
  if (isHomePage) {
    menu.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menu.classList.toggle("active");
    });
  } else {
    menu2.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menu2.classList.toggle("active");
    });
  }
});
