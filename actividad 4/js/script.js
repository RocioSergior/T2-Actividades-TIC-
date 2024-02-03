function calcular() {
	let a, b, c, d, e, f, g;
	a = parseInt(prompt("Introduce el primer número:"));
	b = parseInt(prompt("Introduce el segundo número:"));
	c = a * b;
	d = a + b;
	e = a / b;
	f = a - b;
	g = a % b;
	alert("\nel primer número es:" + a +"\nel segundo número es:" + b + "\nMultiplicación: "  + c + "\nsuma: " + d +"\ndivisión:" + e +"\nresta:" + f + "\nresto:" + g);
}
