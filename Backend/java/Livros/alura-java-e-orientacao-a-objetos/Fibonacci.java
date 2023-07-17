class Fibonacci {
	public static void main(String[] args){
		int sec = 1;
		int init = 0;
		System.out.print(sec);
		while(sec <= 100){
			sec = init + sec; 
			init = sec - init;
			if(sec <= 100) {
				System.out.print(", " + sec);
			} else {
				System.out.println(".");
			}
		}
	}
}