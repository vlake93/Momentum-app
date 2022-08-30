"use strict";
const bodyBG = document.querySelector("body");
const nameContainer = document.querySelector(".name-container");
const container = document.querySelector(".container");
// const name = document.querySelector(".name");
const nameInput = document.querySelector(".name-input");
const dateEl = document.querySelector(".date");
const greeting = document.querySelector(".greeting");
const greetingName = document.querySelector(".greeting-name");
const search = document.querySelector(".search-input");
const searchLink = document.querySelector(".search-link");
const todoContainer = document.querySelector(".todo-container");
const todoBtn = document.querySelector(".todo-button");
const addBtn = document.querySelector(".add-button");
const todoList = document.querySelector(".todo-list-lister");
const todoTask = document.querySelector(".todo-list-task");
const focus = document.querySelector(".focus");
const focusInput = document.querySelector(".focus-input");
const focusHeader = document.querySelector(".focus-header");
const yourFocus = document.querySelector(".your-focus");
const quote = document.querySelector(".quotes-text");
const quoteReset = document.querySelector(".quotes-button");

// NAME AND FOCUS STORAGE
let nameStorage = "";
nameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let nameStorage = localStorage.setItem("name", nameInput.value);
    console.log(localStorage.getItem("name"));
    if (localStorage.getItem("name") === null || undefined) {
      nameContainer.style.display = "flex";
    } else {
      nameContainer.style.display = "none";
      container.style.display = "flex";
    }
  }
});

if (localStorage.getItem("name") === null || undefined) {
  nameContainer.style.display = "flex";
} else {
  nameContainer.style.display = "none";
  container.style.display = "flex";
}

focusInput.addEventListener("keydown", (e) => {
  let focusStorage = localStorage.setItem("focus", focusInput.value);
  if (e.key === "Enter") {
    console.log(localStorage.getItem("focus"));
    if (localStorage.getItem("focus") === null || undefined) {
      focus.style.display = "block";
    } else {
      focus.style.opacity = "0";
      // focus.style.display = "absolute";
      // focus.style.height = "1px";
      focusInput.style.opacity = "0";
      // focusInput.style.width = "1px";
      focusHeader.style.opacity = "1";
      yourFocus.style.display = "block";
      yourFocus.textContent = `${localStorage.getItem("focus")}`;
    }
  }
});

if (localStorage.getItem("focus") === null || undefined) {
  focus.style.display = "block";
} else {
  focus.style.opacity = "0";
  // focus.style.display = "absolute";
  // focus.style.height = "1px";
  focusInput.style.opacity = "0";
  // focusInput.style.width = "1px";
  focusHeader.style.opacity = "1";
  yourFocus.style.display = "block";
  yourFocus.textContent = `${localStorage.getItem("focus")}`;
}

search.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log(search.value);
    searchLink.href = `https://www.google.com/search?q=${search.value}`;
    searchLink.click();
    search.value = "";
  }
});

// DATE
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

// BACKGROUND
const date = new Date();
let year = date.getFullYear();
let month = months[date.getMonth()];
let day = date.getDate();
let hours = date.getHours();
let random = Math.floor(Math.random() * 4);

greetingName.textContent = localStorage.getItem("name");
if (hours < 12) {
  bodyBG.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(../assets/morning-${random}.jpg)`;
  // greeting.textContent = `Good morning, ${localStorage.getItem("name")}`;
} else if (hours > 11 && hours < 18) {
  bodyBG.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url(../assets/afternoon-${random}.jpg)`;
  // greeting.textContent = `Good afternoon, ${localStorage.getItem("name")}`;
} else {
  bodyBG.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(../assets/night-${random}.jpg)`;
  // greeting.innerHTML = `Good evening, ${localStorage.getItem("name")}`;
}

// TIME
function refreshTime() {
  const timeDisplay = document.querySelector(".time");
  let minutes = new Date().getMinutes();
  let hours = new Date().getHours();
  timeDisplay.textContent = `${hours.toString().padStart(2, 0)}:${minutes
    .toString()
    .padStart(2, 0)}`;
  dateEl.textContent = `${month} / ${day.toString().padStart(2, 0)} / ${year}`;
  greeting.textContent = `${localStorage.getItem("name")}`;
  if (hours < 12) {
    greeting.textContent = `Good morning, ${localStorage.getItem("name")}`;
  } else if (hours > 11 && hours < 18) {
    greeting.textContent = `Good afternoon, ${localStorage.getItem("name")}`;
  } else {
    greeting.textContent = `Good evening, ${localStorage.getItem("name")}`;
  }
}
setInterval(refreshTime, 200);

// QUOTES
const settingButton = document.querySelector(".setting-logo");
const settingContainer = document.querySelector(".setting-container-hidden");
const optionButtons = document.querySelectorAll(".setting-button");
const optionTabs = document.querySelectorAll(".setting-options");

// optionButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     settingContainer.style.width = "40rem";
//   });
// });

for (let i = 0; i < optionButtons.length; i++) {
  optionButtons[i].addEventListener("click", () => {
    // if (optionTabs[i].classList.contains("hidden")) {
    //   optionTabs[i].classList.remove("hidden");
    // } else {
    //   optionTabs[i].classList.add("hidden");
    // }
    settingContainer.classList.toggle("width-large");
    // optionTabs[i].style.display = "flex";
    optionTabs[i].classList.toggle("hidden");
    optionButtons[i].classList.toggle("underline");
    // e.target.classList.toggle("underline");
  });
}

// For each button, register an event listener
// optionButtons.forEach((button) => {
//   button.addEventListener("click", function (e) {
//     // On click, remove the MyClass on ALL buttons
//     optionTabs.forEach(function (el) {
//       el.classList.toggle("hidden");
//     });

//     // Add the class on clicked one
//     // e.target.classList.add("hidden");

//     // Now pass the data-href to your iframe
//     let theHREFtoOpen = e.target.getAttribute("data-href");
//     console.log(theHREFtoOpen);
//     //document.querySelector("#your-iframe").src = theHREFtoOpen
//   });
// });

settingButton.addEventListener("click", () => {
  settingContainer.classList.toggle("hidden");
});

let quotesArr = [
  `"Swiper, no swiping, Swiper, no swiping!"`,
  `"Trying is the first step to failure"`,
];

// ADD NEW QUOTE TO localstorage
// push localstorage to array

quote.textContent = quotesArr[0];
quoteReset.addEventListener("click", () => {
  quote.textContent = quotesArr[Math.floor(Math.random() * quotesArr.length)];
});

// TODO

todoBtn.addEventListener("click", () => {
  todoContainer.classList.toggle("hidden");
});

let todoArr = [];

function addList() {
  if (todoTask.value === "") {
    console.log("write something");
  } else {
    const newLi = document.createElement("div");
    const input = document.createElement("input");
    input.type = "checkbox";
    newLi.append(input);
    todoList.appendChild(newLi);
    localStorage.setItem(todoTask.value, todoTask.value);
    newLi.textContent = localStorage.getItem(todoTask.value);
    todoTask.value = "";
  }
}

addBtn.addEventListener("click", addList);
todoTask.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addList();
  }
});

const circle = document.querySelector(".circle");
const generalSearch = document.querySelector(".general-button-search");

circle.addEventListener("click", () => {
  circle.classList.toggle("circle-off");
  generalSearch.classList.toggle("general-off");
});

// addBtn.addEventListener("click", () => {
//   for (let i = 0; i < 6; i++) {
//     const newLi = document.createElement("li");
//     localStorage.setItem("todo" + [i], todoTask.value);
//     newLi.textContent = localStorage.getItem("todo" + [i]);
//     todoList.appendChild(newLi);
//     todoTask.value = "";
//   }
// });

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
