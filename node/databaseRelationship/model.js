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

// Parent Schema
const PersonSchema = new mongoose.Schema({
    name: String,
    age: Number,
    personDataSchema_id: {
        type: mongoose.Schema.Types.ObjectId,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        ref: "PersonalityData"
    },
    childrenSchema_id: [{
        type: mongoose.Schema.Types.ObjectId,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        ref: "Children"
    }]
})

// Set the name of the collection and the Schema
const Person = mongoose.model("Person", PersonSchema);


// Child Schema
const PersonalityDataSchema = new mongoose.Schema({
    heart: String,
    relationship: String,
    nin: String, 
})
// Set the name of the collection and the Schema
const PersonalityData = mongoose.model("PersonalityData", PersonalityDataSchema);

const ChildrenSchema = new mongoose.Schema({
    name: String,
    age: Number,
    toys: Number
})
const Children = mongoose.model("Children", ChildrenSchema);


module.exports = {Person, PersonalityData, Children}