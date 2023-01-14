// const willGetYouADog = new Promise((resolve,reject) => {
//   const rand = Math.random();
//   if(rand < 0.5){
//     reject(new Error("NO DOG FOR YOU!!!"));
//   } else {
//     resolve(rand);
//   }
// })

// willGetYouADog.then(()=>{
//   console.log("You got a dog!");
// })
// willGetYouADog.catch(()=>{
//   console.log("No dog for you!");
// })

// const makeDogPromise = () => {
//   return new Promise((resolve,reject) => {
//     setTimeout(()=> {
//       const rand = Math.random();
//       if(rand < 0.3){
//         console.log(rand);
//         reject(rand);
//       } else {
//         console.log(rand);
//         resolve(rand);
//       }
//     },5000)
//   })
// }


// makeDogPromise().then(()=>{
//   console.log("You got a dog!");
// }).catch(()=>{
//   console.log(new Error("NO DOG FOR YOU!!!"));
// })

const fakeRequest = (url) => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      const pages = {
        '/users': [
          {
            id:1, username: 'Bilbo'
          },
          {
            id:2, username: "Esmerelda"
          }
        ],
        '/users/1': {
          id: 1,
          username: 'Bilbo',
          upvotes: 360,
          city: 'Lisbon',
          topPostId: 454321
        },
        '/users/2': {
          id: 2,
          username: 'Esmerelda',
          upvotes: 571,
          city: 'Honolulu'
        },
        '/posts/454321': {
          id: 454321,
          title: 'Ladies and Gentlemen, may I introduce my pet pig, Hamlet'
        },
        '/about': "This is the about page"
      }
      const data = pages[url];
      if(data){
      resolve({status: 200, data});
      } else {
        reject({status: 404, error: "Page not found"});
      }
    }, 1000)
  })
}

fakeRequest('/users')
  .then((res) => {
    const id1 = res.data[0].id;
    console.log(id1,res);
    return fakeRequest(`/users/${id1}`);
  })
  .then((res) => {
    const postId = res.data.topPostId;
    console.log(postId,res);
    return fakeRequest(`/posts/${postId}`)
  })
  .then((res) => {
    const title = res.data.title;
    console.log(title,res);
  })
  .catch((err) => {
    console.log("Error: ", err.status, err.error);
  })

// fakeRequest('/users')
//   .then((res)=>{
//     console.log("Success");
//     console.log("Status: ", res.status);
//     console.log(res.data);
//   })
//   .catch((res)=>{
//     console.log("Failure");
//     console.log("Status: ", res.status);
//     console.log(res.error);
//   })

// fakeRequest('/about')
//   .then((res)=>{
//     console.log("Success");
//     console.log("Status: ", res.status);
//     console.log(res.data);
//   })
//   .catch((res)=>{
//     console.log("Failure");
//     console.log("Status: ", res.status);
//     console.log(res.error);
//   })

// fakeRequest()
//   .then((res)=>{
//     console.log("Success");
//     console.log("Status: ", res.status);
//     console.log(res.data);
//   })
//   .catch((res)=>{
//     console.log("Failure");
//     console.log("Status: ", res.status);
//     console.log(res.error);
//   })