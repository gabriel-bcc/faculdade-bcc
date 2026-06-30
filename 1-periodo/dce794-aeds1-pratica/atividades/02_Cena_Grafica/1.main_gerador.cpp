// Projeto 1 - Criação da cena gráfica
// Autor: Gabriel Henrique Silva Pereira    RA: 2025.1.08.036
// Descrição: Solicita figuras geométricas e grava em arquivo cenagrafica.txt

#include <iostream>
#include <fstream>
#include <string>

using namespace std;

int main() {
    // Cria o arquivo "cenagrafica.txt"
    ofstream arquivo("cenagrafica.txt");

    // Verifica se o arquivo foi aberto corretamente
    if (!arquivo.is_open()) {
        cout << "Erro ao criar o arquivo!" << endl;
        return 1;
    }

    string figura;

    // Exibe as opções de figuras válidas
    cout << "==========================================" << endl;
    cout << "   Figuras válidas para adicionar:" << endl;
    cout << " 2D: quadrado, retangulo, triangulo" << endl;
    cout << " 3D: cubo, paralelepipedo, cilindro, cone, esfera" << endl;
    cout << " Digite 'fim' para encerrar." << endl;
    cout << "==========================================" << endl;

    // Loop para coletar informações até que o usuário digite "fim"
    while (figura != "fim") {
        cout << "\nFigura: ";
        cin >> figura;  // Solicita o nome da figura

        if (figura == "fim") {
            arquivo << "fim" << endl;  // Encerra o arquivo quando "fim" é digitado
            continue;
        }

        // Grava a figura e seus parâmetros no arquivo
        arquivo << figura;

        if (figura == "quadrado" || figura == "cubo") {
            float lado;
            cout << "Lado: ";
            cin >> lado;
            arquivo << " " << lado << endl;
        } else if (figura == "retangulo" || figura == "triangulo") {
            float base, altura;
            cout << "Base: ";
            cin >> base;
            cout << "Altura: ";
            cin >> altura;
            arquivo << " " << base << " " << altura << endl;
        } else if (figura == "paralelepipedo") {
            float c, l, a;
            cout << "Comprimento: ";
            cin >> c;
            cout << "Largura: ";
            cin >> l;
            cout << "Altura: ";
            cin >> a;
            arquivo << " " << c << " " << l << " " << a << endl;
        } else if (figura == "cilindro" || figura == "cone") {
            float r, h;
            cout << "Raio: ";
            cin >> r;
            cout << "Altura: ";
            cin >> h;
            arquivo << " " << r << " " << h << endl;
        } else if (figura == "esfera") {
            float r;
            cout << "Raio: ";
            cin >> r;
            arquivo << " " << r << endl;
        } else {
            cout << "Figura desconhecida. Tente novamente." << endl;
        }
    }

    arquivo.close();  // Fecha o arquivo após a coleta de dados
    cout << "\nArquivo 'cenagrafica.txt' criado com sucesso!" << endl;
    return 0; 
}
