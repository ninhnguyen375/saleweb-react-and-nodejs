const mongoose = require("mongoose")
const Schema = mongoose.Schema
const DataSchema = new Schema(
  {
    product_id: Number,
    product_name: String,
    product_price: String,
    product_img: String
  },
  { timestamps: true }
)
module.exports = mongoose.model("Products", DataSchema, "Products")