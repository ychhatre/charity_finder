const express = require("express");
const app = express(); 
const cors = require("cors"); 
require("dotenv").config({path: "./.env"})
const pool = require("./db"); 
const usersRoute = require("./routes/usersRoute")

//middleware for application 
app.use(express.json()); 
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());  

//middleware routes
app.use("/api/users", usersRoute); 


app.get("/", (req,res) => {
    res.send("Hello Yash!")
})

app.listen(5000, () => {
    console.log("Server is running...")
})