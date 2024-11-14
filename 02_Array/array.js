// array

// const myHeors = ["shaktiman", "naagraj"]

// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

// const myArr = [0, 1, 2, 3, 4, 5]


// console.log("A ", myArr);

// const mynew1 = myArr.slice(1, 3)

// console.log(mynew1);

// console.log("B ", myArr);
//  console.log("ajsdkasdasd" ,mynew1)

// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log("-------------",myArr)
// console.log(myn2);

//slice() creates a new array with a portion of 
//elements copied from the original array, 
//while splice() mutates the original array itself by 
//removing, 
//replacing or adding elements to it


const marvel_heros = ["thor", "IronMan", "spiderman"]

const dc_heros = ["superman","flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros[3])

const allHeros = marvel_heros.concat(dc_heros)

// console.log(allHeros)


const newheros = [...dc_heros,...marvel_heros]


// console.log("NewHeros",newheros)


const anotherarray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

let myrealArray = anotherarray.flat(Infinity)

// console.log(myrealArray)

// console.log(Array.isArray("myrealArray"))

// console.log(Array.from("myrealArray"))

console.log(Array.from({name:"Akash"}))  // intersting case we will get empty array


const sc1 = 100
const sc2 = 300
const sc3 = 120
const sc4 = 1020
const sc5 = 100111
const sc6 = 100

console.log(Array.of(sc1,sc2,sc3,sc4,sc5))
