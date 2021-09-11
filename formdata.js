const mongoose = require("mongoose");
const express = require("express");

const formSchema = new mongoose.Schema({
  Name: {
    type: String,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Phone: {
    type: Number,
    required: true,
    unique: true,
  },
  Review: {
    type: String,
    required: false,
  },
});

const form = new mongoose.model("form", formSchema);
module.exports = form;
