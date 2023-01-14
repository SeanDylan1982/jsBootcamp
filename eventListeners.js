const btn = document.querySelector("#clicker");
const slider = document.querySelector("#slider");
const updater = document.querySelector("#update");
const heading = document.querySelector("#heading");

// btn.addEventListener("click", () => {
//   console.log("click");
//   document.body.style.backgroundColor = "#1a1a1a";
//   document.body.style.color = "#f1f1f1";
//   btn.addEventListener("click", () => {
//     console.log("click");
//     document.body.style.backgroundColor = "#f1f1f1";
//     document.body.style.color = "#1a1a1a";
//   })
// });
btn.addEventListener("mouseover", () => {
  btn.innerText = "Nooooooo...";
})
btn.addEventListener("mouseout", () => {
  btn.innerText = "Click Me!";
})

slider.addEventListener("change", () => {
  console.log("update");
  let value = slider.value;
  updater.innerText = value;
});

slider.addEventListener("mouseover", () => {
  let value = slider.value;
  updater.innerText = value;
})

function getColor() {
  let selection = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f"];
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let randomColor = Math.floor(Math.random() * selection.length)
    color += selection[randomColor];
    console.log(color);
  }
  document.body.style.backgroundColor = color;
}
btn.addEventListener("click", getColor);

function getTextColor() {
  let selection = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f"];
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let randomColor = Math.floor(Math.random() * selection.length)
    color += selection[randomColor];
    console.log(color);
  }
  document.body.style.color = color;
}
window.addEventListener("scroll", getTextColor)
