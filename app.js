const express = require("express");
const { response } = require("express/lib/express");
const dbConnect = require("./mongodb");
const mongodb = require("mongodb");

const app = express();

// Middleware for converting to JSON
app.use(express.json());

// Getting all products
app.get("/products", async (req, res) => {
  let resp = await dbConnect();
  let data = await resp.find().toArray();
  res.send({ products: data });
});

// Add new product to the existing products
app.post("/products", async (req, res) => {
  let newProduct = req.body;
  let resp = await dbConnect();
  let result = await resp.insertOne(newProduct);
  res.send(result);
});

// Update a product based on name
app.put("/products/:name", async (req, res) => {
  let updatedProduct = req.body;
  let resp = await dbConnect();
  let result = await resp.updateOne(
    { name: req.params.name },
    { $set: updatedProduct }
  );
  res.send(result);
});

// Delete a product based on id
app.delete("/products/:id", async (req, res) => {
  const id = new mongodb.ObjectId(req.params.id);
  let resp = await dbConnect();
  let result = await resp.deleteOne({ _id: id });
  res.send(result);
});

// Get a single product based on id
app.get("/products/:id", async (req, res) => {
  const id = new mongodb.ObjectId(req.params.id);
  let resp = await dbConnect();
  let product = await resp.find({ _id: id }).toArray();
  res.send(product[0]);
});

app.listen(3000, () => {
  console.log("Server is listening on PORT : 3000...");
});
