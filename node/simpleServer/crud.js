const mongoose = require("mongoose")

const crud = new mongoose.Schema({
    name: {
        type: String,
        default: "Hello"
    },
    email: String,
    password: String,
});


module.exports = mongoose.model('crud', crud);