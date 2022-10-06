const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/user').then(() => {
    console.log("The connection is open");
}).catch(err => {
    console.log(err);
})


module.exports = mongoose



