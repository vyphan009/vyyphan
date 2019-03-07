
output = [];
counter = 0;
var index = counter;
var id = [];

function addQuestion() {
    var add = document.getElementById("inner-wrapper");

    output.push(
        '<div id="' + counter +'">'
        //question 
        +'<div id="question' + counter + '" contenteditable="true"> Enter a question here</div></br>'
        //answer
        + '<div class="answers' + counter + '">'     
        + 'a) <input name="answer" type="text" value="answer"><br><br>'       
        + 'b) <input name="answer" type="text" value="answer"><br><br>' 
        + 'c) <input name="answer" type="text" value="answer"><br><br>'
        + 'd) <input name="answer" type="text" value="answer"><br><br>'
        + '</div>'

        //correct ans
        + '<div id="correctAnswer' + counter + '" contenteditable="true">Enter a correct Answer</div>'

        //rm btn
        + '<button type="button" onclick="remove(' + counter +  ')" id="btn' + counter + '"> Remove</button><br><br>'
        + '</div>');

    id[index] = counter;
    counter++;
    index++;
    add.innerHTML = output.join(''); 
}

function remove(index){
    var question = document.getElementById(index);
    question.parentNode.removeChild(question);
    output.slice(question, 1);
    output[index] = null;
    id[index] = null;
    for(let i = index; i < output.length; i++){
        output[i] = output[i+1];
    }
    output.pop();
    

}
function show(){
    for(let i = 0; i< counter; i++){
    var test = document.getElementsByName("answer" + i).value;
        console.log(test);
}
}

var myQuestions = [
	// {
	// 	question: "",
	// 	answers: {
	// 		a: '',
	// 		b: '',
    //         c: '',
    //         d: ''
	// 	},
	// 	correctAnswer: ''
	// }
];
var question = [];
newQuestions = [];

save = document.getElementById("save");

save.onclick = function (){

    for (var j = 0; j < counter; j++) {
        var questionId = "question" + j;
        var answerClassName = "answer";
        var correctAnswerId = "correctAnswer" + j;

        var question = document.getElementById(questionId).textContent;
        var answersA = document.getElementsByName(answerClassName)[0].value;
        console.log(answersA);
        var answersB = document.getElementsByName(answerClassName)[1].value;
        console.log(answersB);

        var answersC = document.getElementsByName(answerClassName)[2].value;
        console.log(answersC);

        var answersD = document.getElementsByName(answerClassName)[3].value;
        console.log(answersD);

        var correctanswer = document.getElementById(correctAnswerId).textContent;

        newQuestions.push({
            question: question
            , answers: {
                a: answersA,
                b: answersB,
                c: answersC,
                d: answersD
            }
            , correctAnswer: correctanswer
        });
    }

}




