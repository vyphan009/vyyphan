var frontCell = 'white.png';
var correctCell = "green.png";
var wrongCell = "red.png";
var cells = new Array();
var newCells = new Array();
var count = 0;

var correctNum = 0;
var max;
var click = false;

var score = 0;
var name;
var tmpScore = 0;
var size = [9, 16, 25, 36, 49];
var m;
var level = 1;
var angle = 0;
var times = false;
var rotateTimes = false;
var nextRound = false;
function skip(){
	document.write("<div id='wrapper'><script>dealCard(0);</script></div>");
	document.write("<link rel='stylesheet' type='text/css' href='flip.css'>");
	nextRound = true;
}


function generateCell(index) 
{
	
	max = size[index];
	for(var i = 1; i <=max; i++)
	{
		
		if(i<=max/3 && Math.sqrt(max) == 3){
			correctCells = {type: 'correct', img: 'green.png'};
			cells.push(correctCells);
			correctNum = 3;
			m = 3;
				
		}else if(i<=max/4 && Math.sqrt(max) == 4){
				correctCells = {type: 'correct', img: 'green.png'};
				cells.push(correctCells);
				correctNum = 4;
				m= 4;
				
		} else if(i<=max/5 && Math.sqrt(max) == 5){
				correctCells = {type: 'correct', img: 'green.png'};
				cells.push(correctCells);
				correctNum = 5;
				m= 5;
				
		}else if(i<=max/6 && Math.sqrt(max) == 6){
				correctCells = {type: 'correct', img: 'green.png'};
				cells.push(correctCells);
				correctNum = 6;
				m=6;
				
		}else if(i<=max/7 && Math.sqrt(max) == 7){
				correctCells = {type: 'correct', img: 'green.png'};
				cells.push(correctCells);
				correctNum = 7;
				m=7;
		}else {
			wrongCells = {type: 'wrong', img: 'red.png'};
			cells.push(wrongCells);
		}
	}

	return cells;
}

function shuffle(array) {
    if (count == 0) {
        array.sort(function () {
            return 0.5 - Math.random();
        });
        console.log(array);	
        count++;
    } else {
        count = 0;
        document.getElementById("wrapper").innerHTML = "";
        dealCard();
    }
	
}

function dealCard(index) {
	//score + level
	document.write("<label id=\"score\">" + "Score: " + score + "</label>");
	document.write("<br><label id=\"level\">" + "Level: " + level + "</label>");
	

	this.index = index;
	init(index);	
	
	document.write("<br><br><button id='terminate' onClick=\"terminate()\">TERMINATE</button>");
}


function init(index){
	shuffle(generateCell(index));
    document.write("<p></p>");
    document.write("<table id='table' class=\"list\">");
    document.write("<tr>");
	console.log(max);
    for (var i = 0; i < max; i++) {
        newCells[i] = "<td id='cell'><div id='" + i + "' class= ' " + cells[i].type + "' onclick='cellClicked(" + i + ")'><img src='" + frontCell + "' width=\"80px\" height=\"80px\"/>"
            + "<img id='face" + i + "' src='" + cells[i].img + "' width=\"80px\" height=\"80px\" style=\"display: none;\"/></td>";
        document.write(newCells[i]);
		
		if(max%3 == 0){
			let row = max/3;
			if (i === (row-1) || i === (2*row - 1)) {
				document.write("</tr>");
				document.write("<tr>");
			}
		} else if(max%4 == 0){
			let row = max/4;
			if (i === row-1 || i === 2*row-1 || i === 3*row-1) {
				document.write("</tr>");
				document.write("<tr>");
			}
		} else if(max%5 == 0){
			let row = max/5;
			if (i === row-1 || i === 2*row-1 || i === 3*row-1 || i === 4*row-1){
				document.write("</tr>");
				document.write("<tr>");
			}
		} else if(max%6 == 0){
			let row = max/6;
			if (i === row-1 || i === 2*row-1 || i === 3*row-1 || i === 4*row-1 || i === 5*row-1){
				document.write("</tr>");
				document.write("<tr>");
			}
		} else if(max%7 == 0){
			let row = max/7;
			if (i === row-1 || i === 2*row-1 || i === 3*row-1 || i === 4*row-1 || i === 5*row-1 || i === 6*row-1){
				document.write("</tr>");
				document.write("<tr>");
			}
		}
    }
    document.write("</table>");
    showCells();
	
}



function showCells()
{

	setTimeout(
	function() 
  	{
   		$('.correct').click();
    	console.log("click 1");
		document.getElementById("score").innerHTML = "Score: " + tmpScore;

		
  	}, 1000);
    
	setTimeout(
  	function() 
  	{
   		$('.correct').click();
		console.log("click 2");
		document.getElementById("score").innerHTML = "Score: " + tmpScore;

  	}, 2000);
	
	setTimeout(
	function() 
  	{		
		
		$("table").toggleClass('rotated');

	}, 3000);
	
	setTimeout(
		function(){
			correctNum = m;
			console.log("tmp: " + tmpScore + ", score: " + score);

			score = tmpScore;
			console.log("reset score: " + score);
			times = true;
		}, 3000
	);
}


function cellClicked(id) {
    var inputID = "#" + id;
    $(inputID + ' img').toggle();
	
	if(cells[id].type == 'correct'){
		correctNum--;
		score++;
		if(correctNum == 0 && times == true){
			tmpScore = score;
			setTimeout(
				function(){
						
					level++;
					tmpScore+= 10;
					index++;
					//console.log(index);
					frontCell = 'white.png';
					correctCell = "green.png";
					wrongCell = "red.png";
					cells = new Array();
					newCells = new Array();
					count = 0;

					correctNum = 0;
					//max = 0;
					click = false;

					m = 0;
					times = false;

					
					var Parent = document.getElementById("table");
					Parent.removeChild(Parent.firstChild);
					$('div').remove();
					$('label').remove();
					$('#terminate').remove();	
					$('table').remove();
					$('script').remove();
					//document.write("<div id='wrapper'><script>dealCard(0);</script></div>");
					dealCard(index);
					//document.write("<div id='wrapper'><script>dealCard(0);</script></div>");


			}, 100
		);
	
		}
		document.getElementById("score").innerHTML = "Score: " + score;

	} else{
		score--;
		document.getElementById("score").innerHTML = "Score: " + score;

		if(score <= 0){	
			score = 0;
			alert("You lost!");
			window.location.href="/Users/phanvy/Documents/term4/web/vyyphan/COMP4711/MemoryGame/summary.html";
		}
		setTimeout(
			function(){
				if(level != 1){
					level--;
				}
				if(index != 0){
					index--;
				}
				frontCell = 'white.png';
				correctCell = "green.png";
				wrongCell = "red.png";
				cells = new Array();
				newCells = new Array();
				count = 0;

				correctNum = 0;
				click = false;
				m = 0;
				times = false;

				
				var Parent = document.getElementById("table");
				Parent.removeChild(Parent.firstChild);
				$('div').remove();
				$('label').remove();
				$('#terminate').remove();	
				$('table').remove();

				dealCard(index);
		}, 100
	);
	}
}


//terminate game
function terminate(){
	var t = confirm("Are you sure want to terminate?");
	if(t==true){
		window.location.href="/Users/phanvy/Documents/term4/web/vyyphan/COMP4711/MemoryGame/summary.html";
	}
}

//restart game
function restart(){
		window.location.href="/Users/phanvy/Documents/term4/web/vyyphan/COMP4711/MemoryGame/index.html";
		level = 1;
		score = 0;
}

//go to leader board that show name + score
function submit(){
	name=document.getElementById("name").value;
	window.location.href="/Users/phanvy/Documents/term4/web/vyyphan/COMP4711/MemoryGame/leaderboard.html";
}



//
//var mysql = require('mysql');
//
//var con = mysql.createConnection({
//  host: "localhost",
//  port: "8080",
//  user: "root",
//  password: "",
//});
//
//con.connect(function(err){
//    if(err) throw err;
//    console.log("Connected");
//    con.query ("CREATE DATABASE IF NOT EXISTS leaderboard", function(err, result){
//        if(err) throw err;
//        console.log("Database created");
//    });
//    
//    con.query("use leaderboard", function(err, result){
//        if(err) throw err;
//        console.log("Database used");
//    });
//    
//    con.query("CREATE TABLE IF NOT EXISTS name (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), score INT)", function(err, result){
//      if(err) throw err;
//        console.log("Table questions created");
//    });
//    
//    
//   
//        //con.query("INSERT INTO name (name, score) VALUES ('" + name + "','" + score + "')", function(err, result){
//        //  if(err) throw err;
//        //    console.log("Data inserted");
//        //});
//});
