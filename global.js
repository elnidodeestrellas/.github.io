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
    // 2. MODO NOCTURNO
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
    // 3. REPRODUCTOR FLOTANTE DE AUDIO
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
    // 4. BARRA DE PROGRESO DE SCROLL
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
    // 5. ENLACES RELACIONADOS EN ARTÍCULOS DE LECTURA
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
    // 6. DINÁMICA DE FONDOS ESTACIONALES
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
});