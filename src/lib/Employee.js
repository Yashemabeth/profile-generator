class Employee {
  constructor( name, id, email ) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name 
  }

  getId() {}

  getEmail() {}

  getRole() {
    return 'Employee'
  }
}

let myEmployee = new Employee("My Employee", Yashemabeth);
document.getElementById("demo").innerHTML =
"My Employee Is" + myEmployee.name() + "Yashemabeth"