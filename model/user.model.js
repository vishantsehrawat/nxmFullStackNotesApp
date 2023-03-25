const mongoose = require("mongoose");
require("dotenv").config();
const connection = mongoose.connect(process.env.mongoUrl);

// step2 make user schema 

const userSchema = mongoose.Schema({
    email:{type : String},
    pass:{type : String},
    name:{type : String},
    age:{type : Number},
    // notes: [{ type: Schema.Types.ObjectId, ref: 'note' }]
},{
    versionKey:false
})

// now user model for user

const UserModel = mongoose.model("user",userSchema);

module.exports = {connection,UserModel};