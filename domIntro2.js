const todoBtn1 = document.querySelector('#todoBtn1');
const todoBtn2 = document.querySelector('#todoBtn2');
const todoBtn3 = document.querySelector('#todoBtn3');
const todo1 = document.querySelector("#todo1");
const todo2 = document.querySelector("#todo2");
const todo3 = document.querySelector("#todo3");

function crossOut1() {
  todo1.classList.toggle("done");
}
todoBtn1.addEventListener("click", crossOut1);

function crossOut2() {
  todo2.classList.toggle("done");
}
todoBtn2.addEventListener("click", crossOut2);

function crossOut3() {
  todo3.classList.toggle("done");
}
todoBtn3.addEventListener("click", crossOut3);

const appContainer = document.querySelector("#app-container");
const newH2Element = document.createElement('h2');
newH2Element.textContent = "New H2 Element";
appContainer.appendChild(newH2Element);

const body = document.querySelector("body");
body.classList = "bg-image";

const newImg = document.createElement("img");
newImg.src = "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80";
newImg.style.width = "300px";
document.body.appendChild(newImg);

const newLink = document.createElement("a");
newLink.innerText = "New Link to Click";
newLink.href = "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80";
// document.body.appendChild(newLink);

const firstP = document.querySelector("p");
firstP.appendChild(newLink);

const parentUl = document.querySelector('ul');
const newLi = document.createElement("li");
newLi.innerText = "I am a new Li!";
parentUl.insertBefore(newLi, parentUl.firstChild);
