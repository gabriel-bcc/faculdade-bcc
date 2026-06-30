import banco.Conta;
import java.util.Scanner;

public class TesteBancoTeclado {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.println("--- SISTEMA BANCÁRIO ---");
        System.out.print("Introduza o saldo inicial da conta: R$ ");
        double saldoInicial = teclado.nextDouble();

        Conta c = new Conta(saldoInicial);

        System.out.print("Introduza um valor para SACAR: R$ ");
        double valorSaque = teclado.nextDouble();
        c.sacar(valorSaque);
        System.out.println("Saldo atual: R$ " + c.getSaldo());

        System.out.print("Introduza um valor para DEPOSITAR: R$ ");
        double valorDeposito = teclado.nextDouble();
        c.depositar(valorDeposito);
        System.out.println("Saldo atual: R$ " + c.getSaldo());

        teclado.close();
    }
}
