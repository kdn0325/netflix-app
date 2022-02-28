const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./route/auth");
const userRoute = require("./route/users");
const movieRoute = require("./route/movies");
const listRoute = require("./route/lists");


dotenv.config();

mongoose.connect(process.env.MONGO_URL,{

}).then(()=>console.log("DB Connection")).catch((err)=>console.log(err));

app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/movies",movieRoute);
app.use("/api/lists",listRoute);

app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

app.listen(8800,()=>{
    console.log("Backend server is Running");
});