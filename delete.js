const dbConnect = require("./mongodb");

const deleteData = async () => {
  let resp = await dbConnect();
  let result = await resp.deleteMany({ name: "Iphone 14" });
  if (result.acknowledged) {
    console.log("Data deleted successfully...");
  }
};

deleteData();
