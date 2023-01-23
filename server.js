const express = require("express");
const path = require("path");
const reqFilter = require("./middleware");
const route = express.Router();

const app = express();
app.set("view engine", "ejs");

const dirPath = path.join(__dirname, "public");

// app.use(reqFilter);

route.use("/", reqFilter);

app.get("/", (req, res) => {
  res.sendFile(`${dirPath}/index.html`);
});

app.get("/users", reqFilter, (req, res) => {
  res.send("<h1>Welcome, to users page!!!</h1>");
});

app.get("/profile", (req, res) => {
  const users = [
    {
      name: "Sushilkumar",
      lastname: "Bodade",
      age: 24,
    },
    {
      name: "Vivek",
      lastname: "Bodade",
      age: 27,
    },
    {
      name: "Sumit",
      lastname: "Bodade",
      age: 30,
    },
  ];
  res.render("profile", { users });
});

app.get("/about", (req, res) => {
  res.sendFile(`${dirPath}/about.html`);
});

route.get("/contact", (req, res) => {
  res.sendFile("Contact Page");
});

app.use("/", route);

route.get("/help", (req, res) => {
  res.sendFile(`${dirPath}/help.html`);
});

app.get("*", (req, res) => {
  res.sendFile(`${dirPath}/PageNotFound.html`);
});

app.listen(3000, () => {
  console.log("Server is listening on PORT 3000");
});
