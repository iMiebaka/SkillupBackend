const express = require("express");
const { Person, PersonalityData, Children } = require("./model")

const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.get("/", async (req, res) => {
    const person = await Person.find().populate("personDataSchema_id", "-__v").populate("childrenSchema_id")
    res.json({ person })
})

app.post("/", (req, res) => {
    const { name, age, heart, relationship, nin } = req.body
    try {
        // Add the name and heart
        const personData = new PersonalityData({
            heart, relationship, nin
        })
        personData.save()

        /**
         * Here we receive the heart, relationship, nin
         * add a reference to the previously created (person) 
         */
        const person = new Person({
            name, age, personDataSchema_id: personData
        })
        person.save()
        res.status(201).json({ message: "Data saved successfully" })
    }
    catch (e) {
        res.status(500).json({ message: e })
    }
})

app.post("/children", async (req, res) => {
    const { name, age, toys, person_id } = req.body
    try {
        // Add the name and heart
        const children = new Children({
            name, age, toys
        })
        children.save()

        await Person.findByIdAndUpdate(person_id,
            { $push: { childrenSchema_id: children } }
        )

        res.status(201).json({ message: "Data saved successfully" })
    }
    catch (e) {
        res.status(500).json({ message: e })
    }
})


app.get("/children", async (req, res) => {
    const children = await Children.find()
    res.json({ children })
})

app.put("/children", async (req, res) => {
    const { person_id, children_id } = req.body
    try {
        // Add the name and heart
        const children = await Children.findById(children_id)

        if(!person_id) throw new Error("Parent not found")
        if(!children) throw new Error("Child not found")
        await Person.findByIdAndUpdate(person_id,
            { $push: { childrenSchema_id: children } }
        )

        res.status(200).json({ message: "Data updated successfully" })
    }
    catch (e) {
        res.status(400).json({ message: e.message })
    }
})



app.listen(2000, () => {
    console.log("The app is running");
})