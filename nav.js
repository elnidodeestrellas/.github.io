// nav.js - código completo integrado

document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.getElementById("menu-container"); // o el selector que uses para inyectar

    if (headerContainer) {
        headerContainer.innerHTML = `
        <nav>
            <div class="logo-area">
                <a href="index.html" style="text-decoration: none; display: flex; align-items: center; gap: 10px;">
                    <img src="img/logo3dlimpio.png" alt="El Nido de Estrellas" class="logo-img" style="width: 50px; height: 50px; object-fit: contain;">
                    <h2>El Nido de Estrellas</h2>
                </a>
            </div>
            
            <button class="menu-toggle" id="mobileMenuToggle" aria-label="Abrir menú">
                ☰
            </button>

            <div class="menu-links" id="navMenuLinks">
                <a href="index.html">🏠 Inicio</a>
                <a href="proyecto.html">📊 Proyecto</a>
                <a href="cuentos.html">📁 Cuentos</a>
                <a href="recursos.html">📚 Recursos</a>
                <a href="diabetesInfantil.html">🩺 Diabetes</a>
                
                <div class="dropdown" id="moreDropdown">
                    <button class="dropbtn" onclick="toggleDropdown(event)">Más ▾</button>
                    <div class="dropdown-content">
                        <a href="podcast.html">🎙️ Podcast</a>
                        <a href="puzzles.html">🧩 Puzles</a>
                        <a href="rinconlectura.html">📖 Lectura</a>
                        <a href="contacto.html">✉️ Contacto</a>
                    </div>
                </div>

                <a href="tuvoz.html" class="nav-estelar-btn">⭐ Tu voz</a>
            </div>
        </nav>
        `;
    }

    // control del menú hamburguesa en móviles
    const toggleBtn = document.getElementById("mobileMenuToggle");
    const navLinks = document.getElementById("navMenuLinks");

    if (toggleBtn && navLinks) {
        toggleBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }
});

// función global para el desplegable de "más"
function toggleDropdown(event) {
    event.stopPropagation();
    const dropdown = event.target.closest('.dropdown');
    if (dropdown) {
        dropdown.classList.toggle('show');
    }
}

// cerrar el desplegable si se hace clic fuera
window.addEventListener('click', () => {
    document.querySelectorAll('.dropdown').forEach(drop => {
        drop.classList.remove('show');
    });
});