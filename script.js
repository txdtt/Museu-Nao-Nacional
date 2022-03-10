"use strict"

var navbar = document.querySelector("nav");

window.onscroll = () => {
    if (window.scrollY > 500) {
        navbar.classList.add("scroll");
    } else {
        navbar.classList.remove("scroll");
    }
}

function initMap() {
    const myLatLng = {lat: -23.561789, lng: -46.656004}
    const map = new google.maps.Map(document.getElementById("map"), {
        center: myLatLng,
        zoom: 9,
  });

    new google.maps.Marker ({
        position: myLatLng,
        map,
        title: "Museu Não-Nacional-SP"
    });
}
