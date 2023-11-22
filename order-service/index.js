// order-service/index.js
const express = require("express");
const app = express();
const port = 4002;

app.get("/orders", (req, res) => {
  res.json({ message: "List of orders" });
});

app.post("/orders/create", (req, res) => {
  res.json({ message: "Orders are created" });
});

app.listen(port, () => {
  console.log(`Order service listening at http://localhost:${port}`);
});
