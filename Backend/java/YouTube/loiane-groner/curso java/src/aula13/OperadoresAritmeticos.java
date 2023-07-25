package aula13;

public class OperadoresAritmeticos {
    public static void main(String[] args) {
        int resultado = 1 + 2;
        System.out.println(resultado);

        resultado = resultado - 1;
        System.out.println(resultado);

        resultado = resultado * 2;
        System.out.println(resultado);

        resultado = resultado / 2;
        System.out.println(resultado);

        resultado = resultado + 8;
        System.out.println(resultado);

        resultado = resultado % 7;
        System.out.println(resultado);

        String primeiroNome = "Esta é";
        String segundoNome = " uma String concatenada.";
        String terceiroNome = primeiroNome + segundoNome;

        System.out.println(terceiroNome);

        resultado++; //4
        System.out.println(resultado++);
        // mesma coisa que =>
        // 1 - System.out.println(resultado);
        // 2 - resultado = resultado + 1 == resultado += 1


        System.out.println(++resultado);
        // mesma coisa que =>
        // 1 - resultado = resultado + 1 == resultado += 1
        // 2 - System.out.println(resultado);

        System.out.println(++resultado);

    }
}
