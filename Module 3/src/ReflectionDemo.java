import java.lang.reflect.*;

class Example {
    public void greet(String name) {
        System.out.println("Hello " + name);
    }
}

public class ReflectionDemo {
    public static void main(String[] args) throws Exception {
        Class<?> cls = Class.forName("Example");
        Object obj = cls.getDeclaredConstructor().newInstance();

        Method method = cls.getDeclaredMethod("greet", String.class);
        method.invoke(obj, "Java");
    }
}
