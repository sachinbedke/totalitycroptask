const { addProperty, getProperyes, searchProperty } = require("../controller/propertyController")

const router = require("express").Router()

router
    .get("/get-proptery", getProperyes)
    .get("/search-proptery/:term", searchProperty)
    .post("/add-proptery", addProperty)


module.exports = router