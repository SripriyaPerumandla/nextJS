import mongoose from 'mongoose';
const productModel=new mongoose.Schema({
    name:String,
    price:String,
    company:String,
    color:String,
    category:String
});
export const Product=mongoose.models.products||mongoose.model('products',productModel)
//the above line says mongodb to create a new collection if it doesn't exist already or 
//use the existing one.
//mongoose.model('products',productModel), here the first param is from atlas collection name
//second param is from the schema name we have created