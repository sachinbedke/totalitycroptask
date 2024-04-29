const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        // required: true
    },
    desc: {
        type: String,
        // required: true
    },
    price: {
        type: Number,
        // required: true
    },
    location: {
        type: String,
        // required: true
    },
    gallery: {
        type: [String],
        // required: true
        // default: "dummy.jpg"
    },
},
    {
        timestamps: true
    })

module.exports = mongoose.model("property", productSchema)