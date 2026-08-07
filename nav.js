document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.getElementById("menu-container");

    if (headerContainer) {
        headerContainer.innerHTML = `
        <nav class="main-nav">
            <div class="logo-area">
                <a href="index.html" class="logo-link">
                    <img src="img/logo3dlimpio.png" alt="El Nido de Estrellas" class="logo-img">
                    <h2>El Nido de Estrellas</h2>
                </a>
            </div>
            
            <button class="menu-toggle" id="mobileMenuToggle" aria-label="Abrir menú" type="button">
                ☰
            </button>

            <div class="menu-links" id="navMenuLinks">
                <a href="index.html">🏠 Inicio</a>
                <a href="cuentos.html">📁 Cuentos</a>
                <a href="proyecto.html">📊 Proyecto</a>
                
                <div class="dropdown" id="healthDropdown">
                    <button class="dropbtn" type="button">🩺 Salud y Bienestar ▾</button>
                    <div class="dropdown-content">
                        <a href="diabetesInfantil.html">🩺 Diabetes Infantil</a>
                        <a href="obesidadinfantil.html">🥗 Obesidad Infantil</a>
                        <a href="cancerinfantil.html">🎗️ Cáncer Infantil</a>
                        <a href="rinconlectura.html">📖 Rincón de Lectura</a>
                    </div>
                </div>

                <div class="dropdown" id="creativeDropdown">
                    <button class="dropbtn" type="button">✨ Creativo ▾</button>
                    <div class="dropdown-content">
                        <a href="podcast.html">🎙️ Podcast</a>
                        <a href="puzzles.html">🧩 Puzles</a>
                    </div>
                </div>

                <div class="dropdown" id="communityDropdown">
                    <button class="dropbtn" type="button">💬 Comunidad ▾</button>
                    <div class="dropdown-content">
                        <a href="tuvoz.html">⭐ Tu voz</a>
                        <a href="contacto.html">✉️ Contacto</a>
                    </div>
                </div>
            </div>
        </nav>
        <div class="nido-flotante">
            <img src="img/logo3dlimpio.png" alt="El Nido de Estrellas">
        </div>
        `;
    }

    // 1. Configuración robusta del botón hamburguesa móvil
    const toggleBtn = document.getElementById("mobileMenuToggle");
    const navLinks = document.getElementById("navMenuLinks");

    if (toggleBtn && navLinks) {
        toggleBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            navLinks.classList.toggle("active");
        });
    }

    // 2. Configuración de los desplegables con soporte táctil mejorado y delegación segura
    const dropBtns = document.querySelectorAll('.dropbtn');
    dropBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            const dropdown = btn.closest('.dropdown');
            
            // Cierra los demás desplegables abiertos
            document.querySelectorAll('.dropdown').forEach(drop => {
                if (drop !== dropdown) {
                    drop.classList.remove('show');
                }
            });
            
            // Alterna el estado del desplegable actual
            if (dropdown) {
                dropdown.classList.toggle('show');
            }
        });
    });

    // 3. Cierre automático al hacer clic o tap fuera del menú o de los desplegables
    window.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown').forEach(drop => {
                drop.classList.remove('show');
            });
        }
        
        if (navLinks && navLinks.classList.contains('active')) {
            if (!navLinks.contains(e.target) && toggleBtn && !toggleBtn.contains(e.target)) {
                navLinks.classList.remove('active');
            }
        }
    });

    // 4. Soporte para orientación o cambios de tamaño (cierra el menú móvil si se pasa a escritorio)
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});