
const crypt = require('bcrypt');


const genHash = async(password) =>{
    try{
       const hash = await crypt.hash(password , 10);
       return hash
    }catch(err){
       console.log(err)
    }
   
   }

const checkPassword = async(password , hash) =>{
    try{
    const check = await crypt.compare(password , hash);
    return check ;
    }catch(err){
        return false
    }
}

   module.exports = {
    genHash ,
    checkPassword
   }