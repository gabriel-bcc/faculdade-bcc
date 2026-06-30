import encapsulamento.versao3.Veiculo;
import java.util.Scanner;

public class TesteVeiculo4 {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.println("--- SISTEMA DA TRANSPORTADORA ---");
        System.out.print("Introduza a carga máxima do veículo (em kg): ");
        double cargaMax = teclado.nextDouble();

        Veiculo v = new Veiculo(cargaMax);

        System.out.print("Quantas caixas deseja adicionar? ");
        int qtdCaixas = teclado.nextInt();

        for (int i = 1; i <= qtdCaixas; i++) {
            System.out.print("Introduza o peso da caixa " + i + " (em kg): ");
            double peso = teclado.nextDouble();

            boolean sucesso = v.adicionarCaixa(peso);
            if (sucesso) {
                System.out.println("Caixa adicionada com sucesso!");
            } else {
                System.out.println("ERRO: A caixa de " + peso + "kg ultrapassa o limite máximo. Rejeitada.");
            }
        }

        System.out.println("A carga final do veiculo é: " + v.getCarga() + " kg");
        teclado.close();
    }
}