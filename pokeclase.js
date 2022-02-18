class Pokemon 
{
    constructor (nombre, vida, poder, tipo)
    {
        
        this.nombre= nombre
        this.vida= vida
        this.poder= poder
        this.tipo = tipo
        this.imagen= new Image()
        this.imagen.src= caja[this.nombre];   //aqui se invoca la clave del array, para obtener su valor
        console.log(this.imagen)                //la clave es el nombre, que a su vez es el que recibe la clase de la variable clase

        
    }

    mostrar()
    {

        document.write("<strong>"+this.nombre +"</strong>"+ "<br>")
        document.body.appendChild(this.imagen );
        document.write("<br>"+ "<strong>"+"Vida: " +"</strong>"+ this.vida+ "<br>")
        document.write("<strong>"+"Poder: "+"</strong>"+ this.poder+ "<br>")
        document.write("<strong>"+ "Tipo: "+"</strong>"+this.tipo )
        document.write("<hr>")

    }

    hablar()
    {
        alert("holaaa")
    }

    

}
