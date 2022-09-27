const express = require("express");
const fs = require("fs")
const { v4: uuid } = require("uuid")

// See Step 1
fs.readFile("./111.json", (err) => {
    {
        err != null && fs.writeFileSync("./111.json", JSON.stringify([]))
    }
})

const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.get("/", (req, res, next) => {
    // See Step 2
    const history = fs.readFileSync("./history.json")
    // See Step 2.2 and 2.3
    res.json(JSON.parse(history))
})

app.post("/sum", (req, res, next) => {
    // See Step 3.1
    const { number1, number2 } = req.body
    // See Step 3.2
    const sum = number1 + number2
    
    // See Step 3.3
    const newData = {
        id: uuid(),
        date: new Date(),
        number1: number1,
        number2: number2,
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