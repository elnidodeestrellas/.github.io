document.addEventListener("DOMContentLoaded", function() {
    // ----------------------------------------------------
    // 1. INYECCIÓN AUTOMÁTICA DEL FAVICON
    // ----------------------------------------------------
    let faviconLink = document.querySelector("link[rel*='icon']") || document.createElement('link');
    faviconLink.type = 'image/x-icon';
    faviconLink.rel = 'icon';
    faviconLink.href = 'favicon.ico';
    document.head.appendChild(faviconLink);

    // ----------------------------------------------------
    // 2. INYECCIÓN AUTOMÁTICA DEL LOGO FLOTANTE
    // ----------------------------------------------------
    if (!document.querySelector('.nido-flotante')) {
        const divFlotante = document.createElement('div');
        divFlotante.className = 'nido-flotante';
        divFlotante.innerHTML = `<img src="img/logo3dlimpio.png" alt="El Nido de Estrellas" loading="lazy">`;
        document.body.prepend(divFlotante);
    }

    // ----------------------------------------------------
    // 3. MENÚ DE NAVEGACIÓN Y LOGO 3D
    // ----------------------------------------------------
    const navHTML = `
    <nav>
        <div class="logo-area">
            <a href="index.html" style="text-decoration: none; display: flex; align-items: center; gap: 10px;">
                <img src="img/logo3dlimpio.png" alt="El Nido de Estrellas" class="logo-img" style="width: 50px; height: 50px; object-fit: contain;">
                <h2>El Nido de Estrellas</h2>
            </a>
        </div>
        <div class="menu-links">
            <a href="index.html">🏠 Inicio</a>
            <a href="proyecto.html">📊 Proyecto</a>
            <a href="cuentos.html">📁 Cuentos</a>
            <a href="recursos.html">📚 Recursos</a>
            
            <div class="dropdown" id="moreDropdown">
                <button onclick="toggleDropdown(event)">Más ▾</button>
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

    const contenedorNav = document.getElementById('menu-container');
    if (contenedorNav) {
        contenedorNav.innerHTML = navHTML;
    }

    // Control del menú desplegable "Más"
    window.toggleDropdown = function(event) {
        event.stopPropagation();
        const dropdown = document.getElementById('moreDropdown');
        if (dropdown) {
            dropdown.classList.toggle('show');
        }
    };

    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown button')) {
            const dropdowns = document.getElementsByClassName("dropdown");
            for (let i = 0; i < dropdowns.length; i++) {
                const openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    });

    // Sistema de registro de clics para el menú
    const enlacesNav = document.querySelectorAll('nav a');
    enlacesNav.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            let destino = this.getAttribute('href');
            if (!destino || destino.startsWith('http') || destino.startsWith('#')) return;

            e.preventDefault();

            let clave = 'clic_nido_' + destino;
            try {
                let actual = parseInt(localStorage.getItem(clave) || 0);
                localStorage.setItem(clave, actual + 1);
            } catch (err) {
                console.error("Error al registrar clic en menú:", err);
            }

            setTimeout(() => {
                window.location.href = destino;
            }, 200);
        });
    });
});