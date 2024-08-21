// Agregar evento para el boton anadir

document.getElementById('addTaskButton').addEventListener('click', function(){
    const taskInput = document.getElementById('taskInput');
    
    // Verifica si la entreda esta vacia
    if(taskInput !== ''){
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = taskInput.value;
        // Agregamos un Toggle tarea completada con un click
        li.addEventListener('click', function(){
            this.classList.toggle('list-group-item-success');
        });

        // Creamos un boton para borrar la tarea
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm float-end delete';
        deleteBtn.textContent = 'Eliminar';

        // Agregamos funcionalidad para remover tareas
        deleteBtn.onclick = function(){
            this.parentElement.remove();
        };
        li.appendChild(deleteBtn);

        // Agregar la nueva tarea en la lista
        document.getElementById('taskList').appendChild(li);

        // Limpiamos la entrada despues de agregar una tarea
        taskInput.value = '';
    }
});