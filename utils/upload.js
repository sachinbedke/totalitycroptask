const multer = require("multer")
const { v4: uuid } = require("uuid")
const fs = require("fs")
const path = require("path")


const propertyStorage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, uuid() + path.extname(file.originalname))

    },
    destination: (req, file, cb) => {
        if (!fs.existsSync("properties")) {
            fs.mkdirSync("properties")
        }

        cb(null, "properties")
    }
})

const uploadProperty = multer({ storage: propertyStorage }).array("hero", 5)

module.exports = uploadProperty