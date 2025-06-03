let trafficDataByTime = {};
let availableTimes = [];

fetch("mock_map.svg")
  .then((res) => res.text())
  .then((svgText) => {
    document.getElementById("map-container").innerHTML = svgText;
    loadTrafficData();
  })
  .catch((err) => console.error("❌ خطأ في تحميل الخريطة:", err));

function loadTrafficData() {
  fetch("mock_traffic_data.csv")
    .then((res) => res.text())
    .then((csvText) => {
      const parsed = Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
      }).data;

      parsed.forEach((row) => {
        const time = row.time.trim();
        if (!trafficDataByTime[time]) {
          trafficDataByTime[time] = [];
          availableTimes.push(time);
        }
        trafficDataByTime[time].push(row);
      });

      setupTimeSlider();
      visualizeTraffic(availableTimes[0]);
    })
    .catch((err) => console.error("❌ خطأ في قراءة CSV:", err));
}

function setupTimeSlider() {
  const slider = document.getElementById("time-slider");
  const label = document.getElementById("time-label");

  slider.max = availableTimes.length - 1;
  slider.value = 0;
  label.textContent = availableTimes[0];

  slider.addEventListener("input", (e) => {
    const index = parseInt(e.target.value);
    const selectedTime = availableTimes[index];
    label.textContent = selectedTime;
    visualizeTraffic(selectedTime);
  });
}

function visualizeTraffic(time) {
  const svg = document.querySelector("#map-container svg");
  if (!svg) return;

  const lines = svg.querySelectorAll("line");
  const data = trafficDataByTime[time] || [];

  lines.forEach((line, index) => {
    const item = data[index];
    if (!item) return;

    const count = parseInt(item.count);
    let color = "green";

    if (count > 30) color = "red";
    else if (count > 15) color = "orange";

    line.setAttribute("stroke", color);
    line.setAttribute("stroke-width", 4);
  });

  console.log(`✅ عرض الكثافة لوقت: ${time}`);
}
