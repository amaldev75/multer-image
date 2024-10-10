const express = require("express");
const app = express();
const path = require("path");
const router = require("./routers/router");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "style")));

app.use(express.urlencoded({ extended: false }));

app.use("/", router);
app.listen(3000, (req, res) => {
  console.log("http://localhost:3000");
});
