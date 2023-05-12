//your code here
let text=document.getElementById('eveluatedText');
text.addEventListner('keyup',counting);
function counting(){

document.getElementById('letterCount').innerText=text.value.length;
}

