/*
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
*/

// Função para inverter uma string
function inverterString(texto) {
    // Iniciando uma variável para a string invertida
    let invertida = "";

    // Percorrendo a string de trás para frente
    for (let i = texto.length - 1; i >= 0; i--) {
        invertida += texto[i]; // Adicionando cada caractere à variável invertida
    }

    // Retornando a string invertida
    return invertida;
}

// Exemplo de uso com uma string definida no código
const textoOriginal = "Desafio Técnico";
const textoInvertido = inverterString(textoOriginal);

// Exibindo o resultado
console.log("Texto Original:", textoOriginal);
console.log("Texto Invertido:", textoInvertido);
