var numero1 = parseInt(prompt("Ingrese un numero"));
var numero2 = parseInt(prompt("Ingrese un segundo numero"));
var resultado;

document.getElementById("numero1").innerHTML = "El primer numero es: " + numero1;
document.getElementById("numero2").innerHTML = "El segundo numero es: " + numero2;

if(numero1 > numero2){
    console.log( numero1 + " es mayor que " + numero2);
    document.getElementById("resultado").innerHTML = numero1 + " es mayor que " + numero2;
    alert(numero1 + " es mayor que " + numero2)
}
else if(numero1 < numero2){
    console.log( numero1 + " es menor que " + numero2);
    document.getElementById("resultado").innerHTML = numero1 + " es menor que " + numero2;
    alert(numero1 + " es menor que " + numero2);
}

else{
    console.log("Los numeros son iguales");
    document.getElementById("resultado").innerHTML = "Los numeros son iguales";
    alert("Los numeros son iguales");
}