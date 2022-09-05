"use strict";

const model = ["Peter", "Paul", "James"];
const h2names = document.querySelector("#names");
const inputName = document.querySelector("#name");
const button = document.querySelector("button");

// controller
function init() {
  button.addEventListener("click", button_click);
}

function addNameToModel(name) {
  model.push(name);
}
function removeNAme(name) {
  model.splice(model.indexOf(name, 1));
}

function upDateView() {
  //   h2names.textContent = model.join(" ");
  model.forEach((each) => {
    h2names.iinerHTML += `<span class="clickname">${each}</span>`;
  });
  document.querySelectorAll(".clickname").forEach((each) => {
    each.addEventListener("click", klikspan);
  });
}

// console.log(model);

// view
function button_click() {
  addNameToModel(inputName.value);
  upDateView();
}
function klikspan(evt) {
  console.log("klik span", evt.target);
}
