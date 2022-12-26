const menuOpen = document.querySelector("#menu_img");

const mobileMenu = document.querySelector(".mobile_menu_wrapper");

const mobileClose = document.querySelector("#menu_close_img");

menuOpen.addEventListener("click", function showMenu() {
  mobileMenu.style.visibility = "visible";
  console.log("open");
});

mobileClose.addEventListener("click", function closeMenu() {
  mobileMenu.style.visibility = "hidden";
  console.log("close");
});
