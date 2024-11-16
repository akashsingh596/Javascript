// console.log("hee");

// const user = {
//   userName: "akashSingh",
//   login: true,
//   loginCount: 8,
//   getuserdetails: function () {
//     // return value*2
//     //     console.log(`userName ${this.userName}`)
//     //     console.log(this)
//   },
// };

// console.log(user.userName);
// console.log(user.getuserdetails())
// console.log(this)

// const users = new Object();

/// new is the construction funtion

function user(userName, loginCount, isLoggedIn) {
  this.userName = userName;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  return this;
}

const UserOne = new user("akash", 11, true);
// const UserTwo = new user("singh", 43, false);
console.log(UserOne.constructor);
// console.log(UserTwo);

//// new se sabse phele empty object create jisko instance bolte hai
//// contructor function create hota hai mil jata hai
//// this is used to give all the values in the object
//// last we get the values
