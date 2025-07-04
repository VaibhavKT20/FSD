const express = require("express");
const zod = require("zod");

const app = express();
app.use(express.json());

// Define the schema for validation
const schema = zod.array(zod.number());

app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;

  // Use safeParse correctly
  const response = schema.safeParse(kidneys);

  if (!response.success) {
    // If validation fails, return an error
    return res.status(400).json({
      msg: "Invalid input",
      errors: response.error.errors,
    });
  }

  const kidneyLength = kidneys.length;
  res.send({
    msg: `Hello Admin, your kidney is ${kidneyLength} cm long`,
  });
});

// Global error handler
app.use(function (err, req, res, next) {
  res.status(500).json({
    msg: "Sorry, something went wrong",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
