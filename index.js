const express = require("express");
const cors = require("cors");
const { connection } = require("./model/user.model");
const { noteRouter } = require("./routes/note.routes");
const { userRouter } = require("./routes/user.routes");
const authMiddleware = require("./middleware/notesAuth.middleware");
require("dotenv").config();
const port = process.env.port || 3000;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/user",userRouter); // for user route 
//for accessing all the protected notes route,we will need middleware which will
//authorize the request
app.use(authMiddleware);
app.use("/note",noteRouter); // for notes route

// we will connect to db as soon as server is started 
app.listen(port,async ()=>{
    try {
        await connection;
        console.log("connected to db")
        console.log(`server started at ${port}`);
        
    } catch (error) {
        console.log(error);
    }
})
module.exports = app;