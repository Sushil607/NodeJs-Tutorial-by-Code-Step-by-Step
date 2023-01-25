const express = require("express");
const { response } = require("express/lib/express");
// Configuration, already executed if imported
require("./config");
const Product = require("./product");
const app = express();

app.use(express.json());

app.post("/create", async (req, res) => {
  let newProduct = new Product(req.body);
  let result = await newProduct.save();
  res.send(result);
});

app.get("/products", async (req, res) => {
  let products = await Product.find();
  res.send(products);
});

app.delete("/products/:id", async (req, res) => {
  const id = req.params.id;
  let data = await Product.deleteOne({ _id: id });
  res.send(data);
});

app.put("/products/:id", async (req, res) => {
  const id = req.params.id;
  const updatedProduct = req.body;
  let data = await Product.updateOne({ _id: id }, { $set: updatedProduct });
  res.send(data);
});

app.listen(3000, () => {
  console.log("Server is listening on PORT 3000...");
});
