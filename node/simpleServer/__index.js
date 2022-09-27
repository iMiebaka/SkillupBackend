const request = require("http");
const fs = require("fs")

let credentails = [{
    username: "123",
    password: "123"
}]


const http = request.createServer((req, res) => {
    res.setHeader("Content-type", "text/html")
    res.setHeader("Access-Control-Allow-Origin", "*")


    const page = fs.readFileSync("./index.html")
    res.end(page)

})

http.listen(2345, () => {
    console.log("The app is running");
})