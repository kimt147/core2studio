$(window).scroll(function() {
   alert('Merry Christmas!!!');
});

var spotlight = document.querySelector(".spotlight");
var isUserMotion = false;

function move(e) {
  if (e.clientX || e.touches) {
    isUserMotion = true;
    spotlight.style.setProperty(
      "--x",
      (e.clientX || e.touches[0].clientX) + "px"
    );
    spotlight.style.setProperty(
      "--y",
      (e.clientY || e.touches[0].clientY) + "px"
    );
  }
}

if (window.PointerEvent) {
  spotlight.addEventListener("pointermove", move);
} else {
  spotlight.addEventListener("touchmove", move);
  spotlight.addEventListener("mousemove", move);
}
