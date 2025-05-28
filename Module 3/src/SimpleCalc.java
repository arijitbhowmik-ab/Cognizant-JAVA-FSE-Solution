import java.util.Scanner;

public class SimpleCalc {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter two numbers: ");
        int a = sc.nextInt();
        int b = sc.nextInt();
        System.out.println("Enter your Choice :");
        System.out.println("1.Addition");
        System.out.println("2.Subtraction:");
        System.out.println("3.Multiplication");
        System.out.println("4.Division");
        int ch = sc.nextInt();
        switch (ch){
            case 1 :
                int sum = a+b;
                System.out.println("Addition is :"+sum);
                break;
            case 2 :
                int sub = a-b;
                System.out.println("Subtraction is :"+sub);
                break;
            case 3:
                int mul = a*b;
                System.out.println("Multiplication is :"+mul);
                break;
            case 4:
                int div = a/b;
                System.out.println("Division is :"+div);
                break;
            default:
                System.out.println("Invalid choice");
        }
    }
}
