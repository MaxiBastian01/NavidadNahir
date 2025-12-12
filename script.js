// Scroll suave al hacer clic en el botón del hero
document.addEventListener("DOMContentLoaded", () => {
    const boton = document.querySelector(".btn-primario");
    if (!boton) return;

    boton.addEventListener("click", (e) => {
        e.preventDefault();
        const seccion = document.querySelector(boton.getAttribute("href"));
        if (seccion) {
            seccion.scrollIntoView({ behavior: "smooth" });
        }
    });
});
