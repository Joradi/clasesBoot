document.addEventListener('DOMContentLoaded', function(){ // escucha un elemento
    
    // Selecciona un elemento por id
    
    const elemento = document.getElementById('elemento');
    
    // Cambiar el contenido del HTML  

    elemento.textContent = 'Hello World';

    // cambiar el color y el texto de nuestro contenedor

    elemento.style.color = 'peru';
    elemento.style.fontSize = '20px';
    elemento.addEventListener('click', function(){
        alert('Haz Pinchado en el elemento');
        
    });
});