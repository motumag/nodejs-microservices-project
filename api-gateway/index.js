// api-gateway/index.js
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();
const port = 3000;

// Order Service
app.use(
  "/orders",
  createProxyMiddleware({ target: "http://localhost:4002", changeOrigin: true })
);

// Inventory Service
app.use(
  "/inventory",
  createProxyMiddleware({ target: "http://localhost:4001", changeOrigin: true })
);

// Product Service
app.use(
  "/products",
  createProxyMiddleware({ target: "http://localhost:4003", changeOrigin: true })
);

app.listen(port, () => {
  console.log(`API Gateway listening at http://localhost:${port}`);
});
