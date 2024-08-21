// toma los elementos del html para poder modificar
document.addEventListener('DOMContentLoaded', function(){
    const primary_btn = document.querySelector('.primary-btn');
    const secondary_btn = document.querySelector('.sencondary-btn');
    const success_btn = document.querySelector('.success-btn');
    const danger_btn = document.querySelector('.danger-btn');
    const textContainer = document.getElementById('textContainer')

    // Funcion para cambiar color del fondo
    
    function cambioColor(color){
        document.body.style.backgroundColor = color;
    }

    function agregarTexto(text){
        // Elimina los parrafos anteriores
        textContainer.innerHTML = '';
        // Crea el parrafo del boton que seleccionas
        const parrafo = document.createElement('p');
        parrafo.textContent = text;
        textContainer.appendChild(parrafo);
    }
    // Asigna los distintos eventos click

    primary_btn.addEventListener('click', function(){
        cambioColor('#3498db');
        agregarTexto('Se cambio el color de la pagina al del boton primario');
    })
    secondary_btn.addEventListener('click', function(){
        cambioColor('#2ecc71');
        agregarTexto('Se cambio el color de la pagina al del boton secundario');
    })
    success_btn.addEventListener('click', function(){
        cambioColor('#27ae60');
        agregarTexto('Se cambio el color de la pagina al del boton exito');
    })
    danger_btn.addEventListener('click', function(){
        cambioColor('#e74c3c');
        agregarTexto('Se cambio el color de la pagina al del boton peligro');
    })
})