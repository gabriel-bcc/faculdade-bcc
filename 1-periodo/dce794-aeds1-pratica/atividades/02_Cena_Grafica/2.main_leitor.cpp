// Projeto 2 - Cálculo de área e volume da cena gráfica
// Autor: Gabriel Henrique Silva Pereira    RA: 2025.1.08.036
// Descrição: Lê o arquivo 'cenagrafica.txt' e calcula área e volume total

#include <iostream>
#include <fstream>
#include <sstream>
#include <string>
#include <cmath>

using namespace std;

int main() {
    ifstream arquivo("cenagrafica.txt");

    if (!arquivo.is_open()) {
        cout << "Erro ao abrir o arquivo!" << endl;
        return 1;
    }

    string linha, figura;
    float totalArea = 0.0, totalVolume = 0.0;
    int lendo = 1;
    
    while (lendo && getline(arquivo, linha)) {
        if (linha == "fim") {
            lendo = 0; // Para de ler ao encontrar 'fim'
        } else {
            istringstream ss(linha);
            ss >> figura;
        
        if (figura == "quadrado") {
            float lado;
            ss >> lado;
            totalArea += lado * lado;
        } else if (figura == "retangulo") {
            float base, altura;
            ss >> base >> altura;
            totalArea += base * altura;
        } else if (figura == "triangulo") {
            float base, altura;
            ss >> base >> altura;
            totalArea += (base * altura) / 2.0;
        } else if (figura == "cubo") {
            float lado;
            ss >> lado;
            totalArea += 6 * lado * lado;
            totalVolume += pow(lado, 3);
        } else if (figura == "paralelepipedo") {
            float c, l, a;
            ss >> c >> l >> a;
            totalArea += 2 * (c * l + c * a + l * a);
            totalVolume += c * l * a;
        } else if (figura == "cilindro") {
            float r, h;
            ss >> r >> h;
            totalArea += 2 * M_PI * r * (r + h);
            totalVolume += M_PI * r * r * h;
        } else if (figura == "cone") {
            float r, h;
            ss >> r >> h;
            float g = sqrt(r * r + h * h); // geratriz
            totalArea += M_PI * r * (r + g);
            totalVolume += (M_PI * r * r * h) / 3.0;
        } else if (figura == "esfera") {
            float r;
            ss >> r;
            totalArea += 4 * M_PI * r * r;
            totalVolume += (4.0 / 3.0) * M_PI * pow(r, 3);
        } else {
            // Figura desconhecida será ignorada
            cout << "Figura inválida ignorada: " << figura << endl;
        }
    }
    }
    arquivo.close();

    cout << "\n==== RESULTADO FINAL ====" << endl;
    cout << "Área total: " << totalArea << endl;
    cout << "Volume total: " << totalVolume << endl;

    return 0;
}
