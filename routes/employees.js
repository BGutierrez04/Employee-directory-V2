import express from "express";

import {
  getEmployees,
  getEmployee,
  getRandomEmployee,
  createEmployee,
} from "#db/employees";

// Create our Express router
const router = express.Router();

// GET all employees
router.get("/", (req, res) => {
  const employees = getEmployees();
  res.send(employees);
});

// GET a random employee
// This must come before the /:id route
router.get("/random", (req, res) => {
  const employee = getRandomEmployee();
  res.send(employee);
});

// GET one employee by their ID
router.get("/:id", (req, res) => {
  const { id } = req.params;

  const employee = getEmployee(+id);

  if (!employee) {
    return res.status(404).send(`Employee #${id} not found.`);
  }

  res.send(employee);
});

// POST - Create a new employee
router.post("/", (req, res) => {
  // Make sure a valid name was provided
  if (
    !req.body ||
    typeof req.body.name !== "string" ||
    req.body.name.trim() === ""
  ) {
    return res.status(400).send("A valid employee name is required.");
  }

  // Create the employee
  const newEmployee = createEmployee(req.body.name);

  // Respond with the new employee and status 201
  res.status(201).json(newEmployee);
});

export default router;
