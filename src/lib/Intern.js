class Intern {
  constructor( name, id, email, github, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github
    this.school = school
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
  getSchool() {
    return this.school
  }

  getRole() {
    return 'Intern'
}
}

let myIntern = new Intern("Sam", 300, "yyy@gmail.com", "www.github.com", "01212345678" );

console.log(myIntern.getRole()) 

module.exports = Intern