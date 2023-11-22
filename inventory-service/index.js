// inventory-service/index.js
const express = require("express");
const app = express();
const port = 4001;

app.get("/inventory", (req, res) => {
  res.json({ message: "List of Inventory" });
});

app.listen(port, () => {
  console.log(`Inventory service listening at http://localhost:${port}`);
});
