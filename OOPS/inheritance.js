class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USER loged In ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username)
    this.email = email;
    this.password = password;
  }
  addCCourse(){
    console.log(`Course added by ${this.username}`)
  }
}

const teacher = new Teacher ("akash","akash@gmail.com",1234)

const tea = new User("tea")

// console.log(tea.logMe())
// console.log(teacher.addCCourse())


