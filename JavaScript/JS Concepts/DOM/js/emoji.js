"use strict";
document.querySelectorAll(".emoji").forEach(function (el) {
  el.addEventListener("click", function () {
    document.
    querySelectorAll(".emoji.active").
    forEach(function (active) {return active.classList.remove("active");});
    requestAnimationFrame(function () {return el.classList.add("active");});
  });
});