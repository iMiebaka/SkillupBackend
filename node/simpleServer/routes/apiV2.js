// const router = require("express").Router()
const { v4: uuid } = require("uuid")
const express = require("express")
const router = express.Router()
const fs = require("fs")

router.get("/", (req, res, next) => {
    // See Step 2
    const history = fs.readFileSync("./history.json")
    // See Step 2.2 and 2.3
    res.json(JSON.parse(history))
})


router.post("/sum", (req, res, next) => {
    // See Step 3.1
    const { num1, num2 } = req.body
    // See Step 3.2
    const sum = num1 + num2

    // See Step 3.3
    const newData = {
        id: uuid(),
        date: new Date(),
        num1: num1,
        num2: num2,
        sum: sum
    }

    // See Step 3.4
    res.status(201).json({
        "message": "Data calulated successfully",
        newData: newData
    })

    // See Step 3.5
    const historyRaw = fs.readFileSync("./history.json")
    // See Step 3.6
    const history = JSON.parse(historyRaw)
    // See Step 3.7
    history.push(newData)
    // See Step 3.8
    fs.writeFileSync("./history.json", JSON.stringify(history))
})

router.delete("/sum", (req, res, next) => {
    const historyRaw = fs.readFileSync("./history.json")
    const history = JSON.parse(historyRaw)
    const newHistory = history.filter((item, i) => {
        if (item.id != req.query.query) {
            return item
        }
    })

    res.json({
        "message": "Data delete successfully",
    })
    fs.writeFileSync("./history.json", JSON.stringify(newHistory))
})


module.exports = router