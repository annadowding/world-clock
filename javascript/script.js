//Paris
function updateTime() {
  let parisElement = document.querySelector("#paris");

  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss A");

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss A");
}

updateTime();
setInterval(updateTime, 1000);

function displayCityData(event) {
  let cityTimezone = event.target.value;
  // if (cityTimeZone === "current") {
  //   cityTimezone = moment.tz.guess();

  // }
  let cityName = cityTimezone.replace("/", "  ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesDisplay = document.querySelector("#cities");
  citiesDisplay.innerHTML = `
<div class="city" id="sydney">
        <div>
          <h2>${cityTimezone}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")} ${cityTime.format(
    "A"
  )}</div>
      </div>
    </div>
`;
}

let citiesDropdown = document.querySelector("#city");
citiesDropdown.addEventListener("change", displayCityData);
