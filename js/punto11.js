let number = parseInt(prompt("Ingrese el número: "));
while(isNaN(number)) {
    number = parseInt(prompt("Ingrese un número válido: "));
}
let isDivisible = false;
if(number%2 === 0){
    document.write("El número es divisible por 2 <br>");
    isDivisible = true;
}
if(number%3 === 0){
    document.write("El número es divisible por 3 <br>");
    isDivisible = true;
}
if(number%5 === 0){
    document.write("El número es divisible por 5 <br>");
    isDivisible = true;
}
if(number%7 === 0){
    document.write("El número es divisible por 7 <br>");
    isDivisible = true;
}
if(!isDivisible){
    document.write("El número no es divisible por ninguno");
}