// Função que eleva o número ao quadrado

// Imperativo: Faça da seguinte forma

let number = 2;

// stateful function
function square() {
    return number * number;
}

number = square();



// Declarativa: O que fazer e não como fazer.
// stateless function
const square = n => n * n