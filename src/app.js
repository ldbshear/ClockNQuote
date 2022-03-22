//Next two functions get day and month from js date and display them, using arrays
function digitalClock() {
  let kidClock = new Date();
  let day = kidClock.getDay();
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
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

  //These next several if statements display time in a 12 hour format.
  if (twelveHours === 0 || twelveHours === 12) {
    twelveHours = 12;
  }

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

let helpInterval = setInterval(helpfulClock, 1000);
function helpfulClock() {
  const helpWithTime = new Date();
  let helpHours = helpWithTime.getHours();
  let helpMins = helpWithTime.getMinutes();
  let extraHelp = document.getElementById("extraHelp");

  if (helpHours === 0) {
    helpHours = 12;
  }

  if (helpHours > 12) {
    helpHours = helpHours - 12;
  }

  if (helpMins < 10) {
    helpMins = "0" + helpMins;
  }

  if (helpMins === 0) {
    extraHelp.innerHTML = `When it is ${helpHours}:${helpMins}<br/> you can say it is ${helpHours} o'clock`;
  } else if (helpMins === "05") {
    extraHelp.innerHTML = `When it is ${helpHours}:${helpMins}<br/> you can say it is five past the hour. Or five minutes past the hour of ${helpHours}.`;
  } else if (helpMins === 10) {
    extraHelp.innerHTML = `When it is ${helpHours}:${helpMins}<br/> you can say it is ten past the hour of ${helpHours}`;
  } else if (helpMins === 15) {
    extraHelp.innerHTML = `When it is ${helpHours}:${helpMins}<br/> you can say it is a quarter past the hour of ${helpHours}`;
  } else if (helpMins === 20) {
    extraHelp.innerHTML = `When it is ${helpHours}:${helpMins}<br/> you can say it is twenty past the hour of ${helpHours}`;
  } else if (helpMins === 25) {
    extraHelp.innerHTML = `When it is ${helpHours}:${helpMins}<br/> you can say it is twenty-five past the hour of ${helpHours}`;
  } else if (helpMins === 30) {
    extraHelp.innerHTML = `When it is ${helpHours}:${helpMins}<br/> you can say it is half past the hour of ${helpHours}`;
  } else if (helpMins === 35) {
    extraHelp.innerHTML = `When it is ${helpHours}:${helpMins}<br/> you can say it is twenty-five to the hour of ${
      helpHours + 1
    }`;
  } else if (helpMins === 40) {
    extraHelp.innerHTML = `When it is ${helpHours}:${helpMins}<br/> you can say it is twenty to the hour of ${
      helpHours + 1
    }`;
  } else if (helpMins === 45) {
    extraHelp.innerHTML = `When it is ${helpHours}:${helpMins}. You can say it is a quarter till. A quarter till the hour of ${
      helpHours + 1
    }`;
  } else if (helpMins === 50) {
    extraHelp.innerHTML = `When it is ${helpHours}:${helpMins}. You can say it is ten to the hour of ${
      helpHours + 1
    }`;
  } else if (helpMins === 55) {
    extraHelp.innerHTML = `When it is ${helpHours}:${helpMins}. You can say it is five to the hour of ${
      helpHours + 1
    }`;
  } else {
    extraHelp.innerHTML = "";
  }
}

const userCardTemplate = document.querySelector("[data-user-template]");

const userCardContainer = document.querySelector("[data-user-cards-container]");

let getQuote = document.getElementById("thought");

let displayQuote = function showQuote() {
  userCardContainer.innerHTML = "";
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const quoteText = card.querySelector("[data-header");
      const quoteAuthor = card.querySelector("[data-body");
      quoteText.textContent = data.content;
      quoteAuthor.textContent = data.author;
      userCardContainer.append(card);
    });
};

getQuote.addEventListener("click", displayQuote);
