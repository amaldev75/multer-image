const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/userimage")
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.error(err, "error");
  });
const user = new mongoose.Schema({
  name: String,
  file: String,
});

module.exports = mongoose.model("Imagedata", user);
