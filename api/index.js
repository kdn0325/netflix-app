const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./route/auth");

dotenv.config();

mongoose.connect(process.env.MONGO_URL,{

}).then(()=>console.log("DB Connection")).catch((err)=>console.log(err));

app.use(express.json());
app.use("/api/auth",authRoute);

app.listen(8800,()=>{
    console.log("Backend server is Running");
});