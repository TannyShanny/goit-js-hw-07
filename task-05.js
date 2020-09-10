"use strict";

const input = document.querySelector("#name-input");
input.addEventListener("input", () => {
  const span = document.querySelector("#name-output");
  span.textContent = "" ? "незнакомец" : input.value;
});
