const mongoose = require('mongoose');



const db = async () => {
    try {
        const mongoDB = "mongodb://localhost:27017/user";
        const connect = await mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Connection is open for business");
        return connect
    }
    catch (err) {
        console.error(err);
    }
}
db()

module.exports = db