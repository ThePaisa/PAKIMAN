//la clase nos permitira crear basicamente nuestro pokemon en el constructor

// tendremos 3 pokemones con atributos diferentes

//en este array la clave para acceder a la imagen sera el nombre del pokemon
caja=[];
caja["Pikachu"]= "cerdo.png"
caja["Charmander"]= "vaca.png"
caja["Bulbasour"]= "pollo.png"

console.log("esto es el array caja= "+caja)

var coleccion=[];
coleccion.push(new Pokemon("Pikachu", 100, 80, "electrico"))
coleccion.push(new Pokemon("Charmander", 80, 90, "fuego"))
coleccion.push(new Pokemon("Bulbasour", 50, 100, "agua"))

console.log("esta es mi coleccion" +coleccion)






//  for b in coleccion recorre la clave, o el indice, en este caso = sub0, sub1, sub2
//for b of coleccion recorre el valor,osea la informacion asociada al indice.

for (b of coleccion)
{
    b.mostrar()
}
