public class LeitorArgumentos {

    public static void main(String[] args) {

        System.out.println("teste");
        if (args.length > 0){
            for (int i = 0; i < args.length; i++){
                System.out.println(args[i]);
            }
        }
    }
}