/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1
e o próximo valor sempre será a soma dos 2 valores anteriores
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa
na linguagem que desejar onde, informado um número,
ele calcule a sequência de Fibonacci e retorne uma mensagem
avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

*/

// Função para verificar se um número pertence à sequência de Fibonacci
function verificaFibonacci(numero) {
    if (numero < 0) {
        return `O número ${numero} não pertence à sequência de Fibonacci (números negativos não estão incluídos).`;
    }

    // Inicializando os dois primeiros números da sequência de Fibonacci
    let a = 0; // Primeiro número da sequência
    let b = 1; // Segundo número da sequência

    // Caso especial: número é 0 ou 1 (pertencem à sequência por definição)
    if (numero === 0 || numero === 1) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    }

    // Gerando a sequência até que o número atual seja maior ou igual ao número informado
    while (b < numero) {
        let temp = a + b; // Próximo número na sequência
        a = b;            // Atualizando o valor de 'a' para o próximo passo
        b = temp;         // Atualizando o valor de 'b' para o próximo passo
    }

    // Verificando se o número informado é igual a 'b', ou seja, pertence à sequência
    if (b === numero) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${numero} NÃO pertence à sequência de Fibonacci.`;
    }
}

// Exemplo de entrada: número a ser verificado
let numeroInformado = 21;
console.log(verificaFibonacci(numeroInformado));
