const mongoose = require('mongoose');

const db = async () => {
    try {
        const mongoDB = "mongodb://localhost:27017/dbRelationship";
        const connect = await mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Connection is open for business");
        return connect
    }
    catch (err) {
        console.error(err);
    }
}
db()

// Child Schema
const PersonSchema = new mongoose.Schema({
    name: String,
    age: Number
})

// Set the name of the collection and the Schema
const Person = mongoose.model("Person", PersonSchema);


// Parent Schema
const PersonalityDataSchema = new mongoose.Schema({
    heart: String,
    relationship: String,
    nin: String, 
    personSchema_id: {
        type: mongoose.Schema.Types.ObjectId,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        ref: "Person"
    }
})
// Set the name of the collection and the Schema
const PersonalityData = mongoose.model("PersonalityData", PersonalityDataSchema);



module.exports = {Person, PersonalityData}