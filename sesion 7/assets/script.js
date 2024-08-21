var nombreProducto = prompt("Ingrese el nombre del producto");
var precio = parseInt(prompt("Por favor, ingrese el valor del producto"));
var cantidad = parseInt(prompt("Por favor, ingrese la cantidad que lleva"));
var stock = 10;
if(stock >= cantidad){
    var precioFinal = precio * cantidad;
    document.getElementById("cantidad").innerHTML = "La cantidad del producto es: " + cantidad;
    document.getElementById("precioFinal").innerHTML = "El precio a pagar es de: $" + precioFinal;
    console.log("El precio final es:" + precioFinal);
}
else{
    console.log("No hay suficientes articulos");
    document.getElementById("cantidad").innerHTML = "No hay sufiencte articulos, solo nos queda: " + stock + " unidades";
}



document.getElementById("nombreProducto").innerHTML = "El articulo: " + nombreProducto;
document.getElementById("precio").innerHTML = "El precio del producto es: $" + precio;

