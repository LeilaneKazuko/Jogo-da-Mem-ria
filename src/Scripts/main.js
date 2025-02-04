document.getElementById//serve para pegar o id (<id>)
document.getElementsByClassName //serve para pegar a class (<class>)
document.getElementsByTagName //serve para pegar o tag (<tag>)
document.querySelector //serve para pegar o id, class ou tag (<selector)
document.querySelectorAll //serve para pegar o id, class ou tag (<selector>)
document.createElement //serve para criar um elemento (<)
document.createTextNode //serve para criar um texto


let menu = document.getElementById("menu");//o let usamos para nomear uma variavel
let select = document.getElementById("numCards");
let start = document.getElementById("start");


//Configurando o menu
for (let i = 4; i<= 10; i+=2) {let n= i*i; //serve para criar uma variavel
let op = document.createElement("option"); // serve para criar um option
// o for é usado para criar um loop

//serve para configurar o option
op.value = n;
op.innerHTML = n;

//serve para adicionar o option
select.appendChild(op);
}