var employees = [
    {
    "firstName":"John",
    "lastName":"Doe"
    },
    {
    "firstName":"Anna",
    "lastName":"Smith"
    },
    {
    "firstName":"Peter",
    "lastName":"Jones"
    }
  ];

function employeeList(newName) {
  var name =   document.getElementById("test");
  name.innerHTML = employees[2].firstName + " " + employees[2].lastName;
}
