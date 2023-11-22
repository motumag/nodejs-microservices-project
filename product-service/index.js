// product-service/index.js
const express = require("express");
const app = express();
const port = 4003;

app.get("/products", (req, res) => {
  res.json({ message: "List of products" });
});

app.listen(port, () => {
  console.log(`Product service listening at http://localhost:${port}`);
});
