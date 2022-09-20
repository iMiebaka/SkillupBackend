const express = require("express");

const app = express()

app.get("/", (req, res) => {
    setTimeout(() =>
        res.json("Welcome to app")
        , 5000)
})


app.get("/async", (req, res) => {
     Promise.resolve(() => {
        setTimeout(() =>
            res.json("Welcome to app")
            , 5000)
    })
})


app.listen(3000, () => {
    console.log("App is running");
})

