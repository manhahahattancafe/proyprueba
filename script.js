document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const toggleBtn = document.getElementById("togglePassword");
    const message = document.getElementById("message");

    // Alternar visibilidad de la contraseña
    toggleBtn.addEventListener("click", () => {
        const isPassword = passwordInput.type === "password";
        passwordInput.type = isPassword ? "text" : "password";
        toggleBtn.textContent = isPassword ? "Ocultar" : "Mostrar";
    });

    // Función para mostrar mensajes
    function mostrarMensaje(texto, tipo) {
        message.textContent = texto;
        message.className = `mensaje mensaje-${tipo}`;
    }

    // Manejar el envío del formulario
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (email === "" || password === "") {
            mostrarMensaje("Por favor, completa todos los campos.", "error");
            return;
        }

        if (email === "demo@correo.com" && password === "demo12345") {
            mostrarMensaje("Inicio de sesión de demostración correcto.", "exito");
        } else {
            mostrarMensaje("Credenciales incorrectas.", "error");
        }
    });
});