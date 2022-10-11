// const router = require("express").Router()
const { v4: uuid } = require("uuid")
const express = require("express")
const router = express.Router()
const crud = require("../crud")

router.get("/", async (req, res, next) => {
    const { id } = req.query
    let data
    if (id) {
        data = await crud.find({ _id: id })   // run if defined
    }
    else {
        data = await crud.find()              //run if undefined
    }
    res.json({
        crud: data,
        "message": "Here is our data",
    })
})

router.get("/:id", async (req, res, next) => {
    const { id } = req.params
    const data = await crud.find({ _id: id })
    res.json({
        crud: data,
        "message": "Here is our data",
    })
})


router.post("/", (req, res, next) => {
    const { name, email, password } = req.body
    try {
        const data = new crud({ name: name, email: email, password: password })
        data.save()
        res.json({
            "message": "Data entered successfully",
        })
    }
    catch (err) { 
        res.send(400).json({ err })
    }
})


router.put("/", (req, res, next) => {
    res.json({
        "message": "Data updated successfully",
    })
})

router.delete("/", (req, res, next) => {

    res.json({
        "message": "Data delete successfully",
    })
})


module.exports = router