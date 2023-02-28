let number = parseInt(prompt("Ingrese el número: "));
while(isNaN(number)) {
    number = parseInt(prompt("Ingrese un número válido: "));
}
if(number%2 === 0 || number%3 === 0 || number%5 === 0 || number%7 === 0){
    document.write("El número es divisible por 2, 3, 5 o 7");
}
else{
    document.write("El número no es divisible por ninguno");
}