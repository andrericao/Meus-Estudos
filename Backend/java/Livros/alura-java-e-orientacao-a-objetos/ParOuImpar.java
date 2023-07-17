import java.util.Scanner;

public class ParOuImpar {
	public static void main(String[] args) {
		Scanner numero = new Scanner(System.in);
		int x;
		x = numero.nextInt();
		while(x > 1){
			if(x % 2 == 0) {
				x = x / 2;
				System.out.print(" --> " + x);
			} else if (x % 2 == 1) {
				x = 3 * x - 1;
				System.out.print(" --> " + x);
			} 
		}
	}
}
