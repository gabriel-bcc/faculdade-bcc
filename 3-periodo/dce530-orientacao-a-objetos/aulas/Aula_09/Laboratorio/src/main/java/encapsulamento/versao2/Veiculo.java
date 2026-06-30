package encapsulamento.versao2;

public class Veiculo {
    private double carga;
    private double cargaMaxima;

    public Veiculo(double cargaMaxima) {
        this.cargaMaxima = cargaMaxima;
        this.carga = 0.0;
    }

    public double getCarga() {
        return carga;
    }

    public double getCargaMaxima() {
        return cargaMaxima;
    }

    public boolean adicionarCaixa(double peso) {
        if (this.carga + peso <= this.cargaMaxima) {
            this.carga += peso;
            return true;
        }
        return false;
    }
}