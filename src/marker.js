const mapboxgl = require("mapbox-gl");

function makeMarker(url, coordinate) {
  const marker = document.createElement("div");
  marker.style.width = "32px";
  marker.style.height = "32px";
  marker.style.backgroundImage = `url(${url})`;
  return new mapboxgl.Marker(marker).setLngLat([-74.009151, 40.705086]);
}

module.exports = makeMarker;
