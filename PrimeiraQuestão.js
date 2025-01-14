/*
1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?
*/

// Iniciando as variáveis conforme o enunciado.
let INDICE = 13; // Valor máximo para K no loop
let SOMA = 0;    // Acumula o resultado da soma
let K = 0;       // Controla o loop

// Enquanto K for menor que INDICE, o loop continuará.
while (K < INDICE) {
    K = K + 1;      // Incrementando K em 1
    SOMA = SOMA + K; // Adicionando o valor atual de K à SOMA
}

// Imprimindo o valor final de SOMA
console.log("O valor final de SOMA é:", SOMA);