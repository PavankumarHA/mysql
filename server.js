require("dotenv").config();       // import .env file
const express = require("express");
const app = express();


app.get("/server", (req, res)=>{
    res.json({
    success: 1,
    message: "this is rest api working"
    });
});

app.listen(process.env.App_PORT, ()=>{      // one problem.. run the pgm once not execute run again it is execute, and we install npm install --sec-dev nodemon  ,, it is directly execute
    console.log("server up and running on PORT", process.env.App_PORT) 
});



