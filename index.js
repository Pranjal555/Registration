const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
require("./db/connect");
const formm = require("./Models/formdata");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./templates/views"));
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.render("form", {
    Variable: "My Box",
  });
});
app.get("/successful", (req, res) => {
  res.send("<h1>Successfully filled the form</h1>");
});
app.post("/", async (req, res) => {
  try {
    const form1 = new formm({
      Name: req.body.Name,
      Email: req.body.Email,
      Phone: req.body.Phone,
      Review: req.body.Review,
    });
    const feedback = form1.save();
    res.redirect("/successful");
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(port, () => {
  console.log("App listening on port " + port);
});
