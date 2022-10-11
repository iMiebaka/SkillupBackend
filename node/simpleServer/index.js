const express = require("express");
const fs = require("fs")
const db = require("./db");


// See Step 1
fs.readFile("./history.json", (err) => {
    {
        err != null && fs.writeFileSync("./history.json", JSON.stringify([]))
    }
})

const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


const apiV1 = require("./routes/apiV1")
const apiV2 = require("./routes/apiV2")
const apiV3 = require("./routes/apiV3")

app.use("/api/v1", apiV1)
app.use("/api/v2", apiV2)
app.use("/api/v3", apiV3)

app.listen(3003, () => {
    console.log("Server is running");
    console.log(`http://localhost:${3003}`);
})
