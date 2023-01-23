const dbConnect = require("./mongodb");

// dbConnect()
//   .then((resp) => resp.find().toArray())
//   .then((products) => console.log(products));

const getData = async () => {
  let resp = await dbConnect();
  let products = await resp.find().toArray();
  console.log(products);
};

getData();
