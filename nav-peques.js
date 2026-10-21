// nav-peques.js — menú de zona · El Nido de Estrellas (versión de taller, sin subir)
document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.getElementById("menu-container");

    if (headerContainer) {
        headerContainer.innerHTML = `
        <style>
            .nido-barra-peques { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; background: rgba(27, 42, 77, 0.95); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-bottom: 3px solid rgba(255, 217, 77, 0.55); }
            .nido-barra-peques .nido-interior-peques { max-width: 1180px; margin: 0 auto; padding: 10px 18px; display: flex; align-items: center; gap: 14px; flex-wrap: wrap; }
            .nido-marca-peques { display: flex; align-items: center; gap: 11px; text-decoration: none; margin-right: 6px; }
            .nido-marca-peques img { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; border: 2.5px solid #ffd94d; }
            .nido-marca-peques .nido-nombre-peques { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 1.12rem; color: #ffffff; line-height: 1.1; }
            .nido-marca-peques .nido-zona-peques { display: block; font-family: 'Inter', sans-serif; font-weight: 600; font-size: 0.66rem; letter-spacing: 0.16em; text-transform: uppercase; color: #ffd94d; }
            .nido-botones-peques { position: static; width: auto; background: transparent; backdrop-filter: none; -webkit-backdrop-filter: none; border-bottom: none; box-shadow: none; padding: 0; justify-content: flex-start; }
            .nido-botones-peques { display: flex; gap: 9px; flex-wrap: wrap; margin-left: auto; align-items: center; }
            .nido-botones-peques > a, .nido-botones-peques .nido-desplegable > button { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 1rem; color: #1c2b4a; background: #fdf6df; text-decoration: none; padding: 10px 18px; border-radius: 999px; box-shadow: 0 4px 0 rgba(0,0,0,0.22); border: none; cursor: pointer; transition: transform 0.15s ease, box-shadow 0.15s ease; }
            .nido-botones-peques > a:hover, .nido-botones-peques .nido-desplegable > button:hover { transform: translateY(-2px); box-shadow: 0 6px 0 rgba(0,0,0,0.22); }
            .nido-botones-peques .nido-escuchar { background: #dceeff !important; }
            .nido-botones-peques .nido-juegos { background: #ffe3ec !important; }
            .nido-botones-peques .nido-colorear { background: #e2f5e3 !important; }
            .nido-botones-peques .nido-desplegable { position: relative; }
            .nido-botones-peques .nido-panel { position: absolute; top: calc(100% + 12px); left: 50%; transform: translate(-50%, 6px); min-width: 230px; max-width: calc(100vw - 16px); background: #ffffff; border-radius: 18px; padding: 10px; opacity: 0; visibility: hidden; transition: opacity 0.2s ease, transform 0.2s ease, visibility 0s linear 0.25s; box-shadow: 0 18px 36px rgba(0,0,0,0.35); z-index: 1001; }
            .nido-botones-peques .nido-panel::before { content: ""; position: absolute; top: -16px; left: 0; right: 0; height: 16px; }
            .nido-botones-peques .nido-desplegable:hover .nido-panel, .nido-botones-peques .nido-desplegable.abierto .nido-panel { opacity: 1; visibility: visible; transform: translate(-50%, 0); transition: opacity 0.2s ease, transform 0.2s ease, visibility 0s; }
            .nido-botones-peques .nido-panel a { display: block; padding: 9px 12px; border-radius: 10px; color: #1c2b4a; text-decoration: none; font-family: 'Quicksand', sans-serif; font-weight: 600; }
            .nido-botones-peques .nido-panel a:hover { background: #fdf6df; }
            .nido-hamburguesa { display: none; }
            .nido-botones-peques .nido-desplegable > button::after { content: none; }
            .nido-barra-peques .nido-hamburguesa::after { content: none; }
            .nido-barra-peques .nido-hamburguesa:hover { transform: none; box-shadow: none; }
            @media (max-width: 1024px) {
                .nido-botones-peques { display: none; position: fixed !important; top: 74px; left: 0 !important; right: 0 !important; width: auto; max-height: calc(100vh - 74px); overflow-y: auto; flex-direction: column; align-items: stretch; margin-left: 0; background: #16264a !important; padding: 12px 16px 20px; border-bottom: 3px solid rgba(255, 217, 77, 0.55); box-shadow: 0 30px 50px rgba(0,0,0,0.5); z-index: 999; }
                .nido-botones-peques.visible { display: flex; }
                .nido-botones-peques > a, .nido-botones-peques .nido-desplegable > button { text-align: center; width: 100%; }
                .nido-botones-peques .nido-panel { position: static !important; transform: none !important; opacity: 1 !important; visibility: visible !important; display: none; box-shadow: none; background: #ffffff !important; border-radius: 14px; padding: 8px; margin: 6px 0 4px; }
                .nido-botones-peques .nido-panel a { color: #1c2b4a !important; }
                .nido-botones-peques .nido-desplegable.abierto .nido-panel { display: block; }
                .nido-hamburguesa { display: block; margin-left: auto; background: #ffd94d; border: none; border-radius: 999px; color: #1c2b4a; font-size: 1.1rem; padding: 7px 14px; cursor: pointer; }
            }            /* FONDO INFANTIL ZONA DE PEQUES v2 — decoración en los costados */
              body {
                background-color: #1d3465 !important;
                background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20width%3D%27190%27%20height%3D%27360%27%20viewBox%3D%270%200%20190%20360%27%3E%0A%3Cpath%20d%3D%27M60%2026%20l5.5%2011.7%2012.9%201.9%20-9.3%209.1%202.2%2012.8%20-11.3%20-6%20-11.3%206%202.2%20-12.8%20-9.3%20-9.1%2012.9%20-1.9z%27%20fill%3D%27%23ffd94d%27%20fill-opacity%3D%270.55%27/%3E%0A%3Cpath%20d%3D%27M138%2096%20a15%2015%200%201%200%209%2027.7%20a18.5%2018.5%200%201%201%20-9%20-27.7z%27%20fill%3D%27%23ffe9a8%27%20fill-opacity%3D%270.5%27/%3E%0A%3Cpath%20d%3D%27M44%20168%20l4.2%208.9%209.8%201.4%20-7.1%206.9%201.7%209.7%20-8.6%20-4.6%20-8.6%204.6%201.7%20-9.7%20-7.1%20-6.9%209.8%20-1.4z%27%20fill%3D%27%23ffb7d5%27%20fill-opacity%3D%270.45%27/%3E%0A%3Cpath%20d%3D%27M128%20226%20l3.6%207.6%208.4%201.2%20-6.1%205.9%201.4%208.3%20-7.3%20-3.9%20-7.3%203.9%201.4%20-8.3%20-6.1%20-5.9%208.4%20-1.2z%27%20fill%3D%27%23a8d8ff%27%20fill-opacity%3D%270.45%27/%3E%0A%3Cpath%20d%3D%27M66%20300%20l3%206.4%207%201%20-5%204.9%201.2%207%20-6.2%20-3.3%20-6.2%203.3%201.2%20-7%20-5%20-4.9%207%20-1z%27%20fill%3D%27%23ffd94d%27%20fill-opacity%3D%270.4%27/%3E%0A%3Ccircle%20cx%3D%27160%27%20cy%3D%2740%27%20r%3D%273%27%20fill%3D%27%23fff%27%20fill-opacity%3D%270.5%27/%3E%3Ccircle%20cx%3D%2730%27%20cy%3D%27120%27%20r%3D%272.6%27%20fill%3D%27%23fff%27%20fill-opacity%3D%270.4%27/%3E%0A%3Ccircle%20cx%3D%27170%27%20cy%3D%27180%27%20r%3D%272.4%27%20fill%3D%27%23fff%27%20fill-opacity%3D%270.35%27/%3E%3Ccircle%20cx%3D%2725%27%20cy%3D%27255%27%20r%3D%273%27%20fill%3D%27%23fff%27%20fill-opacity%3D%270.4%27/%3E%0A%3Ccircle%20cx%3D%27150%27%20cy%3D%27330%27%20r%3D%272.6%27%20fill%3D%27%23ffd94d%27%20fill-opacity%3D%270.45%27/%3E%3Ccircle%20cx%3D%27100%27%20cy%3D%27150%27%20r%3D%272.2%27%20fill%3D%27%23fff%27%20fill-opacity%3D%270.3%27/%3E%3C/svg%3E"), url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20width%3D%27190%27%20height%3D%27360%27%20viewBox%3D%270%200%20190%20360%27%3E%3Cg%20transform%3D%27translate%28190%2C0%29%20scale%28-1%2C1%29%27%3E%0A%3Cpath%20d%3D%27M60%2026%20l5.5%2011.7%2012.9%201.9%20-9.3%209.1%202.2%2012.8%20-11.3%20-6%20-11.3%206%202.2%20-12.8%20-9.3%20-9.1%2012.9%20-1.9z%27%20fill%3D%27%23ffd94d%27%20fill-opacity%3D%270.55%27/%3E%0A%3Cpath%20d%3D%27M138%2096%20a15%2015%200%201%200%209%2027.7%20a18.5%2018.5%200%201%201%20-9%20-27.7z%27%20fill%3D%27%23ffe9a8%27%20fill-opacity%3D%270.5%27/%3E%0A%3Cpath%20d%3D%27M44%20168%20l4.2%208.9%209.8%201.4%20-7.1%206.9%201.7%209.7%20-8.6%20-4.6%20-8.6%204.6%201.7%20-9.7%20-7.1%20-6.9%209.8%20-1.4z%27%20fill%3D%27%23ffb7d5%27%20fill-opacity%3D%270.45%27/%3E%0A%3Cpath%20d%3D%27M128%20226%20l3.6%207.6%208.4%201.2%20-6.1%205.9%201.4%208.3%20-7.3%20-3.9%20-7.3%203.9%201.4%20-8.3%20-6.1%20-5.9%208.4%20-1.2z%27%20fill%3D%27%23a8d8ff%27%20fill-opacity%3D%270.45%27/%3E%0A%3Cpath%20d%3D%27M66%20300%20l3%206.4%207%201%20-5%204.9%201.2%207%20-6.2%20-3.3%20-6.2%203.3%201.2%20-7%20-5%20-4.9%207%20-1z%27%20fill%3D%27%23ffd94d%27%20fill-opacity%3D%270.4%27/%3E%0A%3Ccircle%20cx%3D%27160%27%20cy%3D%2740%27%20r%3D%273%27%20fill%3D%27%23fff%27%20fill-opacity%3D%270.5%27/%3E%3Ccircle%20cx%3D%2730%27%20cy%3D%27120%27%20r%3D%272.6%27%20fill%3D%27%23fff%27%20fill-opacity%3D%270.4%27/%3E%0A%3Ccircle%20cx%3D%27170%27%20cy%3D%27180%27%20r%3D%272.4%27%20fill%3D%27%23fff%27%20fill-opacity%3D%270.35%27/%3E%3Ccircle%20cx%3D%2725%27%20cy%3D%27255%27%20r%3D%273%27%20fill%3D%27%23fff%27%20fill-opacity%3D%270.4%27/%3E%0A%3Ccircle%20cx%3D%27150%27%20cy%3D%27330%27%20r%3D%272.6%27%20fill%3D%27%23ffd94d%27%20fill-opacity%3D%270.45%27/%3E%3Ccircle%20cx%3D%27100%27%20cy%3D%27150%27%20r%3D%272.2%27%20fill%3D%27%23fff%27%20fill-opacity%3D%270.3%27/%3E%3C/g%3E%3C/svg%3E"), url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20width%3D%27340%27%20height%3D%27340%27%20viewBox%3D%270%200%20340%20340%27%3E%0A%3Ccircle%20cx%3D%2780%27%20cy%3D%2790%27%20r%3D%272.4%27%20fill%3D%27%23fff%27%20fill-opacity%3D%270.35%27/%3E%3Ccircle%20cx%3D%27250%27%20cy%3D%27200%27%20r%3D%272.2%27%20fill%3D%27%23fff%27%20fill-opacity%3D%270.3%27/%3E%0A%3Cpath%20d%3D%27M180%2040%20l2.2%204.7%205.2.8%20-3.8%203.6.9%205.2%20-4.5%20-2.4%20-4.5%202.4.9%20-5.2%20-3.8%20-3.6%205.2%20-.8z%27%20fill%3D%27%23ffd94d%27%20fill-opacity%3D%270.3%27/%3E%0A%3Ccircle%20cx%3D%27120%27%20cy%3D%27280%27%20r%3D%272%27%20fill%3D%27%23ffd94d%27%20fill-opacity%3D%270.3%27/%3E%3C/svg%3E"),
                  radial-gradient(ellipse at 20% 0%, rgba(255,217,77,0.12) 0%, transparent 45%),
                  radial-gradient(ellipse at 90% 100%, rgba(168,216,255,0.13) 0%, transparent 50%),
                  linear-gradient(#24407a, #16264a) !important;
                background-repeat: repeat-y, repeat-y, repeat, no-repeat, no-repeat, no-repeat !important;
                background-position: left top, right top, center top, center, center, center !important;
                background-size: 190px 360px, 190px 360px, 340px 340px, auto, auto, cover !important;
                background-attachment: fixed !important;
              }
              #temporada-bg { display: none !important; }

        </style>
        <header class="nido-barra-peques">
          <div class="nido-interior-peques">
            <a class="nido-marca-peques" href="index.html">
              <img src="img/estrellita.jpg" alt="Estrellita">
              <span class="nido-nombre-peques">El Nido de Estrellas<span class="nido-zona-peques">Zona de peques</span></span>
            </a>
            <button class="nido-hamburguesa" id="nidoBtnMenu" aria-label="Abrir menú" type="button">☰</button>
            <nav class="nido-botones-peques" id="nidoMenuEnlaces">
              <div class="nido-desplegable">
                <button type="button">📖 Cuentos</button>
                <div class="nido-panel">
                  <a href="cuentos-texto.html">Cuentos para Leer</a>
                  <a href="microcuentos.html">Microcuentos</a>
                </div>
              </div>
              <a href="audios-lista.html" class="nido-escuchar">🎧 Escuchar</a>
              <div class="nido-desplegable">
                <button type="button" class="nido-juegos">🎮 Juegos</button>
                <div class="nido-panel">
                  <a href="puzzles.html">Puzzles Mágicos</a>
                  <a href="memoria.html">Memoria Mágica</a>
                  <a href="adivinanzas.html">Adivinanzas</a>
                  <a href="aventura.html">Aventura</a>
                </div>
              </div>
              <a href="colorear.html" class="nido-colorear">🎨 Colorear</a>
            </nav>
          </div>
        </header>
        `;
    }

    let footer = document.querySelector('footer');
    if (!footer) {
        footer = document.createElement('footer');
        document.body.appendChild(footer);
    }
    footer.className = "site-footer";
    footer.innerHTML = `
        <div class="footer-content-wrapper">
            <p style="margin: 0; display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                &copy; 2026 El Nido de Estrellas. | Síguenos en nuestro 
                <a href="https://www.youtube.com/@elnidodeestrellas" target="_blank" title="YouTube" style="color: #eab308; display: inline-flex; align-items: center; text-decoration: none; vertical-align: middle;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                , 
                <a href="https://open.spotify.com/show/6GRi6kP95fDMFYaMpuUHjF" target="_blank" title="Spotify" style="color: #eab308; display: inline-flex; align-items: center; text-decoration: none; vertical-align: middle;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.599-.12-.42.18-.78.6-.9 4.56-1.021 8.52-.6 11.76 1.44.36.18.48.66.24 1.02zm1.44-3.84c-.301.48-.9.66-1.38.36-3.24-1.98-8.16-2.58-11.94-1.411-.54.18-1.14-.12-1.32-.66-.18-.54.12-1.14.66-1.32 4.38-1.32 9.84-.66 13.62 1.68.48.3.66.9.36 1.351zm.12-4.08C14.1 7.2 8.16 7.02 4.74 8.04c-.66.18-1.38-.18-1.56-.84-.18-.66.18-1.38.84-1.56 3.96-1.2 10.68-1.02 14.88 1.44.6.36.78 1.14.42 1.74-.36.6-1.14.78-1.74.42z"/></svg>
                </a>
                y 
                <a href="https://www.instagram.com/elnidodeestrellas" target="_blank" title="Instagram" style="color: #eab308; display: inline-flex; align-items: center; text-decoration: none; vertical-align: middle;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
            </p>
            <div style="margin: 0; display: flex; gap: 15px; justify-content: center;">
                <a href="familias.html" style="color: #eab308; text-decoration: underline;">🏠 Zona de familias</a>
                <a href="mapa.html" style="color: #eab308; text-decoration: underline;">🧭 Índice Maestro</a>
                <a href="legal.html" style="color: #eab308; text-decoration: underline;">📜 Aviso Legal y Privacidad</a>
            </div>
        </div>
    `;

    const toggleBtn = document.getElementById("nidoBtnMenu");
    const navLinks = document.getElementById("nidoMenuEnlaces");

    if (toggleBtn && navLinks) {
        toggleBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            navLinks.classList.toggle("visible");
        });
    }

    document.querySelectorAll('.nido-desplegable > button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            const drop = btn.closest('.nido-desplegable');
            const estaba = drop.classList.contains('abierto');
            document.querySelectorAll('.nido-desplegable').forEach(d => d.classList.remove('abierto'));
            if (!estaba) { drop.classList.add('abierto'); ajustarPanel(drop); }
        });
    });

    // Blindaje de paneles: si un panel flotante se saldría de la pantalla
    // (móvil, tableta o navegador en modo escritorio), se desplaza lo justo
    // para quedar entero dentro, con 8 px de margen a cada lado.
    function ajustarPanel(drop) {
        const p = drop.querySelector('.nido-panel');
        if (!p) return;
        if (getComputedStyle(p).position !== 'absolute') { p.style.transform = ''; return; }
        p.style.transform = '';
        const r = p.getBoundingClientRect();
        const vw = document.documentElement.clientWidth;
        let dx = 0;
        if (r.left < 8) dx = Math.ceil(8 - r.left);
        else if (r.right > vw - 8) dx = -Math.ceil(r.right - (vw - 8));
        if (dx !== 0) p.style.transform = 'translate(calc(-50% + ' + dx + 'px), 0)';
    }
    document.querySelectorAll('.nido-desplegable').forEach(drop => {
        drop.addEventListener('mouseenter', () => ajustarPanel(drop));
    });
    window.addEventListener('resize', () => {
        document.querySelectorAll('.nido-panel').forEach(p => { p.style.transform = ''; });
    });

    window.addEventListener('click', (e) => {
        if (!e.target.closest('.nido-desplegable')) {
            document.querySelectorAll('.nido-desplegable').forEach(d => d.classList.remove('abierto'));
        }
        if (navLinks && navLinks.classList.contains('visible')) {
            if (!navLinks.contains(e.target) && toggleBtn && !toggleBtn.contains(e.target)) {
                navLinks.classList.remove('visible');
            }
        }
    });

    // ==========================================
    // EFECTO DE POLVO ESTELAR AL MOVER EL CURSOR
    // ==========================================
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "9999";
    document.body.appendChild(canvas);

    let particles = [];
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    class StarParticle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 2.5 + 0.5;
            this.speedX = (Math.random() - 0.5) * 1.2;
            this.speedY = (Math.random() - 0.5) * 1.2;
            this.life = 1;
            this.decay = Math.random() * 0.03 + 0.015;
            this.color = Math.random() > 0.3 ? "255, 255, 255" : "255, 223, 128"; 
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.life -= this.decay;
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = Math.max(0, this.life);
            ctx.fillStyle = `rgb(${this.color})`;
            ctx.shadowBlur = 6;
            ctx.shadowColor = `rgba(${this.color}, 0.8)`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    window.addEventListener("mousemove", (e) => {
        for (let i = 0; i < 1; i++) {
            particles.push(new StarParticle(e.clientX, e.clientY));
        }
    });

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = particles.length - 1; i >= 0; i--) {
            particles[i].update();
            particles[i].draw();
            
            if (particles[i].life <= 0) {
                particles.splice(i, 1);
            }
        }
        
        requestAnimationFrame(animate);
    }

    animate();

    // ==========================================
    // ==========================================
    // AUTOMATIZACIÓN DE MICROANIMACIONES AL SCROLL
    // ==========================================
    const elementosAAnimar = document.querySelectorAll('.card, .trivia-card, .editorial-section, .recurso-box, .podcast-card, h1, h2');

    elementosAAnimar.forEach(el => {
        el.classList.add('scroll-reveal');
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observerInstance.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });
});
// ==========================================
// EFECTO DE PROFUNDIDAD (PARALLAX SUAVE)
// ==========================================
document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20; 
    const y = (e.clientY / window.innerHeight - 0.5) * 20; 

    const elementosParallax = document.querySelectorAll('.nido-flotante, .logo-img, .parallax-el');

    elementosParallax.forEach(el => {
        const factor = el.dataset.speed || 0.5; 
        el.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
    });
});