"use strict";

const dateEl = document.querySelector(".date");
const greeting = document.querySelector(".greeting");
const search = document.querySelector(".search-input");
const searchLink = document.querySelector(".search-link");
const todoContainer = document.querySelector(".todo-container");
const todoBtn = document.querySelector(".todo-button");
const addBtn = document.querySelector(".add-button");
const todoList = document.querySelector(".todo-list-lister");
const todoTask = document.querySelector(".todo-list-task");
const quote = document.querySelector(".quotes-text");
const quoteReset = document.querySelector(".quotes-button");

// NAME AND FOCUS STORAGE
const nameContainer = document.querySelector(".name-container");
const container = document.querySelector(".container");
const nameInput = document.querySelector(".name-input");

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

const focus = document.querySelector(".focus");
const focusInput = document.querySelector(".focus-input");
const focusHeader = document.querySelector(".focus-header");
const yourFocus = document.querySelector(".your-focus");

focusInput.addEventListener("keydown", (e) => {
  let focusStorage = localStorage.setItem("focus", focusInput.value);
  if (e.key === "Enter") {
    console.log(localStorage.getItem("focus"));
    if (localStorage.getItem("focus") === null || undefined) {
      focus.style.display = "block";
    } else {
      focus.style.opacity = "0";
      focusInput.style.opacity = "0";
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

const bodyBG = document.querySelector("body");
const greetingName = document.querySelector(".greeting-name");

greetingName.textContent = localStorage.getItem("name");
if (hours < 12) {
  bodyBG.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(../assets/morning-${random}.jpg)`;
} else if (hours > 11 && hours < 18) {
  bodyBG.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url(../assets/afternoon-${random}.jpg)`;
} else {
  bodyBG.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(../assets/night-${random}.jpg)`;
}

const circleLarge = document.querySelector(".circle-large");
const time24 = document.querySelector(".time-24hr");
const timeBtn = document.querySelector(".time-button");

let ampm = false;
timeBtn.addEventListener("click", () => {
  !ampm ? ampm : !ampm;
  if (!ampm) {
    ampm = true;
    circleLarge.classList.toggle("circle-off-large");
  } else {
    ampm = false;
    circleLarge.classList.toggle("circle-off-large");
  }
});

// TIME
function refreshTime() {
  const ticker = document.querySelector("#ampm");
  const timeDisplay = document.querySelector(".time");
  let minutes = new Date().getMinutes();
  let hours = new Date().getHours();
  if (ampm === false) {
    timeDisplay.textContent = `${hours.toString().padStart(2, 0)}:${minutes
      .toString()
      .padStart(2, 0)}`;
  } else {
    hours > 12
      ? (timeDisplay.textContent = `${(hours % 12)
          .toString()
          .padStart(2, 0)}:${minutes.toString().padStart(2, 0)}pm`)
      : (timeDisplay.textContent = `${(hours % 12)
          .toString()
          .padStart(2, 0)}:${minutes.toString().padStart(2, 0)}am`);
  }
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

// SETTINGS
const settingButton = document.querySelector(".setting-logo");
const settingContainer = document.querySelector(".setting-container-hidden");
// const optionButtons = document.querySelectorAll(".setting-button");
// const optionTabs = document.querySelectorAll(".setting-options");

// for (let i = 0; i < optionButtons.length; i++) {
//   optionButtons[i].addEventListener("click", () => {
//     optionTabs[i].classList.toggle("hidden");
//     optionButtons[i].classList.toggle("underline");
//   });
// }

settingButton.addEventListener("click", () => {
  settingContainer.classList.toggle("hidden");
});

// QUOTES
let quotesArr = [
  `Swiper, no swiping, Swiper, no swiping!`,
  `Trying is the first step to failure`,
];

quote.textContent = `"${quotesArr[0]}"`;
localStorage.setItem("quote", quotesArr);

const addBtnQuote = document.querySelector(".add-button-quote");
const addQuote = document.querySelector(".add-quote");

function addquote() {
  quotesArr.push(addQuote.value);
  addQuote.value = "";
  quote.textContent = `"${quotesArr[quotesArr.length - 1]}"`;
}

addBtnQuote.addEventListener("click", addquote);
addQuote.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addquote();
  }
});

quoteReset.addEventListener("click", () => {
  quote.textContent = `"${
    quotesArr[Math.floor(Math.random() * quotesArr.length)]
  }"`;
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
