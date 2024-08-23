document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    alert("Formulario enviado correctamente");

    // Limpiar los campos del formulario
    this.reset();
})