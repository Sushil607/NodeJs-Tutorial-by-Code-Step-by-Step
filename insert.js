const dbConnect = require("./mongodb");

const insertData = async () => {
  let resp = await dbConnect();
  const result = await resp.insertMany([
    {
      name: "Iphone 14",
      brand: "Apple",
      price: 50,
      category: "mobile",
    },
    {
      name: "Iphone 14",
      brand: "Apple",
      price: 50,
      category: "mobile",
    },
    {
      name: "Iphone 14",
      brand: "Apple",
      price: 50,
      category: "mobile",
    },
  ]);
  if (result.acknowledged) {
    console.log("Data inserted successfully.....");
  }
};

insertData();
