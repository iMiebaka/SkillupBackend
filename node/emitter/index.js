
// process.stdout.write("what is your name")

// process.stdin.on("data", (data)=>{
//     console.log(`this is the ${data}`);
// })

const server = http.createServer();
server.on('request', (req,res) => {
    console.log('request received');
    res.end('received')
})





