const dbConnect = require("./mongodb");

const updateData = async () => {
  let resp = await dbConnect();
  let result = await resp.updateOne(
    { name: "Max 2  Pro" },
    { $set: { name: "Max 2 Pro", price: 62, category: "tablet" } }
  );
  if (result.acknowledged) {
    console.log("Data updated successfully..");
  }
};

updateData();
