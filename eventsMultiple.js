const app = document.querySelector("#boxes");
const colors = ['red', 'orange', 'yellow', 'green', 'lime', 'cyan', 'blue', 'violet', 'indigo'];

const changeColor = function(e) {
  console.log(e);
  const h1 = document.querySelector("h1");
  h1.style.color = this.style.backgroundColor;
}

for (let color of colors) {
  const box = document.createElement("div");
  box.classList.add("box");
  box.style.backgroundColor = color;
  app.appendChild(box);
  box.addEventListener("click", changeColor);
}

document.body.addEventListener("keypress", function(e) {
  // console.log(e);
});

const input = document.querySelector("#username");
input.addEventListener("keyup", function(e) {
  console.log(e);
})

const addItemInput = document.querySelector("#add-item");
const itemsUl = document.querySelector("#items");

addItemInput.addEventListener("keypress", function(e) {
  if (e.key === 'Enter') {
    if (!this.value) return;
    const li = document.createElement("li")
    itemsUl.appendChild(li).innerText = this.value;
    this.value = "";
  }
})

