class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log`user logedIn : ${this.username}`;
  }
   creatID() {
    return `123`;
  }
}

const newUser = new User("akash");

console.log(newUser.logMe());
console.log(newUser.creatID());



