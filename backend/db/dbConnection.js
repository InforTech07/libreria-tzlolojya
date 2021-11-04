const mongoose = require('mongoose');

const dbConnection= async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_CNN,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log('basedatos online');
    } catch (error) {
        console.log(error);
     throw new Error('erro al iniciar la base datos');
    }
}

module.exports={
    dbConnection
}