const mongoose = require("mongoose");
const express = require("express");

mongoose
  .connect("mongodb://localhost:27017/formDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Succesful");
  })
  .catch((err) => {
    console.log(err);
  });
