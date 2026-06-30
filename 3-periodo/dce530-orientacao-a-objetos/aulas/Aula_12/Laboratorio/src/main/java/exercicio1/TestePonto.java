package exercicio1;

public class TestePonto {
    public static void main(String[] args) {
        Ponto primeiroPonto;
        Ponto segundoPonto;

        primeiroPonto = new Ponto();
        segundoPonto = new Ponto(400, 230);

        primeiroPonto.setX(200);
        primeiroPonto.setY(200);

        System.out.println("Coordenadas do primeiro ponto (x,y): (" + primeiroPonto.getX() + "," + primeiroPonto.getY() + ")");
        System.out.println("Coordenadas do segundo ponto (x,y): (" + segundoPonto.getX() + "," + segundoPonto.getY() + ")");

        Ponto outraRefSegundoPonto;
        outraRefSegundoPonto = segundoPonto;

        System.out.println("\nCriação de uma segunda referência para o segundo ponto, chamada outraRefSegundoPonto\n");
        System.out.println("Exibindo o conteúdo de todas referências");

        System.out.println("Coordenadas do primeiro ponto (x,y): (" + primeiroPonto.getX() + "," + primeiroPonto.getY() + ")");
        System.out.println("Coordenadas do segundo ponto (x,y): (" + segundoPonto.getX() + "," + segundoPonto.getY() + ")");
        System.out.println("Coordenadas do objeto apontado pela referência outraRefSegundoPonto (x,y): (" + outraRefSegundoPonto.getX() + "," + outraRefSegundoPonto.getY() + ")");

        // Alteração demonstrando que as duas referências apontam para o mesmo objeto
        outraRefSegundoPonto.setX(840);
        outraRefSegundoPonto.setY(350);

        System.out.println("\nAlterando as coordenadas do segundo ponto para (840,350)");

        System.out.println("Coordenadas do primeiro ponto (x,y): (" + primeiroPonto.getX() + "," + primeiroPonto.getY() + ")");
        System.out.println("Coordenadas do segundo ponto (x,y): (" + segundoPonto.getX() + "," + segundoPonto.getY() + ")");
        System.out.println("Coordenadas do objeto apontado pela referência outraRefSegundoPonto (x,y): (" + outraRefSegundoPonto.getX() + "," + outraRefSegundoPonto.getY() + ")");
    }
}