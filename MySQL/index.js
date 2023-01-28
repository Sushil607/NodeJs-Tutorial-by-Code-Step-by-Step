const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "myhiber",
});

// Checking if it is connected
con.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to db...");
  }
});

con.query("select * from student", (err, data) => {
  console.log(data);
});
