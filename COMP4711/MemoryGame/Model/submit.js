function submit(){
	let name=document.getElementById("name").value;
	window.location.href="/Users/phanvy/Documents/term4/web/vyyphan/COMP4711/MemoryGame/View/leaderboard.html";
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", "http://localhost::8888/?name=" + name, true);
	xhttp.send();
}
