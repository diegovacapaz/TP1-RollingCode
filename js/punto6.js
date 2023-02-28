let firstNumber = parseInt(prompt("Ingrese el primer número: "));
while(isNaN(firstNumber)) {
    firstNumber = parseInt(prompt("Ingrese un número: "));
}
let secondNumber = parseInt(prompt("Ingrese el segundo número: "));
while(isNaN(secondNumber)) {
    secondNumber = parseInt(prompt("Ingrese un número: "));
}
if(firstNumber > secondNumber) {
    document.write(`El mayor es: ${firstNumber}`);
}
else if(secondNumber > firstNumber) {
    document.write(`El mayor es: ${secondNumber}`);
}
else {
    document.write(`Los numeros son iguales`);
}