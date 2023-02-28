let sentence = prompt("Escriba una frase: ");
let vowels= [];
sentence = sentence.toLowerCase();
for (let i=0; i<sentence.length; i++) {
    switch(sentence.charAt(i)) {
        case 'a':
            if(!vowels.includes(sentence.charAt(i))){
                vowels.push(sentence.charAt(i));
            }
            break;
        case 'e':
            if(!vowels.includes(sentence.charAt(i))){
                vowels.push(sentence.charAt(i));
            }
            break;
        case 'i':
            if(!vowels.includes(sentence.charAt(i))){
                vowels.push(sentence.charAt(i));
            }
            break;
        case 'o':
            if(!vowels.includes(sentence.charAt(i))){
                vowels.push(sentence.charAt(i));
            }
            break;
        case 'u':
            if(!vowels.includes(sentence.charAt(i))){
                vowels.push(sentence.charAt(i));
            }
            break;
        default:
            break;
    }
}
document.write("Las vocales que hay son: " + vowels);