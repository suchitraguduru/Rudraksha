const mongoose = require("mongoose");
const LmsSchema = new mongoose.Schema({});
const Lms = mongoose.model("Leave master table", LmsSchema);
module.exports = Lms;
