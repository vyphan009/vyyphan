var mysql = require('mysql');
require("./question.js");

var con = mysql.createConnection({
  host: "localhost",
  port: "8080",
  user: "root",
  password: "",
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected");
    con.query ("CREATE DATABASE IF NOT EXISTS mydb", function(err, result){
        if(err) throw err;
        console.log("Database created");
    });
    
    con.query("use mydb", function(err, result){
        if(err) throw err;
        console.log("Database used");
    });
    
    con.query("CREATE TABLE IF NOT EXISTS questions (id INT AUTO_INCREMENT PRIMARY KEY, question VARCHAR(255), answer VARCHAR(255))", function(err, result){
      if(err) throw err;
        console.log("Table questions created");
    });
    
    
    for(var i = 0; i < questions.length; i++){
        con.query("INSERT INTO questions (question, answer) VALUES ('" + questions[i].question + "','" + questions[i].answer + "')", function(err, result){
          if(err) throw err;
            console.log("Data inserted");
        })
    };
});
