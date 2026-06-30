package exercicio2;

public class TesteBanco {
    public static void main(String[] args) {
        System.out.println("Criando o cliente Bruno Henrique");

        Cliente cliente = new Cliente("Bruno", "Henrique");

        System.out.println("Criando uma conta com saldo de R$ 50.000,00 para o cliente Bruno Henrique.");

        Conta conta = new Conta(50000.0);
        cliente.setConta(conta);                     // associação 1:1

        // Teste da associação (como sugerido no PDF)
        Conta contaDoCliente = cliente.getConta();

        System.out.println("Sacando R$ 1.200,00: " + contaDoCliente.sacar(1200.0));
        System.out.println("Depositando R$ 8.525,00: " + contaDoCliente.depositar(8525.0));
        System.out.println("Sacando R$ 12.800,00: " + contaDoCliente.sacar(12800.0));
        System.out.println("Sacando R$ 50.000,00: " + contaDoCliente.sacar(50000.0));

        System.out.println("O saldo da conta é R$ " + contaDoCliente.getSaldo());
    }
}