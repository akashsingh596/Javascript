const myobject = {
  js: "JavaScript",
  cpp: "C++",
  rb: "ruby",
  sft: "swift",
};

for (const key in myobject) {
  // console.log(`my key ${key} has value ${myobject[key]}`)
}

const arr = ["js", "ruby", "java", "JS"];

for (const key in arr) {
  // console.log(arr[key])
}

// const map = new Map();
// map.set("IN", "India");
// map.set("usa", "unitedStates");
// map.set("FR", "france");
// map.set("IN", "India");

// for (const key in map){
//     console.log(key)
// } we cannot itterate map values in for-in

const myarr = ["js", "java", "python", "ruby", "cpp"];

// myarr.forEach(function (item) {
//     console.log(item)
// });

// myarr.forEach((item)=>{
//     console.log(item)
// })

// function printme(item){
// console.log(item)
// }

// myarr.forEach(printme)

// myarr.forEach((item ,index , arr)=>{
//     console.log(item,index , arr)
// })


const myCodding = [
    {
        langaugeName : "JAVAScript",
        langfile: "JS"
    },
    {
        langaugeName : "JAVA",
        langfile: "java"
    },
    {
        langaugeName : "script",
        langfile: "typesrcipt"
    }

]


myCodding.forEach((item)=>{
 console.log(item.langfile)
})