function comprobar() {
	let numero = parseInt(document.getElementById("numero").value,10);
	if(numero%2==0){
	  //Mensaje si el numero divididom es  tiene resto 1.
	  document.getElementById("texto").innerHTML="el numero es par";
	  console.log("par")
	}
	else{
	  //Mensaje si el numero dividido es tiene resto 0
	 document.getElementById("texto").innerHTML="el numero es impar";
	 console.log("impar")
	}
 }