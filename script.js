//your code here
let input = document.getElementById("evaluatedText")
let h3 = document.getElementById("letterCount")

input.addEventListner('keyup',counting);
function counting(){

h3.innerText=input.value.length;
}

