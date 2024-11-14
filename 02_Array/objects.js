//object literals:::
const mysym = Symbol("key1");

const user = {
  name: "akash",
  fullname: "akashsingh",
  age: "25",
  location: "delhi",
  email: "akash@gmail.com",
  isloggedIn: true,
  lastloggedIn: ["monday", "tuesday"],
  [mysym]: "key1",
};

// console.log(user.name);
// console.log(user["location"]);

// console.log(user["fullname"])
// console.log(user)

// console.log(typeof user[mysym]);

user.email = "akash@outlook.com";

// console.log(user)

// user.greeting = function(){
//     console.log("hello")
// }

user.greeting = () => {
  console.log("hello");
};

user.greetingtwo = () => {
  console.log(`hello js user ${user.fullname}`);
};

// console.log(user)
// console.log(user.greeting)

// console.log(user.greetingtwo())

///////// ------------------- ////////////////

///singleton object

// const tinderUser = new Object()

// const tinderUser = {}

// tinderUser.id = Math.random()
// tinderUser.name = "Akash"
// tinderUser.isloggedIn =  false

// console.log(tinderUser)

// const regularUser = {
//     email:"some@gmail.com",
//     fullName:{
//         userName:{
//             firstName:"akash",
//             lastName:"singh"
//         }
        
//     }
// }

// console.log(regularUser.fullName.userName.firstName)


// const obj1 ={
//     1:"a",
//     2:"b",
//     3:"c"
// }

// const obj2 ={
//     4:"d",
//     5:"e",
//     6:"f"
// }

// const obj3 = Object.assign({},obj1,obj2) 
// const obj = {...obj1,...obj2} // we can do like this using spread operator

// console.log(obj)

// console.log(tinderUser)

// console.log(Object.keys(tinderUser))


// const objectVlaues = Object.keys(tinderUser)

// console.log(objectVlaues)

// console.log(Object.entries(tinderUser))


// console.log(tinderUser.hasOwnProperty("isloggedIn"))


////////////------ destructuring ------------//////////////


const course = {
    couseName : "js",
    Price : "999",
    instructor : "Akash"
}

const {instructor : techer} = course


// console.log(techer)

////json//////////



