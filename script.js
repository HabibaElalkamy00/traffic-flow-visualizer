
    // let map;
    // let geojsonData;
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
    //     });

    //   const slider = document.getElementById("slider");
    //   noUiSlider.create(slider, {
    //     start: 0,
    //     step: 1,
    //     range: { min: 0, max: times.length - 1 },
    //     tooltips: {
    //       to: value => times[value].slice(0, 2) + ":00",
    //       from: Number
    //     },
    //     format: {
    //       to: value => parseInt(value),
    //       from: Number
    //     }
    //   });

    //   slider.noUiSlider.on("update", ([value]) => {
    //     currentIndex = parseInt(value);
    //     drawRoads(times[currentIndex]);
    //   });
    // }

    // function drawRoads(timeKey) {
    //   map.data.forEach(f => map.data.remove(f));

    //   geojsonData.features.forEach(feature => {
    //     const color = feature.properties[`color${timeKey}`] || "#cccccc";
    //     const newFeature = {
    //       type: "Feature",
    //       geometry: feature.geometry,
    //       properties: { color }
    //     };
    //     map.data.addGeoJson(newFeature);
    //   });

    //   map.data.setStyle(f => ({
    //     strokeColor: f.getProperty("color"),
    //     strokeWeight: 8,
    //     strokeOpacity: 0.9
    //   }));
    // }
