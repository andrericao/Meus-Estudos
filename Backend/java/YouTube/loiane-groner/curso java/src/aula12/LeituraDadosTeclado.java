package aula12;

import java.util.Scanner;

public class LeituraDadosTeclado {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        System.out.println("Digite se nome:");
        String nome = scan.nextLine();
        System.out.println("seu nome é: " + nome);
    }
}
