/*
falsy value
false , 0 , -0 , bigInt , "", null, undefined, NaN

truty value
"0" , true , "false" , " " , [] , {} , function(){}
*/

let user = []

if(user.length === 0){
    console.log("user not there")
}


let obj = {}

if(Object.keys(obj).length===0){
    console.log("object is empty")
}