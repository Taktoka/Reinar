let imgs = document.querySelectorAll(".homepages .figure");
let imgs2 = document.querySelectorAll(".inner-pages .figure");
let section1 = document.querySelector(".homepages");
let section2 = document.querySelector(".inner-pages");
nav = document.querySelector(".navbar");

window.onscroll = function () {
  if (window.scrollY >= section1.offsetTop) {
    imgs.forEach((img) => {
      img.classList.add("active");
      if (img.classList.contains("active")) {
        img.style.transform = "scale(1)";
      }
    });
  }
  if (window.scrollY >= section2.offsetTop) {
    imgs2.forEach((img) => {
      img.classList.add("active");
      if (img.classList.contains("active")) {
        img.style.transform = "scale(1)";
      }
    });
  }
};

let loader = document.getElementById("loader");
page = document.querySelector(".page");

window.onload = setTimeout(() => {
  loader.style.display = "none";
  page.style.display = "block";
}, 5000);
