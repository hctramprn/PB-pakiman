//Diccionario que contiene las urls para cada Pakiman
var imagenes = [];
imagenes["Cauchin"] = "imagenes/vaca.png";
imagenes["Pokacho"] = "imagenes/pollo.png";
imagenes["Tocinauro"] = "imagenes/cerdo.png";

//Clase que construye los pakimanes a partir de parametros para nombre, vida y ataque
class Pakiman {
  constructor(n, v, a) {
    this.imagen = new Image();
    this.nombre = n;
    this.vida = v;
    this.ataque = a;
    //Asigna la fuente de la imagen desde los valores del diccionario
    this.imagen.src = imagenes[this.nombre];
  }

  //Función que muestra un Alert cada vez que es llamada
  hablar() {
    alert(this.nombre);
  }

  //Función que escribe en el documento diferentes parámetros de los pakimanes
  mostrar() {
    document.body.appendChild(this.imagen);
    document.write("<p>");
    document.write("<strong>" + this.nombre + "</strong> <br>");
    document.write("Vida " + this.vida + "<br>");
    document.write("Ataque " + this.ataque + "<hr>");
    document.write("</p>");
  }
}

/*Se utiliza la clase Pakiman para declarar cada una de las variables de
los pakimanes con sus valores para nombre, vida y ataque*/
var cauchin = new Pakiman("Cauchin", 100, 30);
var pokacho = new Pakiman("Pokacho", 80, 50);
var tocinauro = new Pakiman("Tocinauro", 120, 40);

/*Crea una colección con todos los pakimanes. Los valores los toma de
las variables que se declararon con las clases*/
var coleccion = [];
coleccion.push(cauchin);
coleccion.push(pokacho);
coleccion.push(tocinauro);

//Método para agregar pakimanes sin siquiera tener que declarar las variables
/*
var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));
*/

//Ciclo For que recorre el indice de todos los valores con los que cuenta colección
for (var pakin in coleccion) {
  console.log(coleccion[pakin]);
}

//División en la consola para identificar el momento en el que termina el ciclo
console.log("División");

//Ciclo For que recorre todos los valores con los que cuenta colección
for (var pakin of coleccion) {
  console.log(pakin);
  pakin.mostrar();
}
