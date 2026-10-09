import express from "express";
import employeeRouter from "./routes/employees.js";

// Create the Express application
const app = express();

export default app;

// Middleware to read JSON request bodies
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Hello employees!");
});

// Connect our employees router
app.use("/employees", employeeRouter);

// Catch-all error handling middleware
// Must be placed after all routes
app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).send("Internal Server Error");
});
