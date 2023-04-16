const mongoose = require ("mongoose");
const Schema=mongoose.Schema;//Extract schema object from mongoose 
//Define the secret code schema 
const secretCodeSchema= new mongoose.mongoose.Schema({
    user:{ 
        type:Schema.Types.ObjectId,
        ref:"user"// referrence to the user colection :jointure user secret code:  kol user andou code 
    },
    date:{
        type:Date,
        default:new Date()// set the defaultvalue to the curent day 
    },
    code:Number, // Numeric field for the secret code
});
module.exports=user=mongoose.model("secretcode",secretCodeSchema)