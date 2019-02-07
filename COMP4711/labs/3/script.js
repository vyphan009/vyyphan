let counter = 0;
let score = 0;
let correct;
function goBack()
{
    window.history.back();
}

let store = [];

function goNext(){
    window.location.href = 'user.html';

}



function addData(){   
   let p0 = document.getElementById("c0").value,
   p1 = document.getElementById("c1").value,
   p2 = document.getElementById("c2").value,
   p3 = document.getElementById("c3").value;
   // save data to json
   let temp = {"question": document.getElementById("question").value,  
               "answers": [
                           document.getElementById("c0").value,
                           document.getElementById("c1").value,
                           document.getElementById("c2").value,
                           document.getElementById("c3").value]
               };
              

   if(document.getElementById("a").checked == true){
      correct = p0;
      alert(correct);
      document.getElementById("a").checked = false;
   } else if(document.getElementById("b").checked == true){
      correct = p1;
      //temp.value[1].p1 = true;
      document.getElementById("b").checked = false;
   } else if (document.getElementById("c").checked == true){
      correct = p2;
      //temp.value[2].p2 = true;
      document.getElementById("c").checked = false;
   } else if (document.getElementById("d").checked == true){
      correct = p3;
      //temp.value[3].p3 = true;
      document.getElementById("d").checked = false;
   } 
   
   store.push(temp);

   //save json to local storage
   

   //clear fields
   clearField();
      

}
function saveData{
   if(typeof(Storage) !== "undefined"){
           let r = String(counter++);
           localStorage.setItem(r, JSON.stringify(store));
           localStorage.setItem("counter", counter);
           localStorage.setItem("correct", correct);
   };
       
       //if(counter == 1){
       //  alert("You saved" + counter + "question");
       //} else {
       //  alert("You saved" + counter + "questions");
       //
       //};
}

function clearField(){
   document.getElementById('question').value = '';
   document.getElementById('c0').value = '';
   document.getElementById('c1').value = '';
   document.getElementById('c2').value = '';
   document.getElementById('c3').value = '';
}

//display questions in user page
function display(){
   
   let t = "", qu="";
   let c = localStorage.getItem("counter");
   if(c != null){
      
      for(let j = 0; j < c; j++){
          let u = j.toString();
          let x = JSON.parse(localStorage.getItem(u));
           qu = `<p>` + c.toString() + ") " + x[j].question + `</p>` + '<br>';
           document.getElementById("foo").innerHTML = qu;
           
           for(let i = 0; i < 4; i++){
              t += `<input type="radio" id="` + i + `" value="`+ x[j].answers[i] + `" name="selection" type="checkbox">`+`<label for=">` + i + `">` + x[j].answers[i] + `</label>` +'<br>';
           
              document.getElementById("ans").innerHTML = t + "<br>";
           }
      }
     document.getElementById('display').style.display = 'none';
     document.getElementById('submit').style.display = 'block';
   
   }else{
      alert("There are no quizzes!");
   }
}

//Delete all questions
function deleteAll(){
   localStorage.clear();
}

//submit answers
function submit(){
   let co = localStorage.getItem("correct");
   let c = localStorage.getItem("counter");

   //for(let b =0; b < c; b++){                 
   for(let k = 0; k < 4; k++){
      if(document.getElementById(k).checked == true && document.getElementById(k).value == co){
               score++;
         }else if(document.getElementById(k).checked == true && document.getElementById(k).value != co){
         
         
         }
      }
   //}
   document.getElementById("score").innerHTML = "Score: " + score;
    displayAnswer();
   
  
  }
function changeColor(){
   
}
function displayAnswer(){
   let t = "", qu="";
   let c = localStorage.getItem("counter");
   let co = localStorage.getItem("correct");
   document.getElementById("displayAnswer").innerHTML = "ANSWERS";
    for(let j = 0; j < c; j++){
        let u = j.toString();
        let x = JSON.parse(localStorage.getItem(u));
         qu = `<p>` + c.toString() + ") " + x[j].question + `</p>`;
         document.getElementById("ques").innerHTML = qu;
         
         for(let i = 0; i < 4; i++){
            if(x[j].answers[i] == co){
               t += `<p style="background-color: yellow" >`+`<input type="radio" id="` + i + `" value="`+ x[j].answers[i] + `" name="selection">`  + x[j].answers[i]  + `</p>`;
            }else{
            t += `<p>`+ `<input type="radio" id="` + i + `" value="`+ x[j].answers[i] + `" name="selection" >`  + x[j].answers[i] +  `</p>`;
            }
            document.getElementById("corAnswer").innerHTML = t;
         }
    }
}

//function makeButton{
//let bt = document.createElement("BUTTON");
//  let to = document.createTextNode("CLICK ME");
//  bt.appendChild(to);
//  document.body.appendChild(bt);
//}

