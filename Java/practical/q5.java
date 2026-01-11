public class q5 {
   static String reverseString (String str){
        String reverseStr = "";
        for(int i = str.length()-1;i>=0;i--){
            reverseStr+= str.charAt(i);
        }
        return reverseStr;
   } 

   public static void main(String[] args) {
      System.out.println(reverseString("chowan"));
   }
}
