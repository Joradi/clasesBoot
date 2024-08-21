document.addEventListener('DOMContentLoaded', function(){
    let text1 = document.getElementById('text1');
    let text2 = document.getElementById('text2');
    let caja2 = document.getElementById('caja2');
    let img = document.getElementById('img');
    let caja3 = document.getElementById('caja3');

    // ocultar el div text 2 
    text2.style.display = 'none';

    // Agregar el evento mousover para mostrar el text2

    text1.addEventListener('mouseover', () => {
        text2.style.display = 'block';
    });

    // ocultar el div text 2 
    text1.addEventListener('mouseout', () => {
        text2.style.display = 'none';
    })

    // Agregar el evento para agrandar la imagen
    caja2.addEventListener('click', () => {
        img.style.width = '100%';
    });

    // Agregar el evento para restaurar el tamano de la imagen

    caja2.addEventListener('mouseout', () => {
        img.style.width = '20%';
    });

    // Agregar el evento para Agrandar el tecto del div caja3

    caja3.addEventListener('dblclick', () => {
        caja3.style.fontSize = '2em';
    });

    // Dejamos el texto del tamano correcto

    caja3.addEventListener('mouseout', () => {
        caja3.style.fontSize = '16px';
    });

})