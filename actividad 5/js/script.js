function calcular() {
	let a, b, c, d, e, f, g;
        a = parseInt(document.getElementById("numero").value, 10);
		b = parseInt(document.getElementById("numero").value, 10);	
	c = a * b;
	d = a + b;
	e = a / b;
	f = a - b;
	g = a % b;
		document.getElementById("texto").innerHTML ="<br> El primer número es: " + a +" <br> El segundo número es: " + b + "<br> Multiplicación: "  + c +  "<br> La suma es: " + d +"<br> La división es: " + e +"<br> La resta es : " + f + "<br> El  resto es : " + g;	
}
