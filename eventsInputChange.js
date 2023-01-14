const form = document.querySelector("#form");
const firstName = document.querySelector("#name-input");
const terms = document.querySelector("#terms");
const options = document.querySelector("#options");

form.addEventListener('change', function(e) {
  e.preventDefault();
  console.log("intercepted");
  console.log('Text: ', firstName.value);
  console.log('Checked: ', terms.checked);
  console.log('Selected: ', options.value);
});

let userData = {};

for (let input of [firstName,terms,options]) {
  input.addEventListener('input', ({target}) => {
    const {name, type, value, checked} = target;
    userData[name] = type === "checkbox" ? checked : value;
    console.log(userData);
  })
}

// firstName.addEventListener("input", (e) => {
//   console.log("Changed", e.target.value);
//   userData['name'] = e.target.value;
// })

// terms.addEventListener("input", (e) => {
//   console.log("Changed", e.target.checked);
//   userData['terms'] = e.target.checked;
// })

// options.addEventListener("input", (e) => {
//   console.log("Changed", e.target.value);
//   userData['options'] = e.target.value;
// })

