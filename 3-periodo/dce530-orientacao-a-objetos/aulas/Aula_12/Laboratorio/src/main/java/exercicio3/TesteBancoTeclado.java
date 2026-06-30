package exercicio3;

import java.util.Scanner;

public class TesteBancoTeclado
{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Criando o cliente");
        System.out.print("Digite o nome: ");
        String nome = scanner.nextLine();
        System.out.print("Digite o sobrenome: ");
        String sobrenome = scanner.nextLine();

        Cliente cliente = new Cliente(nome, sobrenome);

        System.out.print("Digite o saldo inicial da conta: ");
        double saldoInicial = scanner.nextDouble();

        System.out.println("Criando uma conta com saldo de R$ " + saldoInicial + " para o cliente " + nome + " " + sobrenome + ".");

        Conta conta = new Conta(saldoInicial);
        cliente.setConta(conta);

        System.out.print("Digite o valor para sacar (primeiro saque): ");
        double v1 = scanner.nextDouble();
        System.out.println("Sacando R$ " + v1 + ": " + conta.sacar(v1));

        System.out.print("Digite o valor para depositar: ");
        double v2 = scanner.nextDouble();
        System.out.println("Depositando R$ " + v2 + ": " + conta.depositar(v2));

        System.out.print("Digite o valor para sacar (segundo saque): ");
        double v3 = scanner.nextDouble();
        System.out.println("Sacando R$ " + v3 + ": " + conta.sacar(v3));

        System.out.print("Digite o valor para sacar (terceiro saque): ");
        double v4 = scanner.nextDouble();
        System.out.println("Sacando R$ " + v4 + ": " + conta.sacar(v4));

        System.out.println("O saldo da conta é R$ " + conta.getSaldo());

        scanner.close();
    }
}