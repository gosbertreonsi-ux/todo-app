const mysql = require("mysql2");

const db = mysql.createConnection({
    host:"localhost",
    user:"dev",
    password:"1234",
    database:"todo_app",
    port:3307
});

db.connect((err)=>{
    if(err){
        console.log("Database connection failed",err);
    }else{
        console.log("Database connected");
    }
});

module.exports = db;