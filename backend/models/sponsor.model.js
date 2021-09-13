const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sponsorSchema = new Schema({
  timestamps: true,
});

const Sponsor = mongoose.model("Sponsor", sponsorSchema);

module.exports = Sponsor;