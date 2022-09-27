const express = require("express");
const fs = require("fs")
const { v4: uuid } = require("uuid")

fs.readFile("./111.json", (err, data) => {
    console.log(err);
    {
        err != null && fs.writeFileSync("./111.json", JSON.stringify([]))
    }
})

const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.get("/", (req, res, next) => {
    const history = fs.readFileSync("./history.json")
    res.json(JSON.parse(history))
})

app.post("/sum", (req, res, next) => {
    const { number1, number2 } = req.body
    // const number1 = Math.random() * 10000
    // const number2 = Math.random() * 10000
    const sum = number1 + number2

    const newData = {
        id: uuid(),
        date: new Date(),
        number1: number1,
        number2: number2,
        sum: sum
    }

    res.status(201).json({
        "message": "Data calulated successfully",
        newData: newData
    })

    const historyRaw = fs.readFileSync("./history.json")
    const history = JSON.parse(historyRaw)
    history.push(newData)
    fs.writeFileSync("./history.json", JSON.stringify(history))
})

app.delete("/sum", (req, res, next) => {
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

app.listen(3003, () => {
    console.log("Server is running");
    console.log(`http://localhost:${3003}`);
})