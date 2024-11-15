const codding = ["js", "java", "python", "ruby", "cpp"];
// console.log("codding values",codding)
// const values = codding.forEach((item)=>{
// return item
// })

// console.log(values) we can acess foreach loop values outside this loop

//filters/////
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((nums) => {
//   return nums > 4;
// });

// console.log(newNums);

///using forEach loop only to get values

const newnums = [];

// myNums.forEach((num) => {
//   if (num > 4) {
//     newnums.push(num);
//   }
// });

// console.log(newnums)

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// const userbooks = books.filter((bk)=>bk.genre==="History")
let userbooks = books.filter((Book) => {
  return Book.genre === "History";
});

userbooks = books.filter((book) => {
  return book.publish >= 1995 && book.genre === "History";
});

// console.log(userbooks);

///////////////map/////////

// const newarray = codding.map((item) => {
//   return item;
// });

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumber = myNums.map((num)=>{
//  return num+10
// })

const newNumber = [];
myNums.forEach((nums) => {
  let num = nums + 10;
  newNumber.push(num);
});
// console.log(newNumber);

//////////////map filter reduce channing//////////////
const newArray = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

// console.log(newArray)

//////////////////reduce///////////

// const nums = [1, 2, 3];

// const mytotal = nums.reduce(function(acc ,curval){
//     console.log(`acc :${acc} curval :${curval}`)

//     return acc+curval
// },0)

// const mytotal = nums.reduce((acc, curr) => acc + curr, 0);
// console.log(mytotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


let pricetopay =shoppingCart.reduce((acc, item)=>acc + item.price,0)

console.log(pricetopay)