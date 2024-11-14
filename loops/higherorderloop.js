// for of

const myarr = [1, 2, 3, 4, 5];

for (const num of myarr) {
  // console.log(num)
}

const greeting = "Hello World!";

for (const greet of greeting) {
  // console.log(`each char ${greet}`)
}

// Maps

const map = new Map();
map.set("IN", "India");
map.set("usa", "unitedStates");
map.set("FR", "france");
map.set("IN", "India");

// console.log(map)

for (const [key, value] of map) {
  // console.log(key,":- ",value)
}

const myObj = {
    "game1":"NFS",
    "game2" : "spideman"
};

// for (const [key,value] of myObj) {
//     console.log(`my obj ${key} and value ${value}`)
// } not working on objects

