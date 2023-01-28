const express = require("express");
const { response } = require("express/lib/express.js");
const con = require("./config.js");

const app = express();

app.use(express.json());

app.get("/students", (req, res) => {
  con.query("select * from student", (err, students) => {
    if (err) {
      console.log(err);
    } else {
      res.send(students);
    }
  });
});

app.post("/students", (req, res) => {
  const newStudent = req.body;
  con.query("insert into student SET ?", newStudent, (err, result, fields) => {
    if (err) throw err;
    res.send(result);
  });
});

app.put("/students/:id", (req, res) => {
  const data = [
    req.body.name,
    req.body.duration,
    req.body.course,
    req.body.city,
    req.params.id,
  ];
  con.query(
    "update student SET  name=?,duration=?,course=?, city=? where id = ?",
    data,
    (err, result, fields) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

app.delete("/students/:id", (req, res) => {
  const id = req.params.id;
  con.query(`delete from student WHERE id = ${id}`, (err, result, fields) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(3000, () => {
  console.log("Server is listening on PORT : 3000 ...");
});
