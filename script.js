"use strict"

var navbar = document.querySelector("nav");
var logo = document.getElementById("logoID");

window.onscroll = () => {
    if (window.scrollY > 620) {
        logo.style.backgroundImage = "url(img/logoAlt.png)";;
        navbar.classList.add("scroll");
        navbar.style.fontSize = "16px";
    } else {
        logo.style.backgroundImage = "url(img/logo.png)";
        navbar.classList.remove("scroll");
        navbar.style.fontSize = "18px"
    }
}