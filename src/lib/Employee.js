class Employee {
  constructor( name, id, email ) {
    this.name = name;
    this.id = id;
    this.email = email;
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

  getRole() {
    return 'Employee'
  }
}

let myEmployee = new Employee("Yashemabeth", 100, "yah@gmail.com");

console.log(myEmployee.getRole()) 

module.exports = Employee