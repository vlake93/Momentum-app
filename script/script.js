// "use strict";

const dateEl = document.querySelector(".date");
const search = document.querySelector(".search-input");
const searchLink = document.querySelector(".search-link");
const todoContainer = document.querySelector(".todo-container");
const todoBtn = document.querySelector(".todo-button");
const quote = document.querySelector(".quotes-text");
const quoteReset = document.querySelector(".quotes-button");

// NAME AND FOCUS STORAGE
const nameContainer = document.querySelector(".name-container");
const container = document.querySelector(".container");
const nameInput = document.querySelector(".name-input");

nameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    localStorage.setItem("name", nameInput.value);
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
  if (e.key === "Enter") {
    localStorage.setItem("focus", focusInput.value);
    console.log(localStorage.getItem("focus"));
    focusing();
  }
});

function focusing() {
  if (localStorage.getItem("focus") === null || undefined) {
    focus.style.display = "block";
  } else {
    focus.style.opacity = "0";
    focus.style.pointerEvents = "none";
    focusInput.style.opacity = "0";
    focusInput.style.pointerEvents = "none";
    focusHeader.style.opacity = "1";
    yourFocus.style.display = "block";
    yourFocus.textContent = focusInput.value;
  }
}

if (localStorage.getItem("focus") === null || undefined) {
  focus.style.display = "block";
} else {
  focus.style.opacity = "0";
  focus.style.pointerEvents = "none";
  focusInput.style.opacity = "0";
  focusInput.style.pointerEvents = "none";
  focusHeader.style.opacity = "1";
  yourFocus.style.display = "block";
  yourFocus.textContent = localStorage.getItem("focus");

  yourFocus.addEventListener("click", () => {
    localStorage.removeItem("focus");
    focus.style.opacity = "1";
    focus.style.pointerEvents = "auto";
    focusInput.style.opacity = "1";
    focusInput.style.pointerEvents = "auto";
    focusHeader.style.opacity = "0";
    yourFocus.style.display = "none";
    focusInput.value = "";
  });
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
let random = Math.floor(Math.random() * 5);

const bodyBG = document.querySelector("body");
const greetingName = document.querySelector(".greeting-name");

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
  const timeDisplay = document.querySelector(".time");
  let minutes = new Date().getMinutes();
  let hours = new Date().getHours();
  if (ampm === false) {
    timeDisplay.textContent = `${hours.toString().padStart(2, 0)}:${minutes
      .toString()
      .padStart(2, 0)}`;
  } else {
    hours > 12
      ? (timeDisplay.textContent = `${(hours % 12 ? hours % 12 : 12)
          .toString()
          .padStart(2, 0)}:${minutes.toString().padStart(2, 0)} pm`)
      : (timeDisplay.textContent = `${(hours % 12 ? hours % 12 : 12)
          .toString()
          .padStart(2, 0)}:${minutes.toString().padStart(2, 0)} am`);
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

// GREETING
const rename = document.querySelector(".edit-name");
const renameLogo = document.querySelector(".edit-name-logo");
const greeting = document.querySelector(".greeting");

greeting.addEventListener("mouseover", () => {
  renameLogo.style.opacity = "1";
});
rename.addEventListener("mouseover", () => {
  renameLogo.style.opacity = "1";
});

rename.addEventListener("mouseout", () => {
  renameLogo.style.opacity = "0";
});

greeting.addEventListener("mouseout", () => {
  renameLogo.style.opacity = "0";
});

rename.addEventListener("click", () => {
  localStorage.removeItem("name");
  window.location.reload();
  // renameInput.style.transform = "translateX(2rem)";
});

// SETTINGS
const settingButton = document.querySelector(".setting-logo");
const settingContainer = document.querySelector(".setting-container-hidden");
settingButton.addEventListener("click", () => {
  settingContainer.classList.toggle("hidden");
});

// BUTTONS
const circle = document.querySelectorAll(".circle");
const generalButton = document.querySelectorAll(".general-button");
const generalButtonTarget = document.querySelectorAll(".general-button-target");

for (let i = 0; i < generalButton.length; i++) {
  generalButton[i].addEventListener("click", () => {
    circle[i].classList.toggle("circle-off");
    generalButton[i].classList.toggle("general-off");
    generalButtonTarget[i].classList.toggle("invisible");
  });
}

///////////////////////////////
// QUOTES /////////////////////
///////////////////////////////

let quotesArr = [
  `Swiper, no swiping, Swiper, no swiping!`,
  `Trying is the first step to failure`,
  `When nothing is going right, go left`,
];

// quote.textContent = `"${quotesArr[0]}"`;
// localStorage.setItem("quote", quotesArr);
// let local = localStorage.getItem("quote");
// let parsed = JSON.parse(local);
// quote.textContent = `"${JSON.parse(localStorage.getItem("quote"))}"`;

// quote.textContent = `"${localStorage.getItem("quote")}"`;
quote.textContent = `"${quotesArr[0]}"`;

const addBtnQuote = document.querySelector(".add-button-quote");
const addQuote = document.querySelector(".add-quote");

function addquote() {
  if (addQuote.value === "") {
    console.log("write something");
  } else {
    localStorage.setItem("quote", addQuote.value);
    quotesArr.push(localStorage.getItem("quote"));
    // quotesArr.push(addQuote.value);
    addQuote.value = "";
    quote.textContent = `"${quotesArr[quotesArr.length - 1]}"`;
  }
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

const todoList = document.querySelector(".todo-list-lister");
const todoTask = document.querySelector(".todo-list-task");
const addBtn = document.querySelector(".add-button");

todoTask.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (todoTask.value.trim() != 0) {
      let todos = JSON.parse(localStorage.getItem("todo"));
      if (todos === null) {
        todoArr = [];
      } else {
        todoArr = todos;
      }
      todoArr.push(todoTask.value);
      localStorage.setItem("todo", JSON.stringify(todoArr));
    }
    todoTask.value = "";

    showItem();
  }
});

addBtn.addEventListener("click", function () {
  if (todoTask.value.trim() != 0) {
    let todos = JSON.parse(localStorage.getItem("todo"));
    if (todos === null) {
      todoArr = [];
    } else {
      todoArr = todos;
    }
    todoArr.push(todoTask.value);
    localStorage.setItem("todo", JSON.stringify(todoArr));
  }
  todoTask.value = "";
  showItem();
});

function showItem() {
  let todos = JSON.parse(localStorage.getItem("todo"));
  if (todos === null) {
    todoArr = [];
  } else {
    todoArr = todos;
  }

  let todoContent = "";
  todoArr.forEach((data, index) => {
    todoContent += `
   <div class="new-todo">
   <p class="new-todo-text">${data}</p>
   <button class="remove" onClick="deleteItem(${index})">x</button>
   </div>
   `;
  });
  todoList.innerHTML = todoContent;
}
showItem();

function deleteItem(index) {
  let todos = JSON.parse(localStorage.getItem("todo"));
  todoArr.splice(index, 1);
  localStorage.setItem("todo", JSON.stringify(todoArr));
  showItem();
}

// QUOTES FUNCTION

// addBtnQuote.addEventListener("click", function () {
//   if (addQuote.value.trim() != 0) {
//     let quotes = JSON.parse(localStorage.getItem("quote"));
//     if (quotes === null) {
//       quotesArr = [
//         `Swiper, no swiping, Swiper, no swiping!`,
//         `Trying is the first step to failure`,
//         `When nothing is going right, go left`,
//       ];
//     } else {
//       quotesArr = quotes;
//     }
//     quotesArr.push(todoTask.value);
//     localStorage.setItem("todo", JSON.stringify(todoArr));
//   }
//   todoTask.value = "";
//   // showItem();
//   quote.textContent = quotesArr[quotesArr.length - 1];
// });

// function showItem() {
//   let quotes = JSON.parse(localStorage.getItem("todo"));
//   if (quotes === null) {
//     todoArr = [];
//   } else {
//     todoArr = quotes;
//   }

//   let todoContent = "";
//   todoArr.forEach((data, index) => {
//     todoContent += `
//    <div class="new-todo">
//    <p class="new-todo-text">${data}</p>
//    <button class="remove" onClick="deleteItem(${index})">x</button>
//    </div>
//    `;
//   });
//   todoList.innerHTML = todoContent;
// }
// showItem();

// function deleteItem(index) {
//   let quotes = JSON.parse(localStorage.getItem("todo"));
//   todoArr.splice(index, 1);
//   localStorage.setItem("todo", JSON.stringify(todoArr));
//   showItem();
// }
