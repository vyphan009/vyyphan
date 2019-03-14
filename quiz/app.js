var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');

var app  = express();
var port = 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); // template engine
app.use(bodyParser.urlencoded({ extended: false }));

/* database settings */
const db = mysql.createConnection({
    host: "localhost",
    user: "nodejs",
    password: "nodejs",
    database: "quiz"
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Connected to database");
})

app.get('/youtube.html', (req, res) => {
    res.render('youtube.ejs');
});

app.get('/', (req, res) => {
    db.query(
        "SELECT * FROM questions LEFT JOIN choices ON question_id = question_id_fk ORDER BY question_id",
        [],
        (err, results) => {
            if (err) {
                console.log("Error occurred: " + err);
                res.redirect('/');
            }
            else {
                var questions = [],
                    choices = [],
                    tmp_id;
                
                results.forEach((row) => {   
                    if (row.choice_id) {                 
                        choices.push({ choice_id: row.choice_id, answer: row.answer, question_id: row.question_id_fk });
                    }

                    if (tmp_id !== row.question_id) {
                        questions.push({ question_id: row.question_id, content: row.content });
                    }
                    tmp_id = row.question_id;
                });

                questions.forEach((q) => {
                    const answers = choices.filter((c) => {
                       return q.question_id == c.question_id;
                    });
                    q.choices = answers;
                });
              
                res.render('home.ejs', {
                    title: 'Quiz',
                    questions: questions                    
                });
            }            
        }
    );
});

app.listen(port, function() {
    console.log('Connected to port ' + port);
});
