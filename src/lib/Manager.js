class Manager {
  constructor( name, id, email, github, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github
    this.officeNumber = officeNumber
  }

  getName() {
    return this.name 
  }

  getId() {
    return this.id
  }

  getEmail() {
    return this.email
  }

  getGithub() {
    return this.github
  }

  getOfficeNumber() {
    return this.officeNumber
  }

  getRole() {
    return 'Manager'
  }
}

let myManager = new Manager("Joey", 200, "yyy@gmail.com", "www.github.com", "01212345678" );

console.log(myManager.getRole()) 

module.exports = Manager