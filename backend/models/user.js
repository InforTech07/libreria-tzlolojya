const {Schema,model}=require('mongoose');
const bycrypt = require('bcrypt');
const userSchema=new Schema({
    username:String,
    password:String,
},
{
  timestamps: true,
  versionKey: false,
}
)

userSchema.methods.encryptPassword= async(password)=>{
    const salt = await bycrypt.genSalt(10);
    return bycrypt.hash(password,salt)
}

userSchema.methods.comparePassword = async function(password){
    return await bycrypt.compare(password,this.password);
}


module.exports= model('User',userSchema);