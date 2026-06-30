import encapsulamento.versao3.Veiculo;

public class TesteVeiculo3 {
    public static void main(String[] args) {
        System.out.println("Criando um veículo com carga máxima de 10.000kg");
        Veiculo v = new Veiculo(10000);

        System.out.println("Adicionando caixa número 1 (500kg): " + v.adicionarCaixa(500));
        System.out.println("Adicionando caixa número 2 (250kg): " + v.adicionarCaixa(250));
        System.out.println("Adicionando caixa número 3 (5000kg): " + v.adicionarCaixa(5000));
        System.out.println("Adicionando caixa número 4 (4000kg): " + v.adicionarCaixa(4000));
        System.out.println("Adicionando caixa número 5 (300kg): " + v.adicionarCaixa(300));

        System.out.println("A carga do veiculo é: " + v.getCarga() + " kg");
    }
}
