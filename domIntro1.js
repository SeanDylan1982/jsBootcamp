let img = document.querySelector("#human-img");
function rotate() {
  img.classList.toggle("rotate");
}
img.addEventListener("click", rotate);

let heading = document.querySelector("h1");
function expandHeading() {
  heading.innerText = "JavaScript | Bootcamp";
}
heading.addEventListener("mouseover", expandHeading);

let app = document.querySelector("#app");
app.innerHTML = `
  <div class="btn-container">
    <button name="theme" id="theme" value="theme" class="btn btn-warning">Theme <i class="fa fa-palette"></i></button>
  </div>
`;
let body = document.querySelector("body");
function changeTheme() {
  body.classList.toggle("dark-mode");
}
app.addEventListener("click", changeTheme);

const range = document.querySelector("#range");
// console.log(range);
// console.log(range.getAttribute("max"));
// console.log(range.getAttribute("min"));
// console.log(range.getAttribute("step"));
range.setAttribute("max", "500");
// console.log(range.value);

const rangeValue = document.querySelector("#range-value");
function showRange() {
  rangeValue.innerHTML = range.value;
}
range.addEventListener("click", showRange);

const allLis = document.querySelectorAll('li');
for (let i = 0; i < allLis.length; i++) {
  // console.log(allLis[i].innerText);
  allLis[i].innerText = "We are the Champions!";
  // console.log(allLis[i].innerText);
}

// console.log("---------------------");

for (let li of allLis) {
  // console.log(li.innerText);
  li.innerHTML = "WE ARE THE <b>CHAMPIONS!</b>";
  // console.log(li.innerText);
}

const li = document.querySelector('li');
li.style.color = "blue";

const allLi = document.querySelectorAll("li");
for (let li of allLi) {
  li.style.color = "black";
}

const allLiss = document.querySelectorAll("li");
const colors = ['red', 'blue', 'green']

allLiss.forEach((li,i) => {
  // const color = colors[i];
  li.style.color = colors[i];
  // console.log(li,color);
})

