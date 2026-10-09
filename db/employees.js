const employees = [
  { id: 1, name: "Carolynn McGinlay" },
  { id: 2, name: "Lodovico Filon" },
  { id: 3, name: "Jefferey Wahlberg" },
  { id: 4, name: "Kayley Tures" },
  { id: 5, name: "Rickard Carver" },
  { id: 6, name: "Michael Stryde" },
  { id: 7, name: "Averell Santino" },
  { id: 8, name: "Constantina Connue" },
  { id: 9, name: "Verile Bondesen" },
  { id: 10, name: "Gwen Grollmann" },
];

// Keep this as the default export for the tests
export default employees;

// Return all employees
export function getEmployees() {
  return employees;
}

// Find one employee by their ID
export function getEmployee(id) {
  return employees.find((employee) => employee.id === id);
}

// Return a random employee
export function getRandomEmployee() {
  const randomIndex = Math.floor(Math.random() * employees.length);
  return employees[randomIndex];
}

// Create a new employee
export function createEmployee(name) {
  // Find the highest existing ID
  const highestId = Math.max(0, ...employees.map((employee) => employee.id));

  // Give the new employee the next available ID
  const newEmployee = {
    id: highestId + 1,
    name: name,
  };

  // Add the employee to our array
  employees.push(newEmployee);

  // Return the newly created employee
  return newEmployee;
}
