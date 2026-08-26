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
                <a href="bienvenida.html">✨ Bienvenida</a>
                <a href="proyecto.html">📊 Proyecto</a>
                <a href="cuentos.html">📁 Cuentos</a>
                <a href="podcast.html">🎙️ Podcast</a>
                
                <div class="dropdown" id="healthDropdown">
                    <button class="dropbtn" type="button">🩺 Salud y Bienestar ▾</button>
                    <div class="dropdown-content">
                        <div class="dropdown-header-title">General</div>
                        <a href="guiasSalud.html">📋 Guías de Salud</a>
                        <a href="rinconlectura.html">📖 Rincón de Lectura</a>
                        <a href="preguntas.html">❓ Rincón de Preguntas</a>
                        
                        <div class="dropdown-divider"></div>
                        
                        <div class="dropdown-header-title">Guía del Embarazo</div>
                        <a href="embarazo01.html">🌟 1er Trimestre</a>
                        <a href="embarazo02.html">💧 2º Trimestre</a>
                        <a href="embarazo03.html">🌸 3er Trimestre</a>
                        <a href="embarazo04.html">💜 Parto y Postparto</a>
                    </div>
                </div>

                <div class="dropdown" id="gamesDropdown">
                    <button class="dropbtn" type="button">🎮 Juegos ▾</button>
                    <div class="dropdown-content">
                        <a href="puzzles.html">🧩 Puzzles Mágicos</a>
                        <a href="memoria.html">✨ Memoria Mágica</a>
                        <a href="adivinanzas.html">🔮 Adivinanzas</a>
                        <a href="aventura.html">🧭 Aventura</a>
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

    let footer = document.querySelector('footer');
    if (!footer) {
        footer = document.createElement('footer');
        document.body.appendChild(footer);
    }
    footer.innerHTML = `
        <p>&copy; 2026 El Nido de Estrellas. | Síguenos en nuestro <a href="https://www.youtube.com/@elnidodeestrellas" target="_blank">Canal de YouTube</a> y en <a href="https://www.instagram.com/elnidodeestrellas" target="_blank">Instagram</a></p>
    `;

    const toggleBtn = document.getElementById("mobileMenuToggle");
    const navLinks = document.getElementById("navMenuLinks");

    if (toggleBtn && navLinks) {
        toggleBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            navLinks.classList.toggle("active");
        });
    }

    const dropBtns = document.querySelectorAll('.dropbtn');
    dropBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            const dropdown = btn.closest('.dropdown');
            
            document.querySelectorAll('.dropdown').forEach(drop => {
                if (drop !== dropdown) {
                    drop.classList.remove('show');
                }
            });
            
            if (dropdown) {
                dropdown.classList.toggle('show');
            }
        });
    });

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

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});