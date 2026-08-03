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
    // 2. MENÚ DE NAVEGACIÓN Y LOGO 3D FLOTANTE
    // ----------------------------------------------------
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

    let contenedorNav = document.getElementById('menu-container');
    if (!contenedorNav) {
        contenedorNav = document.createElement('div');
        contenedorNav.id = 'menu-container';
        document.body.prepend(contenedorNav);
    }
    contenedorNav.innerHTML = navHTML;

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

    // ----------------------------------------------------
    // 3. MODO NOCTURNO
    // ----------------------------------------------------
    if (!document.getElementById('btn-modo-nocturno')) {
        const btn = document.createElement('button');
        btn.id = 'btn-modo-nocturno';
        btn.setAttribute('aria-label', 'activar modo lectura nocturna');
        btn.textContent = '🌙';
        document.body.appendChild(btn);
    }

    const btnNocturno = document.getElementById('btn-modo-nocturno');
    
    if (localStorage.getItem('modoNocturno') === 'activo') {
        document.body.classList.add('modo-nocturno-profundo');
        if (btnNocturno) btnNocturno.textContent = '☀️';
    }

    if (btnNocturno) {
        btnNocturno.addEventListener('click', () => {
            document.body.classList.toggle('modo-nocturno-profundo');
            const esActivo = document.body.classList.contains('modo-nocturno-profundo');
            if (esActivo) {
                localStorage.setItem('modoNocturno', 'activo');
                btnNocturno.textContent = '☀️';
            } else {
                localStorage.setItem('modoNocturno', 'inactivo');
                btnNocturno.textContent = '🌙';
            }
        });
    }

    // ----------------------------------------------------
    // 4. REPRODUCTOR FLOTANTE DE AUDIO
    // ----------------------------------------------------
    const reproductorHTML = `
        <div class="audio-flotante" id="reproductorAudio">
            <button id="btnAudio" title="Reproducir / Pausar">▶️</button>
            <span id="textoAudio">Ambiente mágico</span>
            <button id="btnSiguiente" title="Siguiente canción" style="background:none; border:none; cursor:pointer; font-size:14px; margin-left:4px;">⏭️</button>
            <input type="range" id="volumenAudio" min="0" max="1" step="0.05" value="0.5" title="Ajustar volumen" style="width: 50px; margin-left: 6px; cursor: pointer; accent-color: #f1c442;">
            <audio id="musicaFondo" preload="auto"></audio>
        </div>
    `;
    
    if (!document.getElementById('reproductorAudio')) {
        document.body.insertAdjacentHTML('beforeend', reproductorHTML);
    }

    const listaAudios = [
        "audio/alex-morgan-background-music-545525.mp3",
        "audio/alex-morgan-nana-sueño-suave-para-bebés-548646.mp3",
        "audio/alex-morgan-gentle-baby-sleep-lullaby-dream-548647.mp3",
        "audio/alex-morgan-lofi-study-rainy-night-568166.mp3",
        "audio/alex-morgan-lofi-sunny-cafe-568156.mp3",
        "audio/alex-morgan-nature-ambient-548640.mp3",
        "audio/alex-morgan-romantic-date-piano-548637.mp3",
        "audio/alex-morgan-sunrise-yoga-flow-537475.mp3"
    ];

    const btnAudio = document.getElementById('btnAudio');
    const btnSiguiente = document.getElementById('btnSiguiente');
    const volumenAudio = document.getElementById('volumenAudio');
    const musicaFondo = document.getElementById('musicaFondo');
    const textoAudio = document.getElementById('textoAudio');

    let indiceActual = parseInt(localStorage.getItem('audioIndice')) || 0;
    let tiempoGuardado = parseFloat(localStorage.getItem('audioTiempo')) || 0;
    let reproduciendo = localStorage.getItem('audioReproduciendo') === 'true';
    let volumenGuardado = localStorage.getItem('audioVolumen') !== null ? parseFloat(localStorage.getItem('audioVolumen')) : 0.5;

    if (musicaFondo) {
        musicaFondo.src = listaAudios[indiceActual];
        musicaFondo.currentTime = tiempoGuardado;
        musicaFondo.volume = volumenGuardado;
        if (volumenAudio) volumenAudio.value = volumenGuardado;

        if (reproduciendo) {
            musicaFondo.play().then(() => {
                if (btnAudio) btnAudio.textContent = '⏸️';
                if (textoAudio) textoAudio.textContent = `Pista ${indiceActual + 1}`;
            }).catch(() => {
                reproduciendo = false;
                if (btnAudio) btnAudio.textContent = '▶️';
            });
        }

        musicaFondo.addEventListener('timeupdate', () => {
            localStorage.setItem('audioTiempo', musicaFondo.currentTime);
        });

        if (btnAudio) {
            btnAudio.addEventListener('click', () => {
                if (musicaFondo.paused) {
                    musicaFondo.play().then(() => {
                        reproduciendo = true;
                        localStorage.setItem('audioReproduciendo', 'true');
                        btnAudio.textContent = '⏸️';
                        if (textoAudio) textoAudio.textContent = `Pista ${indiceActual + 1}`;
                    });
                } else {
                    musicaFondo.pause();
                    reproduciendo = false;
                    localStorage.setItem('audioReproduciendo', 'false');
                    btnAudio.textContent = '▶️';
                    if (textoAudio) textoAudio.textContent = 'Ambiente pausado';
                }
            });
        }

        if (volumenAudio) {
            volumenAudio.addEventListener('input', (e) => {
                const nuevoVolumen = e.target.value;
                musicaFondo.volume = nuevoVolumen;
                localStorage.setItem('audioVolumen', nuevoVolumen);
            });
        }

        if (btnSiguiente) {
            btnSiguiente.addEventListener('click', () => {
                indiceActual = (indiceActual + 1) % listaAudios.length;
                localStorage.setItem('audioIndice', indiceActual);
                localStorage.setItem('audioTiempo', 0);
                musicaFondo.src = listaAudios[indiceActual];
                musicaFondo.currentTime = 0;
                if (reproduciendo) {
                    musicaFondo.play();
                    if (textoAudio) textoAudio.textContent = `Pista ${indiceActual + 1}`;
                }
            });
        }

        musicaFondo.addEventListener('ended', () => {
            indiceActual = (indiceActual + 1) % listaAudios.length;
            localStorage.setItem('audioIndice', indiceActual);
            localStorage.setItem('audioTiempo', 0);
            musicaFondo.src = listaAudios[indiceActual];
            musicaFondo.play();
            if (textoAudio) textoAudio.textContent = `Pista ${indiceActual + 1}`;
        });
    }

    // ----------------------------------------------------
    // 5. BARRA DE PROGRESO DE SCROLL
    // ----------------------------------------------------
    if (!document.getElementById('scroll-progress')) {
        const progressBar = document.createElement('div');
        progressBar.id = 'scroll-progress';
        document.body.prepend(progressBar);
    }

    window.addEventListener('scroll', () => {
        const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        const progressBar = document.getElementById('scroll-progress');
        if (progressBar) {
            progressBar.style.width = scrolled + '%';
        }
    });

    // ----------------------------------------------------
    // 6. ENLACES RELACIONADOS EN ARTÍCULOS DE LECTURA
    // ----------------------------------------------------
    const articleCards = document.querySelectorAll('.article-card');
    articleCards.forEach(card => {
        if (!card.querySelector('.enlaces-relacionados')) {
            const relatedDiv = document.createElement('div');
            relatedDiv.className = 'enlaces-relacionados';
            relatedDiv.style.cssText = 'margin-top: 20px; padding-top: 15px; border-top: 1px dashed #2c3e50; font-size: 13px; color: #cbd5e0;';
            relatedDiv.innerHTML = `
                <span style="color: #ffffff; font-weight: 500;">Te puede interesar:</span> 
                <a href="cuentos.html" style="color: #90cdf4; text-decoration: none; margin-left: 6px;">📖 Descubre cuentos afines</a> · 
                <a href="recursos.html" style="color: #90cdf4; text-decoration: none; margin-left: 6px;">📚 Ver recursos prácticos</a>
            `;
            card.appendChild(relatedDiv);
        }
    });

    // ----------------------------------------------------
    // 7. CONTROL DEL MENÚ DESPLEGABLE "MÁS"
    // ----------------------------------------------------
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

    // ----------------------------------------------------
    // 8. DINÁMICA DE FONDOS ESTACIONALES
    // ----------------------------------------------------
    const hoy = new Date();
    const mes = hoy.getMonth() + 1;
    const dia = hoy.getDate();
    
    const esLocal = window.location.protocol === 'file:';
    const segmentosRuta = window.location.pathname.split('/').filter(Boolean);
    const estaEnSubcarpeta = segmentosRuta.length > 1 && !window.location.pathname.endsWith('.html');
    
    let carpeta = "fondosweb/";
    if (estaEnSubcarpeta && !esLocal) {
        carpeta = "../fondosweb/";
    }

    const reglasFondos = [
        { inicio: [1, 1], fin: [2, 10], archivo: "invierno.webp" },
        { inicio: [2, 11], fin: [2, 20], archivo: "sanValentin.webp" },
        { inicio: [3, 1], fin: [3, 31], archivo: "semanaSanta.webp" },
        { inicio: [3, 20], fin: [4, 15], archivo: "primavera.webp" },
        { inicio: [4, 16], fin: [4, 30], archivo: "santJordi.webp" },
        { inicio: [6, 20], fin: [6, 30], archivo: "nocheSanjuan.webp" },
        { inicio: [7, 1], fin: [8, 31], archivo: "verano.webp" },
        { inicio: [9, 1], fin: [9, 20], archivo: "vueltaalcole.webp" },
        { inicio: [9, 21], fin: [10, 24], archivo: "otoño.webp" },
        { inicio: [10, 25], fin: [11, 5], archivo: "Halloween.webp" }
    ];

    let archivoSeleccionado = "verano.webp";
    for (let regla of reglasFondos) {
        const [mesInicio, diaInicio] = regla.inicio;
        const [mesFin, diaFin] = regla.fin;
        const esDespuesDeInicio = (mes > mesInicio) || (mes === mesInicio && dia >= diaInicio);
        const esAntesDeFin = (mes < mesFin) || (mes === mesFin && dia <= diaFin);

        if (esDespuesDeInicio && esAntesDeFin) {
            archivoSeleccionado = regla.archivo;
            break;
        }
    }

    const rutaFinalFondo = `${carpeta}${archivoSeleccionado}`;
    
    document.body.style.backgroundImage = `url('${rutaFinalFondo}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";

    // ----------------------------------------------------
    // 9. SISTEMA DE CLICS UNIVERSAL
    // ----------------------------------------------------
    function registrarClicSeguro(clave) {
        try {
            let actual = parseInt(localStorage.getItem(clave) || 0);
            localStorage.setItem(clave, actual + 1);
        } catch (e) {
            console.error("Error al registrar clic:", e);
        }
    }

    document.addEventListener('pointerdown', function(e) {
        if (e.target.closest('nav')) return;

        let botonPuzzle = e.target.closest('button');
        if (botonPuzzle) {
            let textoBoton = botonPuzzle.textContent.toLowerCase();
            let onclickAttr = botonPuzzle.getAttribute('onclick') || '';
            
            if (textoBoton.includes('mezclar') || onclickAttr.includes('mezclarPuzzle')) {
                registrarClicSeguro('clic_puzzles');
                return;
            } else if (textoBoton.includes('cambiar') || onclickAttr.includes('siguienteCuento')) {
                registrarClicSeguro('clic_puzzle_cambiar');
                return;
            }
        }

        let enlace = e.target.closest('a');
        if (!enlace) return;

        let hrefOriginal = enlace.getAttribute('href');
        if (!hrefOriginal || hrefOriginal.startsWith('#')) return;

        let clave = '';
        let hrefLower = hrefOriginal.toLowerCase();
        let rutaLimpiaPdfOHtml = hrefOriginal.split('/').pop().split('?')[0].toLowerCase();

        if (hrefLower.includes('podcast') || hrefLower.includes('episodio') || rutaLimpiaPdfOHtml.includes('podcast') || rutaLimpiaPdfOHtml.includes('episodio')) {
            if (hrefLower.includes('rabietas')) {
                clave = 'clic_podcast_1';
            } else if (hrefLower.includes('mapa-buenas-noches')) {
                clave = 'clic_podcast_2';
            } else if (hrefLower.includes('celos-hermanos')) {
                clave = 'clic_podcast_3';
            } else {
                let match = hrefOriginal.match(/(\d+)/);
                clave = match ? 'clic_podcast_' + match[1] : 'clic_podcast';
            }
        } else if (hrefLower.includes('recurso') || hrefLower.includes('pdf/') || rutaLimpiaPdfOHtml.endsWith('.pdf')) {
            let destinoLimpio = rutaLimpiaPdfOHtml.replace('.pdf', '').replace('.html', '');
            clave = 'clic_recurso_' + destinoLimpio.replace(/recurso[_-]/, '');
        } else if (hrefLower.includes('contacto') || hrefLower.includes('mailto:') || hrefLower.includes('pinterest')) {
            if (hrefLower.includes('pinterest')) {
                clave = 'clic_contacto_pinterest';
            } else if (hrefLower.includes('mailto:')) {
                clave = 'clic_contacto_correo';
            } else {
                clave = 'clic_contacto';
            }
        } else if (hrefLower.includes('audios')) {
            clave = 'clic_cuentos_audios';
        } else if (hrefLower.includes('texto') || hrefLower.includes('lectura-texto')) {
            clave = 'clic_cuentos_texto';
        } else if (hrefLower.includes('lectura') || hrefLower.includes('cuento')) {
            let match = hrefOriginal.match(/(\d+)/);
            clave = match ? 'clic_lectura_' + match[1] : 'clic_cuento';
        } else if (hrefLower.includes('rutina')) {
            clave = 'clic_index_rutina';
        } else if (hrefLower.includes('coleccion') || hrefLower.includes('explorar') || rutaLimpiaPdfOHtml === 'cuentos.html') {
            clave = 'clic_index_coleccion';
        } else if (hrefLower.includes('puzzle') || hrefLower.includes('puzle')) {
            clave = 'clic_puzzles';
        } else if (hrefLower.includes('tuvoz') || hrefLower.includes('voz')) {
            clave = 'clic_tuvoz_enviar';
        } else {
            let destinoLimpio = rutaLimpiaPdfOHtml.replace('.html', '');
            clave = 'clic_' + (destinoLimpio || 'enlace');
        }

        if (clave) {
            registrarClicSeguro(clave);

            if (!enlace.target && !hrefOriginal.startsWith('http') && !hrefOriginal.startsWith('mailto:')) {
                e.preventDefault();
                setTimeout(() => {
                    window.location.href = hrefOriginal;
                }, 100);
            }
        }
    });
});