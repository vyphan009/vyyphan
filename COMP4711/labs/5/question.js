global.questions = [{question : `<p>1) What would be the output of this script?</p>
<div>
<div><span style="color: #ff0000;">let</span> mul = 2;</div>
<div><span style="color: #3366ff;">for</span> (<span style="color: #ff0000;">let</span> i = 3; i <5; ++i) { </div>
<div>&nbsp; &nbsp; mul = mul * i;</div>
<div>}</div>
<div>&nbsp;</div>
<div>
   <div>
       <div><span style="color: #3366ff">console</span>.log(mul);</div>
   </div>
</div>    
</div>
<br>
<input type="radio" name="color" value="a" id="1a"> a) 22 <br>
<input type="radio" name="color" value="b"> b) 33 <br>
<input type="radio" name="color" value="c"> c) 44 <br>
<input type="radio" name="color" value="d"> d) 24 <br>`, answer : "a"},

{ question : `<p>2) What would be the output of this script?</p>
<div>
<div><span style="color: #ff0000;">var</span> a = 10;</div>
<div><span style="color: #ff0000;">var</span> b = "5";</div>
<div><span style="color: #ff0000;">var</span> sum = a + b;</div>
<div><span style="color: #ff0000;">var</span> subtract = a - b;</div>
<div>
   <div>
       <div><span style="color: #3366ff">console</span>.log("sum: " + sum + ",subtract: " + subtract);</div>
   </div>
</div>    
</div>
<br>
<input type="radio" name="asn" value="a"> a) sum: 15, subtract: 5<br>
<input type="radio" name="asn" value="b"> b) sum: 105, subtract: 5<br>
<input type="radio" name="asn" value="c"> c) sum: 105, subtract: NaN<br>
<input type="radio" name="asn" value="d"> d) sum: 105, subtract: 510<br> `, answer : "b"},

{question : 
`<p>3) Which one is NOT a primitive data type in Javascript?</p>
<input type="radio" name="asn" value="a"> a) int<br>
<input type="radio" name="asn" value="b"> b) Boolean<br>
<input type="radio" name="asn" value="c"> c) null<br>
<input type="radio" name="asn" value="d"> d) Symbol<br>`,
answer : "a"},

{question : 
`<p>4) What would be the output of this script?</p>

<div>
<div><span style="color: #ff0000;">var</span> a = 2;</div
<div><span style="color: #ff0000;">var</span> b = 3;</div>

<div><span style="color: #ff0000;">var</span> theBiggestNum = <span style="color: #3366ff;">function</span> (a, b) { </div>
<div>&nbsp; &nbsp; <span style="color: #ff0000;">var </span>result;</div>
<div>&nbsp; &nbsp; a > b ? result = ["a", a ] : ["b", b];</div>
<div>&nbsp; &nbsp; return result;</div>
<div>&nbsp; }</div>
<div>
   <div>
       <div><span style="color: #3366ff">console</span>.log(theBiggestNum(3, 7))</div>
   </div>
</div>    
</div>
</br>
<input type="radio" name="asn" value="a"> a) 7<br>
<input type="radio" name="asn" value="b"> b) 3<br>
<input type="radio" name="asn" value="c"> c) error<br>`,
answer : "a"},

{question : 

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
<input type="radio" name="asn" value="d"> d) 19<br>,
<br>`,
answer : "c"}];         
