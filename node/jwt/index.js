const express = require("express")
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())


const user = {
    _id: Object("sdgdjfjgdjgfjgdjgfj"),
    username: "JohnDoe",
    password: "12324455",
    profile: "4 mountain view drive"
}

const jwt = require("jsonwebtoken")

app.get("/home", (req, res) => {
    jwt.sign(user, "1234", (e, token) => {
        try {
            if (e) throw new Error(e)
            res.json({ token });
        } catch (e) {
            console.error(e.message);
            res.status(500).json({ message: e.message });
        }
    })
})

// app.use(validate())

const validate = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1]
    if(token){
        jwt.verify(token, '1234', function(err, payload) {
            try {
                if (err) throw new Error(err)
                res.locals.username = payload._id
                // req.body.siteUsername = payload.username
                // req.body.username = payload.username
                // console.log(payload.username) 
                next()
            } catch (e) {
                console.error(e.message);
                res.status(500).json({ message: e.message });
            }
          });
    }
}

app.get("/protected", validate, (req, res) => {
    console.log(res.locals.username);
    res.status(200).json({
        account: 937974983433,
        name: res.locals.username
    })
})

app.listen(2000, () => console.log("App is running"))