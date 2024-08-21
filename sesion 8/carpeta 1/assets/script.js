let diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
dia = prompt("Por favor ingresa un dia")

for (i = 0; i < diasSemana.length; i++){
    // Encontrar dia viernes
    if(diasSemana[i] === dia){
        document.getElementById("dia").innerHTML = dia + "esta en la posicion: " + i;
        break;
    }
    else{
        document.getElementById("dia").innerHTML = "dia incorrecto";
    }
}