const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Server is running");
});


//CREATE TASKS
app.post("/tasks",(req,res)=>{
    const {text} = req.body;

    const sql = "INSERT INTO tasks (text,completed) VALUES(?,false)";

    db.query(sql,[text],(err,result)=>{
        if(err) return res.status(500).send(err);
        res.json({
            id:result.insertId,
            text:text,
            completed:false
        });
    });
});


//READ TASKS
app.get("/tasks",(req,res)=>{
    db.query("SELECT*FROM tasks",(err,result)=>{
        if(err){
            return res.status(500).send(err);
        };
        res.json(result);
    });
});


//UPDATE TASKS
app.put("/tasks/:id",(req,res)=>{
    const id = req.params.id;
    const{completed} = req.body;

    const sql = "UPDATE tasks SET completed =? WHERE id = ?";

    db.query(sql,[completed,id],(err,result)=>{
        if(err) return res.status(500).send(err);

        res.json({message:"Task updated successifully"});
    });
});


//DELETE TASKS
app.delete("/tasks/:id",(req,res)=>{
    const id = req.params.id;

    const sql = "DELETE FROM tasks WHERE id = ?";

    db.query(sql,[id],(err,result)=>{
        if(err) return res.status(500).send(err);

        res.json({message:"Task deleted successifully"});
    });
});



app.listen(3000,()=>{
    console.log("Server running on http://localhost:3000");
});
