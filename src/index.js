const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken =
  "pk.eyJ1IjoibWlrYWJ1c2FudGUiLCJhIjoiY2szNG9janU5MTdrOTNocHBkc243Y2NkbyJ9.t4BlWGiD0pdV-PimxORHew";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = document.createElement("div");
marker.style.width = "32px";
marker.style.height = "32px";
marker.style.backgroundImage =
  "url(https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg)";
new mapboxgl.Marker(marker).setLngLat([-74.009151, 40.705086]).addTo(map);
