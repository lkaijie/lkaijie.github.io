public class test {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
    // create a dog class
    public class Dog {
        private String name;
        private int age;
        public Dog(String name, int age) {
            this.name = name;
            this.age = age;
        }
        public String getName() {
            return name;
        }
        public int getAge() {
            return age;
        }
    }
}