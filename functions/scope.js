function one() {
  const username = "akash";
  function two() {
    const website = "google";
    console.log(username); // able to access clousores
  }
  //   console.log(website); // wont be able to access website due to scope
  two();
}
// one();

if (true) {
  const username = "akash";
  if (username === "akash") {
    const website = "youtube";
    // console.log(username + website); // able to console
  }
  //   console.log(website) // not able out of scope
}
// console.log(username)//not able out of scope

// ---------------+--------------------------


// console.log(addone(5));
// function addone(num) {
//   return num + 1;
// }


// addtwo(5)
// const addtwo = function (num) {
//   return num + 2;
// };



