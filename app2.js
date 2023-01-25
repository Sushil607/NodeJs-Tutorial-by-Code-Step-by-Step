const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/e-commerce");

const ProductSchema = mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

const saveInDB = async () => {
  const ProductModel = mongoose.model("products", ProductSchema);
  let data = new ProductModel({
    name: "Note Pro",
    price: 250,
    brand: "MI",
    category: "tablets",
  });
  let result = await data.save();
  console.log(result);
};

// saveInDB();

const updateInDB = async () => {
  const ProductModel = mongoose.model("products", ProductSchema);
  let data = await ProductModel.updateOne(
    { name: "Nokia 1100" },
    { $set: { name: "Nokia 1100 : Toughest Phone", price: 120 } }
  );
  console.log(data);
};

updateInDB();
