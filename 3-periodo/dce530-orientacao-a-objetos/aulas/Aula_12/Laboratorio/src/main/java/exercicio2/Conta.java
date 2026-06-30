package exercicio2;

public class Conta {
    private double saldo;

    public Conta(double saldoInicial) {
        this.saldo = saldoInicial;
    }

    public double getSaldo() {
        return saldo;
    }

    public boolean depositar(double valor) {
        saldo += valor;
        return true;                    // sempre true (conforme diagrama)
    }

    public boolean sacar(double valor) {
        if (valor <= saldo) {           // "não é maior que o saldo"
            saldo -= valor;
            return true;
        }
        return false;
    }
}