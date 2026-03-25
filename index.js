
// creating app
const express= require ("express");
const app= express();

// finding out the port
require("dotenv").config();
const PORT= process.env.PORT || 3000;

// adding the middleware
app.use(express.json());

// middleware to deal with media
const fileupload=require("express-fileupload");
app.use(fileupload()); 

// connection with the database
const db=require("./config/database");
db.connect();

// connecting with cloud
const cloudinary=require("./config/cloudinary");
cloudinary.cloudinaryConnect();

// bringing the routes
const Upload = require("./routes/FileUpload");
app.use('api/v1/upload',Upload);

// activating the server
app.listen(PORT,()=>{
    console.log(`App is listening at ${PORT}`);
})


 