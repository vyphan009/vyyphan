
let questions = [`<p>1) What is "this" refer in this script?</p>
<div>
<div>var person = {
  firstName: "John",
  lastName : "Doe",
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
</div>    
</div>
<br>
<input type="radio" name="color" value="a" id="1a"> a) global object<br>
<input type="radio" name="color" value="b"> b) owner object <br>
<input type="radio" name="color" value="c"> c) any object <br>
<input type="radio" name="color" value="d"> d) element <br>`,

`<p>2) What does "this" refer to in a function ?</p>

<br>
<input type="radio" name="asn" value="a"> a) owner object<br>
<input type="radio" name="asn" value="b"> b) any object<br>
<input type="radio" name="asn" value="c"> c) global object<br>
<input type="radio" name="asn" value="d"> d) element<br> `,

`<p>3) What would be the output of this script?</p>
<div>
<p id="demo"></p>

<script>
var person1 = {
  firstName:"Kim",
  lastName: "Lee",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person2 = {
  firstName:"John",
  lastName: "Doe",
}
var x = person1.fullName.call(person2); 
document.getElementById("demo").innerHTML = x; 
</script>

</div>
<input type="radio" name="asn" value="a"> a) John Doe<br>
<input type="radio" name="asn" value="b"> b) Kim Doe<br>
<input type="radio" name="asn" value="c"> c) Kim Lee<br>
<input type="radio" name="asn" value="d"> d) John<br>`,

`<p>4) What would be the output of this script?</p>

<div>
<p id="demo"></p>

<script>
"use strict";
document.getElementById("demo").innerHTML = myFunction();
function myFunction() {
  return this;
}

</div>
</br>
<input type="radio" name="asn" value="a"> a) undefined<br>
<input type="radio" name="asn" value="b"> b) not defined<br>
<input type="radio" name="asn" value="c"> c) error<br>`,

`<p>5) What would be the output of this script?</p>
<div>
<div><span style="color: #ff0000;">var</span> a = 10;</div>
<div><span style="color: #3366ff;">for</span> (<span style="color: #ff0000;">var</span> i = 0; i < 5; ++i) { </div>
<div>&nbsp; &nbsp; a++;</div>
<div>&nbsp; &nbsp; a += ++i;</div>
<div>&nbsp; &nbsp; --a;</div>
<div>}</div>
<div>
   <div>
       <div><span style="color: #3366ff">console</span>.log(a);</div>
   </div>
</div>    
</div>
<br>
<input type="radio" name="asn" value="a"> a) 18<br>
<input type="radio" name="asn" value="b"> b) 20<br>
<input type="radio" name="asn" value="c"> c) 16<br>
<input type="radio" name="asn" value="d"> d) 19<br>

<br>`,

`<p>6) What would be the output of this script?</p>

<div>
<p id="demo"></p>

<script>
"use strict";
document.getElementById("demo").innerHTML = myFunction();
function myFunction() {
  return this;
}

</div>
</br>
<input type="radio" name="asn" value="a"> a) undefined<br>
<input type="radio" name="asn" value="b"> b) not defined<br>
<input type="radio" name="asn" value="c"> c) error<br>`,


`<p>7) How many kind of events ?</p>

<input type="radio" name="asn" value="a"> a) 3<br>
<input type="radio" name="asn" value="b"> b) 4<br>
<input type="radio" name="asn" value="c"> c) 2<br>
<input type="radio" name="asn" value="c"> c) 5<br>`,


`<p>8) Which one is a DOM event?</p>
<input type="radio" name="asn" value="a"> a) Focus<br>
<input type="radio" name="asn" value="b"> b) Media<br>
<input type="radio" name="asn" value="c"> c) Reset<br>
<input type="radio" name="asn" value="d"> d) Resize<br>`,


`<p>9) What would be the output of this script?</p>

<div>
<script>
var i = 567;
var rep = 0;
do{
    ++rep;
    console.sole(rep);
    i *= 2.1;
} while(i < 567)

</div>
</br>
<input type="radio" name="asn" value="a"> a) 1<br>
<input type="radio" name="asn" value="b"> b) 0<br>
<input type="radio" name="asn" value="c"> c) 3<br>
<input type="radio" name="asn" value="d"> c) 2<br>`,


`<p>10) Which one is a browser event?</p>
<input type="radio" name="asn" value="a"> a) Focus<br>
<input type="radio" name="asn" value="b"> b) Media<br>
<input type="radio" name="asn" value="c"> c) Reset<br>
<input type="radio" name="asn" value="d"> d) Resize<br>`];         


for(let i = 0; i <= 9; i++){
document.body.innerHTML += questions[i];
}

function goBack()
{
window.history.back();
}