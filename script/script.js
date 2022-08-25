"use strict";

let currentTime = new Date();
const timeEl = document.querySelector(".time");

timeEl.textContent = currentTime;

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
