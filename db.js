const mongoose = require('mongoose');

const db = async(url) =>{
    try{
 mongoose.connect(url , { 
    useUnifiedTopology:true , useNewUrlParser:true
});
mongoose.connection.once('open' , () =>{
    console.log('Db connected')
})
    }catch(err){
        console.log('Error in connecting to db')
    }
}



module.exports = {
     db
}


// mongodb.connect(url , (err ,connection) =>{
//     if(err){
//         console.log('err in connecting');
//         return ;
//     }
//     console.log('successfully connected');

//     db = connection.db('practice');
//  })