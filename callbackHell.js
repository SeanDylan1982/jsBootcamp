const newTodo = document.querySelector('input');

setTimeout(() => {
  newTodo.value = "Sean";
}, 3000)

console.log("hello");

const btn = document.querySelector("button");

// setTimeout(() => {
//   btn.style.transform = `translateX(100px)`;
//   setTimeout(() => {
//     btn.style.transform = `translateY(100px)`;
//     setTimeout(() => {
//       btn.style.transform = `translateX(100px)`;
//       setTimeout(() => {
//         btn.style.transform = `translateY(200px)`;
//       }, 1000)
//     }, 2000)
//   }, 1000)
// }, 1000)

const moveX = (element,amount,delay,onSuccess,onFailure) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currLeft = element.getBoundingClientRect().left;
      if (elRight + amount > bodyBoundary) {
        onFailure();
      } else {
      element.style.transform = `translateX(${currLeft + amount}px)`;
      onSuccess();
      }
    }, delay)
  }

// moveX(btn, 10, 1000, () => {
//   moveX(btn, 10, 1000, () => {
//     moveX(btn, 10, 1000, () => {
//       moveX(btn, 10, 1000);
//     });
//   });
// });

moveX(btn,10,1000, ()=>{
  moveX(btn,20,1000, ()=>{
    moveX(btn,30,1000, ()=>{
      moveX(btn,40,1000, ()=>{
        moveX(btn,50,1000, ()=>{
          console.log("Really wide screen");
        },()=>{
          alert("alert");
        })
      },()=>{
        alert("alert");
      })
    },()=>{
      alert("alert");
    })
  },()=>{
    alert("alert");
  })
}, () => {
  alert("alert");
})

moveXPromise(btn,100,1000)
  .then(() => moveXPromise(btn,100,1000))
  .then(() => moveXPromise(btn,200,1000))
  .then(() => moveXPromise(btn,300,1000))
  .then(() => moveXPromise(btn,50,1000))
  .then(() => moveXPromise(btn,50,1000))
  .catch((position)=>{
    alert("alert");
  })