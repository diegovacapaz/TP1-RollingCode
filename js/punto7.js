let numbers = [];
numbers.push(parseInt(prompt("Ingrese el primer número: ")));
while(isNaN(numbers[0])) {
    numbers[0] = parseInt(prompt("Ingrese un número: "));
}
numbers.push(parseInt(prompt("Ingrese el segundo número: ")));
while(isNaN(numbers[1])) {
    numbers[1] = parseInt(prompt("Ingrese un número: "));
}
numbers.push(parseInt(prompt("Ingrese el tercer número: ")));
while(isNaN(numbers[2])) {
    numbers[2] = parseInt(prompt("Ingrese un número: "));
}
let higher = numbers[0];
for(let i=0; i<3; i++) {
    if(numbers[i]>higher){
        higher = numbers[i];
    }
}
document.write(`El máximo es: ${higher}`);
/* Forma simple:
document.write(`El máximo es: ${Math.max(numbers[0], numbers[1], numbers[2])}`);*/
