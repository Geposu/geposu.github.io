let myImage = document.querySelector("img");

myImage.onclick = function() {
	let mySrc = myImage.getAttribute("src");
	if (mySrc === "images/bingus.png") {
		myImage.setAttribute ("src","images/bingus2.png");
	}	else {
		myImage.setAttribute ("src", "images/bingus.png");
	}
}
	
let myButton = document.querySelector("button");
let meuCabesalho = document.querySelector("h1");

function defineUserName() {
	let myName = prompt("Digite seu nome.");
	if(!myName || myName === null) {
		defineUserName();
} 	else {
	localStorage.setItem
	localStorage.setItem("name", myName);
	meuCabesalho.textContent = "Welcome, " + myName;
}
}

if(!localStorage.getItem("name")) {
	defineUserName();
}	else {
	let savedName = localStorage.getItem("name");
	meuCabesalho.textContent = "Welcome, " + savedName;
}

myButton.onclick = function() { defineUserName();
}


































//let myVariable; //pode ser na mesma linha ex: let myVariable = "bingus";
//myVariable = "bingus"; //pode ser alterado posteriormente ex: myVariable = "bingos"

