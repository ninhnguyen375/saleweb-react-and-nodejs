const express = require("express")
const mongoose = require("mongoose")
const bodyParer = require("body-parser")
const Products = require("./models/Products")
const logger = require("morgan")
const app = express()
const router = express.Router()
const dbRout = "mongodb://ninhnguyen375:ninhnguyen3755@ds127634.mlab.com:27634/salesweb"
const PORT = 3001
mongoose.connect(dbRout, { useNewUrlParser: true })
let db = mongoose.connection
db.once("open", () => console.log("DB connected <3"))
db.on("error", console.error.bind(console, "MongoDB connection error:"))

app.use(bodyParer.urlencoded({ extended: false }))
app.use(bodyParer.json())
app.use(logger("dev"))

router.get("/getProducts", (req, res) => {
  Products.find((err, data) => {
    if (err) return res.json({ success: false, error: err })
    return res.json({ success: true, data: data })
  })
})

app.use("/api", router)
app.listen(PORT, () => console.log("Connecting on port 3001"))