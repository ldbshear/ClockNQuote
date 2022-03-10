function digitalClock() {
  let kidClock = new Date();
  let day = kidClock.getDay();
  let week = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  day = week[kidClock.getDay()];
  let date = kidClock.getDate();
  let month = kidClock.getMonth();
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  month = monthNames[kidClock.getMonth()];
  let year = kidClock.getFullYear();
  let hours12 = document.getElementById("hour12");
  let twelveHours = kidClock.getHours();
  let minutes = kidClock.getMinutes();
  let seconds = kidClock.getSeconds();

  let displayTime = document.querySelector(".hourMins");
  let displayDate = document.querySelector(".dayMonthYear");

  if (twelveHours > 12) {
    twelveHours = twelveHours - 12;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  displayTime.innerHTML = `${twelveHours}:${minutes}:${seconds}`;
  displayDate.innerHTML = `${day}, ${date} ${month} ${year}`;
  hours12.innerHTML = twelveHours;
}
let interval = setInterval(digitalClock, 1000);

setInterval(setAnalog, 1000);
function setAnalog() {
  const currentDate = new Date();
  const secondR = currentDate.getSeconds() / 60;
  const minutesR = (secondR + currentDate.getMinutes()) / 60;
  const hoursR = (minutesR + currentDate.getHours()) / 12;
  setRotation(secondHand, secondR);
  setRotation(minuteHand, minutesR);
  setRotation(hourHand, hoursR);
}

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

const userCardTemplate = document.querySelector("[data-user-template]");

const userCardContainer = document.querySelector("[data-user-cards-container]");

/* fetch("https://api.quotable.io/random")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((user) => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const quoteText = card.querySelector("[data-header");
      const quoteAuthor = card.querySelector("[data-body");
      quoteText.textContent = user.content;
      quoteAuthor.textContent = user.author;
      userCardContainer.append(card);
    });
  });

let getthought = document.getElementById("thought"); */

let getQuote = document.getElementById("thought");

let displayQuote = function showQuote() {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const quoteText = card.querySelector("[data-header");
      const quoteAuthor = card.querySelector("[data-body");
      quoteText.textContent = data.content;
      quoteAuthor.textContent = data.author;
      userCardContainer.appendChild(card);
    });
};

getQuote.addEventListener("click", displayQuote);
