const express = require("express");
const { Person, PersonalityData } = require("./model")

const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.get("/", async (req, res) => {
    const person = await PersonalityData.find().populate("personSchema_id", "-__v")
    res.json({ person })
})

app.post("/", (req, res) => {
    const { name, age, heart, relationship, nin } = req.body
    try {
        // Add the name and heart
        const person = new Person({
            name, age
        })
        person.save()

        /**
         * Here we receive the heart, relationship, nin
         * add a reference to the previously created (person) 
         */
        const personData = new PersonalityData({
            heart, relationship, nin, personSchema_id: person
        })
        personData.save()
        res.status(201).json({ message: "Data saved successfully" })
    }
    catch (e) {
        res.status(500).json({ message: e })
    }
})

app.listen(2000, () => {
    console.log("The app is running");
})