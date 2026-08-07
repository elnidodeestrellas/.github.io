// nav.js - estructura optimizada y profesional

document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.getElementById("menu-container");

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
                <a href="cuentos.html">📁 Cuentos</a>
                <a href="proyecto.html">📊 Proyecto</a>
                
                <div class="dropdown" id="healthDropdown">
                    <button class="dropbtn" onclick="toggleDropdown(event)">🩺 Salud y Bienestar ▾</button>
                    <div class="dropdown-content">
                        <a href="diabetesInfantil.html">🩺 Diabetes Infantil</a>
                        <a href="obesidadinfantil.html">🥗 Obesidad Infantil</a>
                        <a href="cancerinfantil.html">🎗️ Cáncer Infantil</a>
                        <a href="rinconlectura.html">📖 Rincón de Lectura</a>
                    </div>
                </div>

                <div class="dropdown" id="creativeDropdown">
                    <button class="dropbtn" onclick="toggleDropdown(event)">✨ Creativo ▾</button>
                    <div class="dropdown-content">
                        <a href="podcast.html">🎙️ Podcast</a>
                        <a href="puzzles.html">🧩 Puzles</a>
                    </div>
                </div>

                <div class="dropdown" id="communityDropdown">
                    <button class="dropbtn" onclick="toggleDropdown(event)">💬 Comunidad ▾</button>
                    <div class="dropdown-content">
                        <a href="tuvoz.html">⭐ Tu voz</a>
                        <a href="contacto.html">✉️ Contacto</a>
                    </div>
                </div>
            </div>
        </nav>
        `;
    }

    const toggleBtn = document.getElementById("mobileMenuToggle");
    const navLinks = document.getElementById("navMenuLinks");

    if (toggleBtn && navLinks) {
        toggleBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }
});

function toggleDropdown(event) {
    event.stopPropagation();
    const dropdown = event.target.closest('.dropdown');
    document.querySelectorAll('.dropdown').forEach(drop => {
        if (drop !== dropdown) drop.classList.remove('show');
    });
    if (dropdown) {
        dropdown.classList.toggle('show');
    }
}

window.addEventListener('click', () => {
    document.querySelectorAll('.dropdown').forEach(drop => {
        drop.classList.remove('show');
    });
});