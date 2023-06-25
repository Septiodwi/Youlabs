// var prevScrollpos = window.pageXOffset;
// window.onscroll = function () {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("top-nav").style.top = "0";
//   } else {
//     document.getElementById("top-nav").style.top = "90px";
//   }
//   prevScrollpos = currentScrollPos;
// };

let theEnd = 0,
  navbar = document.getElementById("top-nav");

window.addEventListener("scroll", function () {
  var scrollTop = this.window || this.document.documentElement.scrollTop;
  if (scrollTop > theEnd) {
    navbar.style.top = "-70px";
  } else {
    navbar.style.top = "0";
  }
  theEnd = scrollTop;
});
