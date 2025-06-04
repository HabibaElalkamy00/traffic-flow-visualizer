// let map;
// let geojsonData;
// let slider;
// let markers = [];
// let infowindow; // ✅ InfoWindow واحد ثابت
// const times = ['0800', '1300', '1800'];
// let currentIndex = 0;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: 24.7136, lng: 46.6839 },
//     zoom: 12
//   });

//   fetch("roads.geojson")
//     .then(res => res.json())
//     .then(data => {
//       geojsonData = data;
//       drawRoads(times[currentIndex]);

//       slider = document.getElementById("slider");
//       noUiSlider.create(slider, {
//         start: 0,
//         step: 1,
//         range: { min: 0, max: times.length - 1 },
//         tooltips: {
//           to: value => times[value].slice(0, 2) + ":00",
//           from: Number
//         },
//         format: {
//           to: value => parseInt(value),
//           from: Number
//         }
//       });

//       slider.noUiSlider.on("update", ([value]) => {
//         currentIndex = parseInt(value);
//         drawRoads(times[currentIndex]);
//       });

//       document.getElementById("resetBtn").addEventListener("click", () => {
//         slider.noUiSlider.set(0);
//         currentIndex = 0;
//         drawRoads(times[0]);
//         map.setCenter({ lat: 24.7136, lng: 46.6839 });
//         map.setZoom(12);
//       });
//     });
// }

// function drawRoads(timeKey) {
//   map.data.forEach(f => map.data.remove(f));
//   markers.forEach(m => m.setMap(null));
//   markers = [];

//   geojsonData.features.forEach(feature => {
//     const color = feature.properties[`color${timeKey}`] || "#cccccc";
//     const coords = feature.geometry.coordinates;
//     const start = coords[0];
//     const end = coords[coords.length - 1];

//     const newFeature = {
//       type: "Feature",
//       geometry: feature.geometry,
//       properties: {
//         name: feature.properties.name,
//         color,
//         density: getDensityFromColor(color)
//       }
//     };
//     map.data.addGeoJson(newFeature);

//     const startMarker = new google.maps.Marker({
//       position: { lat: start[1], lng: start[0] },
//       map: map,
//       label: "🟢",
//       title: `بداية ${feature.properties.name}`
//     });
//     const endMarker = new google.maps.Marker({
//       position: { lat: end[1], lng: end[0] },
//       map: map,
//       label: "🔴",
//       title: `نهاية ${feature.properties.name}`
//     });

//     markers.push(startMarker, endMarker);
//   });

//   map.data.setStyle(f => ({
//     strokeColor: f.getProperty("color"),
//     strokeWeight: 6,
//     strokeOpacity: 1,
//     clickable: true,
//     zIndex: 10
//   }));

//   if (!infowindow) {
//     infowindow = new google.maps.InfoWindow();
//   }

//   map.data.addListener("click", function(event) {
//     const name = event.feature.getProperty("name") || "طريق";
//     const color = event.feature.getProperty("color");
//     const density = event.feature.getProperty("density") || "؟";

//     const content = `<div style='font-size:14px;'><b>${name}</b><br>الكثافة: ${density}</div>`;
//     infowindow.setContent(content);
//     infowindow.setPosition(event.latLng);
//     infowindow.open(map);
//   });
// }

// function getDensityFromColor(color) {
//   switch (color) {
//     case "#00C853": return "خفيف (< 10)";
//     case "#FFEB3B": return "متوسط (10–24)";
//     case "#D50000": return "كثيف (25+)";
//     default: return "؟";
//   }
// }
