"use strict"

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