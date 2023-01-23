const { writeFileSync } = require("fs");

// console.log("Code Step by Step");
// fs, Buffer, HTTP

writeFileSync("code.txt", "abcd efgh");
console.log("Directory Name --->>> " + __dirname);
console.log("File Name --->>> " + __filename);
