const express = require('express');
const cors = require('cors');
const morgan = require('morgan')
const router=require('./routes');
const {dbConnection} = require('./db/dbConnection.js');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 8080;
        this.apiUser=`/api/v1/user`;
        this.apiProduct =`/api/v1/product`;
        this.db();
        this.middlewares();
        this.routes();
    }

    async db(){
        await dbConnection();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(morgan("dev"))
        this.app.use(express.urlencoded({extended:false}))
        this.app.use(express.json())
        this.app.use(express.static('./backend/public'))
    }
    routes(){
        this.app.use(this.apiUser,router.user);
        this.app.use(this.apiProduct,router.product);
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log('servidor corriendo en el puerto',this.port);
        })
    }



}

module.exports = Server;
