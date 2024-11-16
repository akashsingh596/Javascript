function SetUserName(username){

    this.username = username
}

function createUser(username,email,password){
    SetUserName.call(this,username)
 
    this.email=email
    this.password = password
}

const chai= new createUser("chai","Chai@gmail.com", "1234")
console.log(chai)