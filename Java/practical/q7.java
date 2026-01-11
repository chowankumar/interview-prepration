public class q7 {
    static void leapyear (int a){
        if((a%4 == 0 & a%100 != 0) || a%400 == 0 ){
            System.out.println("leap");

        }else{
            System.out.println("not leap");
        }
    }
    public static void main(String[] args) {
        leapyear(2024);
    }
}
