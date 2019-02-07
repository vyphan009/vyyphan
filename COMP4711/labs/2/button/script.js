const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
                    //var button;
for(let i = 0; i < 13; i++){
    
    let button = document.createElement("button");
    let label = document.getElementsByTagName("button");
    button.innerHTML = alphabet[i];
    button.setAttribute("id", i);
    document.body.appendChild(button);
    
    label[i].onclick = function() {
        alert(alphabet[this.id]);
        };
    }
    
const br = document.createElement("br");
document.body.appendChild(br);

for(let j = 13; j < 26; j++){
    
    let button = document.createElement("button");
    let label = document.getElementsByTagName("button");
    button.innerHTML = alphabet[j];
    button.setAttribute("id", j);
    document.body.appendChild(button);
    
    label[j].onclick = function() {
        alert(alphabet[this.id]);
        };
    }
function goBack(){
                    window.history.back();
                }