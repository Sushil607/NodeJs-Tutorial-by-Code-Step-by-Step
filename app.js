const express = require("express");
const { response } = require("express/lib/express");
const dbConnect = require("./mongodb");

const app = express();

// Getting all products
app.get("/products", async (req, res) => {
  let resp = await dbConnect();
  let data = await resp.find().toArray();
  res.send({ products: data });
});

app.listen(3000, () => {
  console.log("Server is listening on PORT : 3000...");
});
