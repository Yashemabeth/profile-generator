class Engineer{
  constructor( name, id, email, github ) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github
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

  getRole() {
    return 'Engineer'
  }
}

let myEngineer = new Engineer("Yashemabeth", 200, "yyy@gmail.com", "yyy@gmail.com" );

console.log(myEngineer.getRole()) 

module.exports = Engineer


