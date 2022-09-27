const fs = require('fs');

const stream = fs.createReadStream("./file.txt")


stream.on("data", function (data) {
    console.log(data.toString());
})
