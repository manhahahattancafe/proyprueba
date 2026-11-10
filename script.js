document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");
    const messageDiv = document.getElementById("message");

    // Mostrar / Ocultar contraseña
    togglePassword.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePassword.textContent = "Ocultar";
        } else {
            passwordInput.type = "password";
            togglePassword.textContent = "Mostrar";
        }
    });

    // Validación del formulario al enviar
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (email === "" || password === "") {
            messageDiv.textContent = "Por favor, completa todos los campos.";
            messageDiv.style.color = "red";
            return;
        }

        if (password.length < 6) {
            messageDiv.textContent = "La contraseña debe tener al menos 6 caracteres.";
            messageDiv.style.color = "red";
            return;
        }

        messageDiv.textContent = "¡Inicio de sesión exitoso!";
        messageDiv.style.color = "green";
    });
});