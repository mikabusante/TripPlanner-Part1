
const mapboxgl = require("mapbox-gl");
const makeMarker = require("./marker");

mapboxgl.accessToken =
  "pk.eyJ1IjoibWlrYWJ1c2FudGUiLCJhIjoiY2szNG9janU5MTdrOTNocHBkc243Y2NkbyJ9.t4BlWGiD0pdV-PimxORHew";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

//const activityMarker = makeMarker('http:/i.imgur.com/WbMOfMl.').addTo(map);
const hotelMarker = makeMarker('http://i.imgur.com/D9574Cu.png').addTo(map);
//const restoMarker = makeMarker('http://i.imgur.com/cqR6pUI.png').addTo(map);
