document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('document').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    console.log('Usuario creado:', { username, email, password });

    document.getElementById('userForm').reset();
});

document.getElementById('password').addEventListener('input', function() {
    const password = document.getElementById('password').value;
    if (password.length >= 8) {
        alert('Contraseña segura!');
    }
});