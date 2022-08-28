"use strict";
const dateEl = document.querySelector(".date");
const bodyBG = document.querySelector("body");
const greeting = document.querySelector(".greeting");
const search = document.querySelector(".search-input");
const searchLink = document.querySelector(".search-link");

search.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log(search.value);
    searchLink.href = `https://www.google.com/search?q=${search.value}`;
    searchLink.click();
  }
});

// searchLink.addEventListener("click", () => {
//   console.log("btn clicked");
// });

const months = [
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

const date = new Date();
let year = date.getFullYear();
let month = months[date.getMonth()];
let day = date.getDate();
let minutes = date.getMinutes();
let hours = date.getHours();
let seconds = date.getSeconds();

let random = Math.floor(Math.random() * 4);
if (hours < 12) {
  bodyBG.style.backgroundImage = `url(../assets/morning-${random}.jpg)`;
  greeting.textContent = `Good morning, `;
} else if (hours > 11 && hours < 18) {
  bodyBG.style.backgroundImage = `url(../assets/afternoon-${random}.jpg)`;
  greeting.textContent = `Good afternoon, `;
} else {
  bodyBG.style.backgroundImage = `url(../assets/night-${random}.jpg)`;
  greeting.textContent = `Good evening, `;
}

function refreshTime() {
  const timeDisplay = document.querySelector(".time");

  timeDisplay.textContent = `${hours.toString().padStart(2, 0)}:${minutes
    .toString()
    .padStart(2, 0)}`;
  dateEl.textContent = `${month} / ${day.toString().padStart(2, 0)} / ${year}`;
}
setInterval(refreshTime, 100);

// if (hours < 10) {
//   timeDisplay.textContent = `0${hours}:${minutes}`;
// } else if (hours < 10 && minutes < 10) {
//   timeDisplay.textContent = `0${hours}:0${minutes}`;
// }

// window.addEventListener("load", () => {
//   for (let i = 0; i < 5; i++) {
//     let random = Math.floor(Math.random() * 4);
//     if (hours < 11) {
//       bodyBG.style.backgroundImage = `url(../assets/morning-${random}.jpg)`;
//     } else if (hours > 12 && hours < 17) {
//       bodyBG.style.backgroundImage = `url(../assets/afternoon-${random}.jpg)`;
//     } else {
//       bodyBG.style.backgroundImage = `url(../assets/night-${random}.jpg)`;
//     }
//   }
// });

// fetch("http://worldtimeapi.org/api/timezone/Asia/Manila")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     console.log(data.utc_datetime);
//     timeEl.textContent = data.utc_datetime;
//   });

// fetch("https://api.pexels.com/v1/")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });
