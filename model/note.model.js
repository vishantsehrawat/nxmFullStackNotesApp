const mongoose = require("mongoose");
// const connection = mongoose.connect("mongodb://127.0.0.1:27017/fullStackApp");

// step2 make user schema 

const noteSchema = mongoose.Schema({
    title:{type : String},
    note:{type : String},
    category:{type : String},
    author:{type : String},
    userId:{type:String},
    // userId:[{ type: Schema.Types.ObjectId, ref: 'user' }]
},{
    versionKey:false
})

// now user model for user

const NoteModel = mongoose.model("note",noteSchema);

module.exports = {NoteModel};