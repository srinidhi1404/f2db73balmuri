const mongoose = require("mongoose")
const chocolateSchema = mongoose.Schema({
    choclateName: {type:String},
    chocolateCost: { type: Number, min: 10, max: 1000 }, 
    quantityAvailable: {type: Number, min: 10}
})
module.exports = mongoose.model("chocolate",
chocolateSchema)