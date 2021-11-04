const {Schema,model}=require('mongoose');

const ProductSchema=new Schema({
    name:{type: String,required:true},
    description:{type: String,required:true},
    imgUrl:{type:String,required:true},
    amount:{type: Number,default:0},
    price:{type:Number,required:0},
    category:{type:String,required:true},
    created_at:{type:Date,default:Date.now}
})

module.exports= model('Product',ProductSchema);