const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Server is running");
});

app.get("/tasks",(req,res)=>{
    db.query("SELECT*FROM tasks",(err,result)=>{
        if(err){
            return res.status(500).send(err);
        };
        res.json(result);
    });
});

app.listen(3000,()=>{
    console.log("Server running on http://localhost:3000");
});
