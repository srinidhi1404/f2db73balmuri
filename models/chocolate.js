const mongoose = require("mongoose")
const chocolateSchema = mongoose.Schema({
    choclateName: String,
    chocolateCost: Number,
    quantityAvailable: Number
})
module.exports = mongoose.model("Chocolte",
chocolateSchema)