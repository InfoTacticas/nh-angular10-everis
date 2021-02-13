class ConsolePrintMessage{
    message;
    constructor(message){
        this.message = message;
    }

    print(){
        console.log(this.message);
    }
}

class HtmlPrintMessage{
    scope;
    message;
    constructor(message){
        this.message = message;
    }
    print(){
        this.scope.html.append(this.message);
    }
}

/*
class Hello {
    constructor(){
        new ConsolePrintMessage("Bienvenido");
    }
}


new Hello();

*/
// El modelo de negocio se acopla a una implementación
// Inyeccion de dependencia => el negocio no debe conocer la implementación
//Comparten constructor, pero  lo  implementa de diferente manera 

class Hello {
    constructor(typePrint){
        typePrint.print();
    }
}

new Hello( new HtmlPrintMessage("Bienvenido"));


// complejidad: Inyección Container
// contenedor de inyección de dependencia

const container = {
    Hello: [
        {inclass: HtmlPrintMessage, provider: HtmlPrintMessage
        },
        {}
    ]
}

//proveedores --> servicios
// listado de clases con la 