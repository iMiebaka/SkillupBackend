import express from "express";
import path from "path";
import livereload from "livereload";
import connectLiveReload from "connect-livereload";

const app = express(),
  PORT = 2000;
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'static')))

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});

app.use(connectLiveReload());



app.get("/", (request, response, next) => {
  //   response.json("Welcome to my API");
  let people = ["geddy", "neil", "alex"];
  response.render("index", { name: "John", people, title: "Home" });
});

app.get("/two", (request, response, next) => {
  response.sendFile(__dirname + "/views/in.html");
});

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
