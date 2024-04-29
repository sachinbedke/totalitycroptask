const uploadProperty = require("../utils/upload")
const asyncHandler = require("express-async-handler")
const fs = require("fs/promises")
const path = require("path")
const Property = require("../model/Property")

exports.addProperty = asyncHandler(async (req, res) => {

    uploadProperty(req, res, async err => {
        const {
            title,
            desc,
            price,
            location,
        } = req.body
        if (err) {
            return res.status(400).json({ message: err.message || "unable to upload file" })
        }
        // console.log(req.files)
        const arr = []
        for (const item of req.files) {
            arr.push(item.filename)
        }
        await Property.create({ title, desc, price, location, gallery: arr }
        )


        res.status(201).json({ message: "Property create success" })

    })

})

exports.getProperyes = asyncHandler(async (req, res) => {
    const result = await Property.find()
    res.status(200).json({ message: "Proptery fetch success", result })
})
exports.searchProperty = asyncHandler(async (req, res) => {
    const { term } = req.params
    const result = await Property.find({
        $or: [
            { price: +term },
            { location: term },
            { title: term }
        ]
    })
    res.status(200).json({ message: "Proptery Search success", result })
})

