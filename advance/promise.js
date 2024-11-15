const promiseOne = new Promise(function (resolve, reject) {
  //do an async task
  setTimeout(() => {
    // console.log("Task Is Completed");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  // console.log("Promise Consume")
});

new Promise((res, rej) => {
  setTimeout(() => {
    // console.log("Async two Done")
    res();
  }, 1000);
}).then(() => {
  // console.log("Async Two Resolcew")
});

const PromiseThree = new Promise((res, rej) => {
  setTimeout(() => {
    res({ userName: "AkashSingh", email: "akash@gmail.com" });
  }, 1000);
});

PromiseThree.then((user) => {
  //   console.log(user);
});

const PromiseFour = new Promise((res, rej) => {
  setTimeout(() => {
    let erorr = true;
    if (!erorr) {
      res({
        userName: "AkashSingh",
        passWord: "11234565",
      });
    } else {
      rej("Error");
    }
  }, 1000);
});

PromiseFour.then((user) => {
  //   console.log(user.userName);
  return user.userName;
})
  .then((userName) => {
    // console.log(userName);
  })
  .catch((error) => {
    // console.log(error);
  })
  .finally(() => {
    // console.log("either res or rej")
  });

// const PromiseFive = new Promise((res, rej) => {
//   setTimeout(() => {
//     let erorr = true;
//     if (!erorr) {
//       res({
//         userName: "JavaScript",
//         passWord: "11234565",
//       });
//     } else {
//       rej("Errrorrrrrrrrrrrrrrrrrrrrrrrrr");
//     }
//   }, 1000);
// });

async function consumePromiseFive() {
  // const  response = await PromiseFive
  // console.log(response)
  try {
    const response = await PromiseFive;
    // console.log(response);
  } catch (error) {
    // console.log(error);
  }
}

// consumePromiseFive();

// async function getAllUser() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response)
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("errrrorororroroo",error)
//     }
//     }

// getAllUser()

// async function getUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     // console.log(response)
//     const data = await response.json();
//     console.log(data);
//   } catch (erorr) {
//     console.log("erorrr", erorr);
//   }
//   // try {

//   // } catch (error) {

//   // }
// }
// getUsers()

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
