function add (a, b) {
	return a + b;	
}

function subtract (a, b) {
	return a - b;
}

function sum (a) {
	let total = 0;
	a.forEach(item => total += item);
	return total;
	
}

function multiply (a) {
	let total = 1;
	a.forEach(item => total *= item);
	return total;
	
}

function power(a, b) {
	return a ** b;
}

function factorial(a) {
	let total = 1;
	for (i = 1; i <= a; i++) {
		total *= i;
	}
	return total;
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}