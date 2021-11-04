const {request,response}=require('express');
const Product = require('../models/product.js')

const getProducts= async (req=request,res=response)=>{
    const products = await Product.find().sort('_id');
    res.json(products)
}

const getProduct = async (req=request,res=response)=>{
    const product = await Product.findById(req.params.id)
    res.json(product)
}

const newProduct= async (req=request,res=response)=>{
    const newProduct = new Product(req.body);
    console.log(newProduct)
    await newProduct.save();
    res.json({msg:'Producto creado'})
}

const updateProduct= async (req=request,res=response)=>{
    const product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        context:'query'
    })
    if(!product){
        console.log('error al buscar dato')
    }
    res.json({msg:`${product.name}:Actulizado`})

}
const deleteProduct= async (req=request,res=response)=>{
    const product = await Product.findByIdAndDelete(req.params.id);
    res.json({msg:`${product.name}:Eliminado`})
}

module.exports={
    newProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
}