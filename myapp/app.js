const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

// app.use((req, res, next) => {
//   console.log("Наше проміжне ПЗ");
//   next();
// });

app.get("/", (req, res) => {
  res.send("Hello World! Do not stop");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact page</h1> <p>ssssssssss</p>");
});

app.get("/contact/:id", (req, res) => {
  res.send(`<h1>Contact</h1> Параметр: ${req.params.id}`);
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
