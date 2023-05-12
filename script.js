//your code here
let text=document.getElementById('eveluatedText').value;
text.addEventListner('onChange',counting);
function counting(){
let count= text.match(/\s/g);
	document.getElementById('letterCount').innerText=count;
}

