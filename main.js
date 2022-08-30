"use strict"
const btn = document.querySelectorAll(".btn");

btn.forEach(function (button) {
  button.addEventListener("click", function () {
    this.classList.toggle("active");

    if (button.classList.contains("active")) {
      btn.forEach(function (button) {
        button.classList.remove("active");
      });
      button.classList.toggle("active")
    }
  });
});