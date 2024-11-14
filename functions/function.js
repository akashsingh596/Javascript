// const { log } = require("console");

function sayMyName() {
  console.log("hello");
  console.log("object");
}

// sayMyName();

// function addtwoNumber(num1, num2) {
//   console.log(num1+num2)
// }
// const result = addtwoNumber(3,4)

// console.log(result) /// undifiend bcz of return value is not assigend

function addtwoNumber(num1, num2) {
  //   let result = num1+num2
  //   return result

  return num1 + num2;
}

// const Result = addtwoNumber(3,5)

// console.log(result)

function loginUserMessage(username = "Hello") {
  if (!username) {
    console.log("pls give user name");
    return;
  }
  return `${username} just Logged In`;
}

// console.log(loginUserMessage("akash"))

// console.log(loginUserMessage("akash"));

// function calculateCartPrice(...num1) {
//   return num1;
// }



////////---------krna hai baad mai forloop and map ke time-------------
// const mycalcuatecartprice = calculateCartPrice(200,232,23524,454365,356,24323,23432,132423)

// const newPrice = mycalcuatecartprice.forEach(()=>{
// let price = 
// })
// console.log(newPrice)

const user = {
    username:"akash",
    price:199
}

function handleObject(anyobject){
console.log(`my name is ${anyobject.username}and price ${anyobject.price}`)
}

// handleObject({
//     username:"singh",
//     price:1996787
// })


const myNewArray = [200,400,100,600]

function myfunction(getarray){
return getarray[2]
}

console.log(myfunction([200,400,9000,100,600]))