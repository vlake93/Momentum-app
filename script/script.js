"use strict";
const dateEl = document.querySelector(".date");
const bodyBG = document.querySelector("body");
const greeting = document.querySelector(".greeting");

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

function refresh() {
  const timeDisplay = document.querySelector(".time");

  if (minutes < 10 && hours < 10) {
    timeDisplay.textContent = `0${hours}:0${minutes}`;
  } else if (hours < 10) {
    timeDisplay.textContent = `0${hours}:${minutes}`;
  } else if (minutes < 10) {
    timeDisplay.textContent = `${hours}:0${minutes}`;
  } else {
    timeDisplay.textContent = `${hours}:${minutes}`;
  }

  if (day < 10) {
    dateEl.textContent = `${month} / 0${day} / ${year}`;
  } else {
    dateEl.textContent = `${month} / ${day} / ${year}`;
  }

  // if (hours < 10) {
  //   timeDisplay.textContent = `0${hours}:${minutes}`;
  // } else if (hours < 10 && minutes < 10) {
  //   timeDisplay.textContent = `0${hours}:0${minutes}`;
  // }
}
setInterval(refresh, 50);

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

for (let i = 0; i < 5; i++) {
  let random = Math.floor(Math.random() * 4);
  if (hours < 12) {
    bodyBG.style.backgroundImage = `url(../assets/morning-${random}.jpg)`;
    greeting.textContent = `Good morning, `;
  } else if (hours > 12 && hours < 18) {
    bodyBG.style.backgroundImage = `url(../assets/afternoon-${random}.jpg)`;
    greeting.textContent = `Good afternoon, `;
  } else {
    bodyBG.style.backgroundImage = `url(../assets/night-${random}.jpg)`;
    greeting.textContent = `Good evening, `;
  }
}

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
