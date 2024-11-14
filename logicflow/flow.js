//if
const isUserLogedIn = true;
const temp = 51;

// <
// >
// <=
// >=
// ==
// ===
// !=
// !==

if (isUserLogedIn) {
  //   console.log("hello");
}

// if (temp < 50) {
//   console.log("temp is hot");
// } else {
//   console.log("temp is to hot");
// }

const score = 45;

if (score > 100) {
  const power = "fly";
  // console.log(`user has power to ${power}`)
} else {
  // console.log("user does not have power")
}

// console.log(`user has power to ${power}`) // out of the scope

///////// ---------short hand notaiton

// const balance = 1000;

// if (balance > 500) console.log("test");

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less then 1200");
// }

const userLoggedIn =true
const debitCard =true
const loggedInfromGoogle =false
const loggedinfromemail = true


// multiple conditon checking

if(userLoggedIn &&  debitCard && 2==2){
// console.log("allowd to purcase")
}

if(loggedInfromGoogle||loggedinfromemail){
    // console.log("user logged in")
}


//////nullish coalesing operation ??:: null and undefined

let val1;

// val1 = 5 ?? 10

val1 = null ?? 10

console.log(val1)

///terinary operator

// condition ?true : false

const iceTea = 60

iceTea <=80? console.log("less than 80") : console.log("greater then 80")