const mongoose=require("mongoose");
const ArticleSchema = new mongoose.Schema({
    
    num: String, 
    description:String,
    stocks:Number,
    numGamme:String,
    prixUni:Number,
    numFournisseur:String,
    isAvailable:String
});
module.exports=mongoose.model("article",ArticleSchema);