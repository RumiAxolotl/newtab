// ┌┬┐┬┌┬┐┌─┐
//  │ ││││├┤
//  ┴ ┴┴ ┴└─┘
// Set time and Date

window.onload = displayClock();
function displayClock() {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const now = new Date();
  const month = months[now.getMonth()];
  const day = now.getDate();
  const minutes = ("0" + now.getMinutes()).slice(-2);
  let hours = now.getHours();
  let ampm = "";
  let seconds = ("0" + now.getSeconds()).slice(-2);

  if (CONFIG.twelveHourFormat) {
    ampm = hours >= 12 ? " pm" : " am";
    hours = hours % 12 || 12;
  }

  document.getElementById("hour").innerText = hours;
  const separators = document.querySelectorAll("div#separator");
  separators.forEach((separator) => {
    separator.innerHTML = " : ";
  });
  document.getElementById("minutes").innerText = minutes + ampm;
  document.getElementById("seconds").innerText = seconds;
  document.getElementById("month").innerText = month;
  document.getElementById("day").innerText = day;

  setTimeout(displayClock, 1000);
}
