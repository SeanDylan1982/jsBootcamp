const clicker = document.querySelector("#clicker");
const warning = document.querySelector("#warning");
const danger = document.querySelector("#danger");
const screenWidth = window.innerWidth - 50;
const screenHeight = window.innerHeight - 50;

clicker.addEventListener("mouseover", () => {
  let randomWidth = Math.floor(Math.random() * screenWidth)
  let randomHeight = Math.floor(Math.random() * screenHeight)
  clicker.style.left = `${randomWidth}px`;
  clicker.style.top = `${randomHeight}px`;
})
clicker.addEventListener("click", () => {
  clicker.innerText = "Got ME!"
  document.body.style.backgroundColor = "olive";
  clicker.style.border = "1px solid blue"
})

warning.addEventListener("mouseover", () => {
  let randomWidth = Math.floor(Math.random() * screenWidth)
  let randomHeight = Math.floor(Math.random() * screenHeight)
  warning.style.left = `${randomWidth}px`;
  warning.style.top = `${randomHeight}px`;
})
warning.addEventListener("click", () => {
  warning.innerText = "Got ME!"
  document.body.style.backgroundColor = "olive";
  warning.style.border = "1px solid blue"
})

danger.addEventListener("mouseover", () => {
  let randomWidth = Math.floor(Math.random() * screenWidth)
  let randomHeight = Math.floor(Math.random() * screenHeight)
  danger.style.left = `${randomWidth}px`;
  danger.style.top = `${randomHeight}px`;
})
danger.addEventListener("click", () => {
  danger.innerText = "Got ME!"
  document.body.style.backgroundColor = "olive";
  danger.style.border = "1px solid blue"
})