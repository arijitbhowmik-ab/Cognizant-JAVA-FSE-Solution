
public class methodOverloading {
    public static class Exam{
        public int sum(int a,int b){
            return a+b;
        }
        public double sum(double a,double b){
            return a+b;
        }
        public int sum(int a,int b,int c){
            return a+b+c;
        }
    }
    public static void main(String[] args) {
        Exam obj = new Exam();
        System.out.println(obj.sum(2,4));
        System.out.println(obj.sum(10.0,12.0));
        System.out.println(obj.sum(2,4,5));
    }
}
