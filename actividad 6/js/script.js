function comprobar() {
	let numero = parseInt(document.getElementById("numero").value,10);
	if(numero%2==0){
	  document.getElementById("texto").innerHTML="el numero es par";
	}
	else{
	 document.getElementById("texto").innerHTML="el numero es impar";
	}
 }
