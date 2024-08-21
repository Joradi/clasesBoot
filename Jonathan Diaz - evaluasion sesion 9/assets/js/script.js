var tareas = [
    { tarea: "Pintar la fachada de la casa" },
    { tarea: "Comprar comida para el perro" },
    { tarea: "Pagar la tarjeta de crédito" }
]

// Mostrar/ocultar formulario
const mostrarFormularioBtn = document.getElementById('mostrar-formulario');
const formulario = document.getElementById('formulario');

mostrarFormularioBtn.addEventListener('click', () => {
    if (formulario.style.display === 'none' || formulario.style.display === '') {
        formulario.style.display = 'block';
    } else {
        formulario.style.display = 'none';
    }
});

// Referencias a los elementos
const agregarTareaBtn = document.getElementById('agregar-tarea');
const nuevaTareaInput = document.getElementById('nuevaTarea');
const cuerpoTabla = document.getElementById('cuerpo-tabla');

// Función para agregar una tarea a la tabla
function agregarTareaATabla(tareaTexto) {
    // Crear nueva fila de la tabla
    const nuevaFila = document.createElement('tr');

    // Crear celda para la tarea
    const celdaTarea = document.createElement('td');
    celdaTarea.textContent = tareaTexto;

    // Crear celda para el botón de finalizar
    const celdaFinalizar = document.createElement('td');
    const botonFinalizar = document.createElement('button');
    botonFinalizar.textContent = 'Finalizar';
    botonFinalizar.className = 'btn btn-danger';
    botonFinalizar.addEventListener('click', () => {
        cuerpoTabla.removeChild(nuevaFila);
    });
    celdaFinalizar.appendChild(botonFinalizar);

    // Agregar celdas a la fila
    nuevaFila.appendChild(celdaTarea);
    nuevaFila.appendChild(celdaFinalizar);

    // Agregar fila a la tabla
    cuerpoTabla.appendChild(nuevaFila);
}

// Cargar tareas iniciales en la tabla
tareas.forEach(tareaObj => {
    agregarTareaATabla(tareaObj.tarea);
});

// Agregar nueva tarea a la tabla
agregarTareaBtn.addEventListener('click', () => {
    const tareaTexto = nuevaTareaInput.value.trim();

    if (tareaTexto !== '') {
        agregarTareaATabla(tareaTexto);

        // Limpiar el input
        nuevaTareaInput.value = '';
    }
});