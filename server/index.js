const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const eventRoute = require("./routes/eventRoute")
const port = process.env.PORT || 5000 ;

dotenv.config();
const cors = require("cors");


 
mongoose.connect(process.env.MONGO_URL)
.then(_=> console.log("connection successful"))
.catch(err=> console.log("database connection fail"))




app.use(express.json({limit: '50mb'}));
app.use(cors()) 
app.use("/api/events", eventRoute)



app.listen(port, () =>{
    console.log(`Le serveur est lancé à : http://localhost:${port}`);
  });