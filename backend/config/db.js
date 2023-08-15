const mongoose = require("mongoose");
const dbUser = 'mlsilveira'
const dbPassword = 'dona2801'

const conn = async () =>{
    try{
        const dbConn = await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.qwx2vmp.mongodb.net/`)
    }catch(error){}
}
