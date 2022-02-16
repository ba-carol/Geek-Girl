//Altera o ícone da página
function mudaIcone(mudar) {
	document.getElementById("ico").src = mudar;
}

//Aplica o foco no campo inicial do contato
window.onload = function() {
	document.getElementById("cNome").focus();
}

//Aplica letras maiúsculas no nome, rua, complemento e cidade do formulário
function maiusculas() {
	var x=document.getElementById("cNome");
	x.value=x.value.toUpperCase();
	
	var x=document.getElementById("cRua");
	x.value=x.value.toUpperCase();
	
	var x=document.getElementById("cComp");
	x.value=x.value.toUpperCase();
	
	var x=document.getElementById("cCid");
	x.value=x.value.toUpperCase();
}

//Troca a cor do campo do formulário
function trocaCorCampo() {
	document.getElementById("cNome").style["background-color"] = "#f58989";
	
	document.getElementById("cMail").style["background-color"] = "#f58989";
	
	document.getElementById("cNasc").style["background-color"] = "#f58989";
	
	document.getElementById("cRua").style["background-color"] = "#f58989";
	
	document.getElementById("cNum").style["background-color"] = "#f58989";
	
	document.getElementById("cComp").style["background-color"] = "#f58989";
	
	document.getElementById("cCid").style["background-color"] = "#f58989";
	
	document.getElementById("cMsg").style["background-color"] = "#f58989";
}

//Coloca uma janela pop-up ao clicar no botão de enviar o formulário
function enviarForm() {
	alert("Formulário enviado com sucesso!");
}