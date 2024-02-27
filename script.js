

async function  catfacts (){
    var box = document.getElementById("box");
var reponse = await fetch("https://meowfacts.herokuapp.com/");
var text = document.getElementById("texts");

var out = await reponse.json();
console.log(out.data[0]);
text.innerHTML = `



<div> ${out.data[0]}</div>




`;



}

