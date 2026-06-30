import encapsulamento.versao1.Veiculo;

public class TesteVeiculo1 {
    public static void main(String[] args) {
        System.out.println("Criando um veículo com carga máxima de 10.000kg.");
        Veiculo v = new Veiculo(10000);

        System.out.println("Adicionando Caixa número 1 (500kg)");
        v.carga += 500;
        System.out.println("Adicionando Caixa número 2 (250kg)");
        v.carga += 250;
        System.out.println("Adicionando Caixa número 3 (5000kg)");
        v.carga += 5000;
        System.out.println("Adicionando Caixa número 4 (4000kg)");
        v.carga += 4000;
        System.out.println("Adicionando Caixa número 5 (300kg)");
        v.carga += 300;

        System.out.println("A carga do veículo é: " + v.getCarga() + " kg");
    }
}