const mongoose = require("mongoose")
const Schema = mongoose.Schema
const DataSchema = new Schema(
  {
    producer_id: Number,
    producer_name: String
  },
  { timestamps: true }
)
module.exports = mongoose.model("Producers", DataSchema, "Producers")