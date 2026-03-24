
// creating app
const express= require ("express");
const app= express();

// finding out the port
require.env.config();
const PORT= process.env.PORT || 3000;

// adding the middleware
app.use(express.json());

// middleware to deal with media

