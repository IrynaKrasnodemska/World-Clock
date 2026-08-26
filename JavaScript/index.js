function updateTime() {
  // Madrid
  let madridElement = document.querySelector("#madrid");

  let madridDateElement = madridElement.querySelector(".date");
  let madridTimeElement = madridElement.querySelector(".time");
  let madridTime = moment().tz("Europe/Madrid");

  madridDateElement.innerHTML = madridTime.format("MMMM	Do YYYY");
  madridTimeElement.innerHTML = madridTime.format(
    "h:mm:ss [<small>]A[</small>]",
  );

  // New York
  let new_yorkElement = document.querySelector("#new_york");

  let new_yorkDateElement = new_yorkElement.querySelector(".date");
  let new_yorkTimeElement = new_yorkElement.querySelector(".time");
  let new_yorkTime = moment().tz("America/New_York");

  new_yorkDateElement.innerHTML = new_yorkTime.format("MMMM	Do YYYY");
  new_yorkTimeElement.innerHTML = new_yorkTime.format(
    "h:mm:ss [<small>]A[</small>]",
  );
  // Sydney
  let sydneyElement = document.querySelector("#sydney");

  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("MMMM	Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss [<small>]A[</small>]",
  );
  // Kyiv
  let kyivElement = document.querySelector("#kyiv");

  let kyivDateElement = kyivElement.querySelector(".date");
  let kyivTimeElement = kyivElement.querySelector(".time");
  let kyivTime = moment().tz("Ukraine/Kyiv");

  kyivDateElement.innerHTML = kyivTime.format("MMMM	Do YYYY");
  kyivTimeElement.innerHTML = kyivTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
