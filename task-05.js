"use strict";

const input = document.querySelector("#name-input");
input.addEventListener("input", () => {
  const span = document.querySelector("#name-output");
  if (input.value === "") {
    span.textContent = "незнакомец";
  } else {
    span.textContent = input.value;
  };
});