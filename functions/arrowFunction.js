// const user ={
//     username : "akash",
//     price : 9999,
//     welcomeMessage:function(){

//         console.log(`${this.username}, welcome to website`)
//     console.log("insidenfucngtio",this)
//     }

// }

// // user.welcomeMessage()

// // user.username = "sam"

// // user.welcomeMessage()

// console.log("normal console",this)

function one() {
  let username = "akash";
  console.log(this.username);
}
// one()

// -------------arrowFunction-------------------

const number = () => {
  let username = "akash";
  console.log(this);
};

// number()


// arrow function
const addTwo = (num1, num2) => {
  return num1 + num2;
};


/// implicit function
const add = (num1, num2) => num1 + num2;

const addtwo = (num1, num2) => (num1 + num2)*100;

const adduser = (num1, num2) => ({
    username:"akash"
})


console.log(addtwo(3, 5));


const myArray = [2,45,78,43]

// myArray.forEach(()=>{

// })