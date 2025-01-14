/*
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  
*/

// Dados de faturamento mensal por estado
const faturamentoEstados = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

// Função para calcular o percentual de representação
function calcularPercentualRepresentacao(faturamento) {
    // Calculando o valor total
    const total = Object.values(faturamento).reduce((soma, valor) => soma + valor, 0);

    // Calculando o percentual para cada estado
    const percentuais = {};
    for (const estado in faturamento) {
        percentuais[estado] = ((faturamento[estado] / total) * 100).toFixed(2);
    }

    // Retornando os resultados
    return { total, percentuais };
}

// Chamando a função e exibindo os resultados
const resultado = calcularPercentualRepresentacao(faturamentoEstados);

console.log("Faturamento Total: R$", resultado.total.toFixed(2));
console.log("Percentual de Representação por Estado:");
for (const [estado, percentual] of Object.entries(resultado.percentuais)) {
    console.log(`${estado}: ${percentual}%`);
}
