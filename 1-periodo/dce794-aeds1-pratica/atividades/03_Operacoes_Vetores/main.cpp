/*

 * 03 - Operações em Vetores
Objetivo: Realizar operações nos valores armazenados num vetor.
Descrição: Criar um projeto em C/C++ que insira valores inteiros num vetor de 100 posições e apresente um menu de operações que podem ser realizadas no vetor quantas vezes o usuário desejar. As operações devem ser:
    contar a quantidade de ocorrências que um valor aparece;
    contar a quantidade de ocorrências de valores de um intervalo;
    buscar pela primeira ocorrência de um valor e informar a posição;
    excluir a primeira ocorrência de um valor informado, se existir, deslocando os valores da direita para esquerda (“não deixar buracos”);
    inserir um valor informado numa posição também informada, quando o vetor não estiver cheio;
    retirar todos os valores repetidos.
Não esqueça de comentar o código, no cabeçalho e nas linhas mais importantes.

- Autor: Gabriel Henrique Silva Pereira
- RA: 2025.1.08.036

*/

#include <cstdlib>
#include <iostream>

using namespace std;

int main(int argc, char **argv)
{

    // Insere os valores no vetor de 100 posições
    int vetor[100];
    int n = 0;
    cout << "Insira valores inteiros dentro do vetor de 100 espaços (digite -1 para parar):" << endl;
    while (n < 100)
    {
        cin >> vetor[n];
        if (vetor[n] == -1)
        {
            break;
        }
        n++;
    }
    cout << "Valores inseridos no vetor: ";
    for (int i = 0; i < n; i++)
    {
        cout << vetor[i] << " ";
    }
    cout << endl;

    // Menu de operações
    int opcao;
    do
    {

        cout << "==================================================================================================" << endl;
        cout << "* 1. Contar a quantidade de ocorrências que um valor aparece.                                    *" << endl;
        cout << "* 2. Contar a quantidade de ocorrências de valores de um intervalo.                              *" << endl;
        cout << "* 3. Buscar pela primeira ocorrência de um valor e informar a posição.                           *" << endl;
        cout << "* 4. Excluir a primeira ocorrência de um valor informado, se existir.                            *" << endl;
        cout << "* 5. Inserir um valor informado numa posição também informada, quando o vetor não estiver cheio. *" << endl;
        cout << "* 6. Retirar todos os valores repetidos.                                                         *" << endl;
        cout << "* 7. Sair.                                                                                       *" << endl;
        cout << "==================================================================================================" << endl;
        cout << "Escolha uma opção: ";
        cin >> opcao;
        cout << endl;

        switch (opcao)
        {
        case 1:
        {
            // Contar a quantidade de ocorrências que um valor aparece
            int valor;
            cout << "Digite o valor que deseja contar: ";
            cin >> valor;
            int contador = 0;
            for (int i = 0; i < n; i++)
            {
                if (vetor[i] == valor)
                {
                    contador++;
                }
            }
            cout << "O valor " << valor << " aparece " << contador << " vezes no vetor." << endl;
            break;
        }
        case 2:
        {
            // Contar a quantidade de ocorrências de valores de um intervalo
            int valor1, valor2;
            cout << "Digite o valor inicial do intervalo: ";
            cin >> valor1;
            cout << "Digite o valor final do intervalo: ";
            cin >> valor2;
            int contador = 0;
            for (int i = 0; i < n; i++)
            {
                if (vetor[i] >= valor1 && vetor[i] <= valor2)
                {
                    contador++;
                }
            }
            cout << "Existem " << contador << " valores no intervalo [" << valor1 << ", " << valor2 << "] no vetor." << endl;
            break;
        }
        case 3:
        {
            // Buscar pela primeira ocorrência de um valor e informar a posição
            int valor;
            cout << "Digite o valor que deseja buscar: ";
            cin >> valor;
            int posicao = -1;
            for (int i = 0; i < n; i++)
            {
                if (vetor[i] == valor)
                {
                    posicao = i;
                    break;
                }
            }
            if (posicao != -1)
            {
                cout << "O valor " << valor << " foi encontrado na posição " << posicao << "." << endl;
            }
            else
            {
                cout << "O valor " << valor << " não foi encontrado no vetor." << endl;
            }

            break;
        }
        case 4:
        {
            // Excluir a primeira ocorrência de um valor informado, se existir
            int valor;
            cout << "Digite o valor que deseja excluir: ";
            cin >> valor;
            int posicao = -1;
            for (int i = 0; i < n; i++)
            {
                if (vetor[i] == valor)
                {
                    posicao = i;
                    break;
                }
            }
            if (posicao != -1)
            {
                for (int i = posicao; i < n - 1; i++)
                {
                    vetor[i] = vetor[i + 1];
                }
                n--;
                cout << "O valor " << valor << " foi excluído do vetor." << endl;
            }
            else
            {
                cout << "O valor " << valor << " não foi encontrado no vetor." << endl;
            }
            cout << "Os valores atuais do vetor são: ";
            for (int i = 0; i < n; i++)
            {
                cout << vetor[i] << " ";
            }
            cout << endl;
            break;
        }
        case 5:
        {
            // Inserir um valor informado numa posição também informada, quando o vetor não estiver cheio
            int valor, posicao;
            cout << "Digite o valor que deseja inserir: ";
            cin >> valor;
            cout << "Digite a posição onde deseja inserir o valor (0 a " << n << "): ";
            cin >> posicao;
            if (posicao < 0 || posicao > n)
            {
                cout << "Posição inválida. Tente novamente." << endl;
            }
            else if (n == 100)
            {
                cout << "O vetor está cheio. Não é possível inserir mais valores." << endl;
            }
            else
            {
                for (int i = n; i > posicao; i--)
                {
                    vetor[i] = vetor[i - 1];
                }
                vetor[posicao] = valor;
                n++;
                cout << "O valor " << valor << " foi inserido na posição " << posicao << "." << endl;
            }
            cout << "Os valores atuais do vetor são: ";
            for (int i = 0; i < n; i++)
            {
                cout << vetor[i] << " ";
            }
            cout << endl;
            break;
        }
        case 6:
        {
            // Retira todos os valores repetidos
            int vetorSemRepetidos[100];
            int nSemRepetidos = 0;
            for (int i = 0; i < n; i++)
            {
                bool repetido = false;
                for (int j = 0; j < nSemRepetidos; j++)
                {
                    if (vetor[i] == vetorSemRepetidos[j])
                    {
                        repetido = true;
                        break;
                    }
                }
                if (!repetido)
                {
                    vetorSemRepetidos[nSemRepetidos] = vetor[i];
                    nSemRepetidos++;
                }
            }
            n = nSemRepetidos;
            for (int i = 0; i < n; i++)
            {
                vetor[i] = vetorSemRepetidos[i];
            }
            cout << "Os valores atuais do vetor sem repetidos são: ";
            for (int i = 0; i < n; i++)
            {
                cout << vetor[i] << " ";
            }
            cout << endl;
            cout << "Os valores repetidos foram retirados." << endl;
            break;
        }
        case 7:
        {
            cout << "Saindo..." << endl;
            break;
        }
        default:
        {
            cout << "Opção inválida. Tente novamente." << endl;
            break;
        }
        }

    } while (opcao != 7);
    cout << "Os valores finais do vetor são: ";
    for (int i = 0; i < n; i++)
    {
        cout << vetor[i] << " ";
    }
    cout << endl;
    cout << "==============================" << endl;
    cout << "Gabriel Henrique Silva Pereira" << endl;
    cout << "RA: 2025.1.08.036" << endl;
    cout << "==============================" << endl;

    return 0;
}
