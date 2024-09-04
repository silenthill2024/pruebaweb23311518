// Ejemplo de validación de formulario simple
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (nombre === '' || email === '' || mensaje === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Aquí puedes agregar lógica para enviar el formulario, por ejemplo, usando EmailJS o una API backend.

    alert('¡Mensaje enviado correctamente!');
    this.reset(); // Reinicia el formulario
});
