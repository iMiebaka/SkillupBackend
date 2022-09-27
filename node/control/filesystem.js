var fs = require('fs');

// Async
// fs.readFile("input.js", function (e, data) {
//     console.log(data.toString());
// })

// Sync
// const file = fs.readFileSync("input.js")
// console.log(file.toString());


// fs.writeFileSync("some.txt", "hello again", function(e){
//     console.log(e);
// })

fs.appendFileSync("some.txt", "\nWe just updated if")
const theFile = fs.readFileSync("some.txt")

console.log(theFile);