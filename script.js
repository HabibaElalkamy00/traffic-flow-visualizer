// const timeSelector = document.getElementById("timeSelector");

// function updateRoadColors(time) {
//   fetch("riyadh_roads_density.csv")
//     .then(response => response.text())
//     .then(csv => {
//       const lines = csv.trim().split("\n").slice(1); 
//       const densityMap = {
//         kingAbdullah: null,
//         kingFahd: null,
//         takhassusi: null
//       };

//       lines.forEach(line => {
//         const [csvTime, road, densityStr] = line.split(",");
//         const density = parseInt(densityStr);
//         if (csvTime === time) {
//           if (road === "King Abdullah") densityMap.kingAbdullah = density;
//           if (road === "King Fahd") densityMap.kingFahd = density;
//           if (road === "Takhassusi") densityMap.takhassusi = density;
//         }
//       });

//       for (const roadId in densityMap) {
//         const road = document.getElementById(roadId);
//         const value = densityMap[roadId];
//         if (road && value !== null) {
//           let color = "#00C853"; // أخضر
//           if (value >= 10 && value <= 25) color = "#FFEB3B"; // أصفر
//           else if (value > 25) color = "#D50000"; // أحمر
//           road.setAttribute("stroke", color);
//         }
//       }
//     });
// }

// updateRoadColors(timeSelector.value);

// timeSelector.addEventListener("change", () => {
//   updateRoadColors(timeSelector.value);
// });
