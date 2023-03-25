const express = require("express");
// const bcrypt = require("bcrypt");
// const jwt = require('jsonwebtoken');
const { NoteModel } = require("../model/note.model");
const noteRouter = express();
noteRouter.use(express.json());

// add a new note 
noteRouter.post("/addnote",async (req,res)=>{
    const newNote = req.body;
    console.log(newNote)
    try {
        const note= NoteModel(newNote);
        await note.save();
        res.status(200).send({msg:"Note created"})
    } catch (error) {
        console.log(error)
        res.status(200).send({msg:"Cannot create note"})
    }
})


// get all the notes of the particular user
noteRouter.get("/notes",async (req,res)=>{
    // const userId = decoded.userId;
    // console.log(userId);
    const newNote = req.body;
    console.log(newNote)
    try {
        const myNotes= await NoteModel.find({userId:newNote.userId});
        console.log(myNotes);
        res.status(200).send({msg:"Note fetched successfully",data:myNotes})
    } catch (error) {
        console.log(error)
        res.status(200).send({msg:"Cannot fetch notes"})
    }
})

//delete a note
noteRouter.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const deletedNote = await NoteModel.findByIdAndDelete(id);
      if (!deletedNote) {
        return res.status(404).send({ msg: 'Note not found' });
      }
      return res.status(200).send({ msg: 'Note deleted', deletedNote });
    } catch (error) {
      console.error(error);
      return res.status(500).send({ msg: 'Unable to delete note' });
    }
  });

module.exports={
    noteRouter
}