const express = require("express"); 
const routes = express.Router();

// fetching the handler functions from the controllers


// const {imageUpload,videoUpload,imageSizeReducer,localFileUpload}
// = require("../controllers/fileUpload");

const {localFileUpload}= require("../controllers/fileUpload");

// api routes;
 
// router.post("/imageUpload",imageUpload);
// router.post("/videoUpload",videoUpload);

router.post("/fileUpload",localFileUpload);

// export the routes;
module.exports = router;
