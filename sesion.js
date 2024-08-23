document.getElementById('loginform').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.querySelector('.message');

    // Ejemplo de credenciales correctas
    const correctUsername = 'Marta';
    const correctPassword = '280624';

    if (username === correctUsername && password === correctPassword) {
        window.location.href = 'principal.html';
    } else {
        message.style.color = 'red';
        message.textContent = 'Usuario o contraseña incorrectos';
    }
});

// Manejo del modal
var modal = document.getElementById('forgot-password-modal');
var btn = document.getElementById('forgot-password-link');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}