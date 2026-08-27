let cityInterval = null;
function updateTime() {
  // Madrid
  let madridElement = document.querySelector("#madrid");
  if (madridElement) {
    let madridDateElement = madridElement.querySelector(".date");
    let madridTimeElement = madridElement.querySelector(".time");
    let madridTime = moment().tz("Europe/Madrid");

    madridDateElement.innerHTML = madridTime.format("MMMM	Do YYYY");
    madridTimeElement.innerHTML = madridTime.format(
      "h:mm:ss [<small>]A[</small>]",
    );
  }

  // New York
  let new_yorkElement = document.querySelector("#new_york");
  if (new_yorkElement) {
    let new_yorkDateElement = new_yorkElement.querySelector(".date");
    let new_yorkTimeElement = new_yorkElement.querySelector(".time");
    let new_yorkTime = moment().tz("America/New_York");

    new_yorkDateElement.innerHTML = new_yorkTime.format("MMMM	Do YYYY");
    new_yorkTimeElement.innerHTML = new_yorkTime.format(
      "h:mm:ss [<small>]A[</small>]",
    );
  }
  // Sydney
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("MMMM	Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "h:mm:ss [<small>]A[</small>]",
    );
  }
  // Kyiv
  let kyivElement = document.querySelector("#kyiv");
  if (kyivElement) {
    let kyivDateElement = kyivElement.querySelector(".date");
    let kyivTimeElement = kyivElement.querySelector(".time");
    let kyivTime = moment().tz("Europe/Kyiv");

    kyivDateElement.innerHTML = kyivTime.format("MMMM	Do YYYY");
    kyivTimeElement.innerHTML = kyivTime.format("h:mm:ss [<small>]A[</small>]");
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (!cityTimeZone) return;

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = event.target.options[event.target.selectedIndex].text;
  if (event.target.value === "current") {
    cityName = cityTimeZone.replace("_", " ").split("/")[1];
  }
  let citiesElement = document.querySelector("#cities");

  if (cityInterval) {
    clearInterval(cityInterval);
  }

  function displaySelectedCity() {
    let cityTime = moment().tz(cityTimeZone);

    citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
      "A",
    )}</small></div>
  </div> 
  <a href="/" style='color: rgb(24, 255, 85); -webkit-text-stroke: 0.1px black; font-size: 18px;'>All cities</a>
  `;
  }
  displaySelectedCity();
  cityInterval = setInterval(displaySelectedCity, 1000);
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
