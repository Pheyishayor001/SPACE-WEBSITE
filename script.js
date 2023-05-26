"use strict";
const btn = document.querySelector(".button");
const portfolio = document.querySelector("#portfolio");
const navLinks = document.querySelector(".nav__links");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  portfolio.scrollIntoView({ behavior: "smooth" });
});

// event delegation
navLinks.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
