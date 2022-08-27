export async function animateMovingElement(elementName) {
  ("use strict");
  /*
    data-direction="x" || data-direction="y"
    data-reverse="yes"
  */

  var offset = 0;
  document.querySelectorAll(elementName).forEach(function (element) {
    var direction = element.getAttribute("data-direction");
    window.addEventListener("scroll", function () {
      var top = element.getBoundingClientRect().top;
      offset = top;
      var h = window.innerHeight;
      var i = element.offsetTop - offset - h;
      if (element.getAttribute("data-reverse") == "yes") {
        i *= -1;
      }
      var x = direction === "x" ? (i * 70) / h : 0;
      var y = direction === "x" ? 0 : (i * 70) / h;
      if (element.getAttribute("data-reverse") == "yes") {
        i *= -1;
      }
      if (i * -1 < h + 600 && i < 600) {
        element.style.transform = "translate3d(" + x + "px, " + y + "px, 0px)";
      }
    });
  });
}
