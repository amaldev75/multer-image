const Imagedata = require("../models/model");

const renderHome = (req, res) => {
  Imagedata.find().then((users) => {
    res.render("home", { users: users });
  });
};

const addUser = (req, res) => {
  const newUser = new Imagedata({
    name: req.body.name,
    file: req.file.filename,
  });
  newUser.save().then((result) => {
    res.redirect("/");
  });
};
module.exports = { renderHome, addUser };
