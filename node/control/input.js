process.stdout.write("Hello\n")


process.stdout.write("What is your name: ")
process.stdin.on("data", (data) => {
    console.log(data);
    process.exit()
})


