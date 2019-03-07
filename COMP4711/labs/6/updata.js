var mysql = require('mysql');
require("./script.js");

var con = mysql.createConnection({
  host: "localhost",
  port: "8080",
  user: "root",
  password: "",
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected");
    con.query ("CREATE DATABASE IF NOT EXISTS quizQues", function(err, result){
        if(err) throw err;
        console.log("Database created");
    });
    
    con.query("use quizQues", function(err, result){
        if(err) throw err;
        console.log("Database used");
    });
    
    // con.query("CREATE TABLE IF NOT EXISTS questions (id INT AUTO_INCREMENT PRIMARY KEY, question VARCHAR(255), answer VARCHAR(255))", function(err, result){
    //   if(err) throw err;
    //     console.log("Table questions created");
    // });
    con.query("CREATE TABLE IF NOT EXISTS questions (id INT AUTO_INCREMENT PRIMARY KEY, question VARCHAR(255))", function(err, result){
        if(err) throw err;
          console.log("Table questions created");
      });
    
    // for(var i = 0; i < newQuestions.length; i++){
    //     con.query("INSERT INTO questions (question, answer) VALUES ('" + newQuestions[i].question + "','" + questions[i].answer + "')", function(err, result){
    //       if(err) throw err;
    //         console.log("Data inserted");
    //     })
    // };
    for(var i = 0; i < output.length; i++){
        con.query("INSERT INTO questions (question) VALUES ('" + output[i] + "')", function(err, result){
          if(err) throw err;
            console.log("Data inserted");
        })
    };
});
