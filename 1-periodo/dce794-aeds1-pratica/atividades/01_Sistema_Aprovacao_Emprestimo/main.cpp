/*
    Sistema de Aprovação de Empréstimo
    Autor: Gabriel Henrique Silva Pereira     RA: 2025.1.08.036
    Disciplina: AEDs - P
    Local: Unifal - Alfenas
    Data: 24/03
    Professor: Paulo Bressan 
    Objetivo: Implementação de sistema de emprestimo com, critérios de renda, idade e histórico bancário.
*/

#include <stdlib.h>
#include <stdio.h>

int main() {

    int idade, // Idade do solicitante
        nmngtv, // Indicador se o nome está negativado (1 - Sim, 0 - Não)
        trstl, // Número de parcelas em atraso atualmente
        trstl2ns; // Número de parcelas em atraso nos últimos 2 anos
    float rndmnsl; // Renda Mensal

    // Entrada de dados do usuário
    printf("\n\tBem-vindo ao Sistema de Aprovação de Empréstimo.");
    printf("\n\tInforme sua idade: ");
    scanf("%d", &idade);
    printf("\n\tAo informar sua renda, use ponto ('.') ao invés de vírgula (','), caso necessário!");
    printf("\n\tInforme sua renda mensal: R$ ");
    scanf("%f", &rndmnsl);
    printf("\n\tSeu nome está negativado? (1 - Sim, 0 - Não): ");
    scanf("%d", &nmngtv);
    printf("\n\tNúmero de parcelas em atraso atualmente: ");
    scanf("%d", &trstl);
    printf("\n\tNúmero de parcelas em atraso nos últimos 2 anos: ");
    scanf("%d", &trstl2ns);

    // Verificação das condições para aprovação do empréstimo
    if (rndmnsl < 2000.00 or nmngtv == 1 or idade < 18 or idade > 70) {
        // Se a renda for inferior a R$ 2000, nome estiver negativado ou idade fora da faixa permitida, empréstimo negado
        printf("\n\tClassificação: Empréstimo negado.\n");
    } else if (rndmnsl >= 2000.00 && rndmnsl <= 4999.99 && trstl <= 2) {
        // Se a renda estiver entre R$ 2000 e R$ 4999.99 e o número de parcelas atrasadas for no máximo 2
        printf("\n\tClassificação: Empréstimo de Baixo Valor (até R$ 5.000,00)\n");
    } else if (rndmnsl >= 5000.00 && rndmnsl < 9999.99 && trstl2ns <= 4) {
        // Se a renda estiver entre R$ 5000 e R$ 9999.99 e o número de parcelas atrasadas nos últimos 2 anos for no máximo 4
        printf("\n\tClassificação: Empréstimo de Médio Valor (até R$ 20.000,00)\n");
    } else if (rndmnsl >= 10000.00 && trstl2ns == 0) {
        // Se a renda for de pelo menos R$ 10.000 e não houver atrasos nos últimos 2 anos
        printf("\n\tClassificação: Empréstimo de Alto Valor (até R$ 20.000,00)\n");
    } else {
        // Caso não se encaixe em nenhuma das categorias acima, o empréstimo é negado
        printf("\n\tClassificação: Empréstimo Negado.\n");
    }

    return 0;
}
