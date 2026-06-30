package encapsulamento.versao3;

public class Veiculo {
    private double carga;
    private double cargaMaxima;

    public Veiculo(double cargaMaxima) {
        this.cargaMaxima = quilosParaNewtons(cargaMaxima);
        this.carga = 0.0;
    }

    public double getCarga() {
        return newtonsParaQuilos(this.carga);
    }

    public double getCargaMaxima() {
        return newtonsParaQuilos(this.cargaMaxima);
    }

    public boolean adicionarCaixa(double peso) {
        double pesoEmNewtons = quilosParaNewtons(peso);
        if (this.carga + pesoEmNewtons <= this.cargaMaxima) {
            this.carga += pesoEmNewtons;
            return true;
        }
        return false;
    }

    private double newtonsParaQuilos(double peso) {
        return peso / 9.8;
    }

    private double quilosParaNewtons(double peso) {
        return peso * 9.8;
    }
}