//your code here
let text=document.getElementById('eveluatedText').value;
text.addEventListner('onChange',counting);
function counting(){
		
	document.getElementById('letterCount').innerText=text.length;
}

