const nav = document.querySelector("#main");
const topOfNav = nav.offsetTop;

window.addEventListener("scroll", () => {
  if (scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + "px";
    document.body.classList.add("fixed-nav");
  } else {
    document.body.classList.remove("fixed-nav");
    document.body.style.paddingTop = 0;
  }
});
