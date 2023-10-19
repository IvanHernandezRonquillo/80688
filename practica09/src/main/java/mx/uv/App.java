package mx.uv;

import static spark.Spark.*;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );
        get("/", (request, response)->"<h1>bienvenidos</h1>");

        get("/", (request, response)->"<h1>hola mundo</h1>");

        get("/", (request, response)->"<h1>adios mundo</h1>");

        get("/", (request, response)->"<h1>fin mundo</h1>");
    }
}
