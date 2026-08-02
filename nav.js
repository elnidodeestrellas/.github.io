document.addEventListener("DOMContentLoaded", function() {
    const navHTML = `
    <nav>
        <div class="logo-area">
            <img src="img/logo3d.webp" alt="El Nido de Estrellas" class="logo-img">
            <h2>El Nido de Estrellas</h2>
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

    // Sistema con retardo de seguridad para móviles y ordenadores
    const enlacesNav = document.querySelectorAll('nav a');
    enlacesNav.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            let destino = this.getAttribute('href');
            if (!destino || destino.startsWith('http') || destino.startsWith('#')) return;

            // Evitamos que salte de página de inmediato
            e.preventDefault();

            // Guardamos el clic de forma local con total seguridad
            let clave = 'clic_nido_' + destino;
            let actual = parseInt(localStorage.getItem(clave) || 0);
            localStorage.setItem(clave, actual + 1);

            // Damos un margen de 200 milisegundos para que se guarde bien y cambiamos de página
            setTimeout(() => {
                window.location.href = destino;
            }, 200);
        });
    });
});