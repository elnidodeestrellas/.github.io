document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.getElementById("menu-container");

    if (headerContainer) {
        headerContainer.innerHTML = `
        <style>
            /* Estilo adaptativo para los menús desplegables en una sola columna vertical */
            @media (min-width: 969px) {
                #healthDropdown .dropdown-content, 
                #parentingDropdown .dropdown-content, 
                #resourcesGamesDropdown .dropdown-content {
                    min-width: 250px !important;
                    display: flex !important;
                    flex-direction: column !important;
                    padding: 16px !important;
                }
            }
            @media (max-width: 968px) {
                #healthDropdown .dropdown-content, 
                #parentingDropdown .dropdown-content, 
                #resourcesGamesDropdown .dropdown-content {
                    display: flex !important;
                    flex-direction: column !important;
                    position: static !important;
                    box-shadow: none !important;
                    background: rgba(0,0,0,0.2) !important;
                    padding-left: 15px !important;
                }
            }
        </style>
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
                
                <div class="dropdown" id="presentationDropdown">
                    <button class="dropbtn" type="button">✨ Presentación ▾</button>
                    <div class="dropdown-content">
                        <a href="bienvenida.html">✨ Bienvenida</a>
                        <a href="proyecto.html">📊 Proyecto</a>
                        <a href="mapa.html" style="font-weight: 500; color: #f2b6c6;">🧭 Índice Maestro</a>
                    </div>
                </div>

                <!-- Menú desplegable de Cuentos -->
                <div class="dropdown" id="storiesDropdown">
                    <button class="dropbtn" type="button">📁 Cuentos ▾</button>
                    <div class="dropdown-content">
                        <a href="audios-lista.html">🎧 Cuentos para Escuchar</a>
                        <a href="cuentos-texto.html">📖 Cuentos para Leer</a>
                        <a href="microcuentos.html">✨ Microcuentos</a>
                    </div>
                </div>

                <!-- Menú desplegable de Audios -->
                <div class="dropdown" id="audiosDropdown">
                    <button class="dropbtn" type="button">🎧 Audios ▾</button>
                    <div class="dropdown-content">
                        <a href="podcast.html">🎙️ Podcast</a>
                        <a href="debates.html">💬 Debates y Reflexión</a>
                    </div>
                </div>

                <!-- Menú 1: Salud (Ajustado para ganar espacio) -->
                <div class="dropdown" id="healthDropdown">
                    <button class="dropbtn" type="button">🩺 Salud ▾</button>
                    <div class="dropdown-content">
                        <div style="width: 100%;">
                            <div style="color: #38bdf8; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px;">🧠 Psicología</div>
                            <a href="glosario.html" style="padding: 6px 8px;">✨ Glosario Poético</a>
                            <a href="glosariopedagogico.html" style="padding: 6px 8px;">🧠 Glosario Pedagógico</a>
                            <a href="mitos.html" style="padding: 6px 8px; font-weight: 500; color: #f1c442;">💡 Mitos vs. Realidad</a>
                            <a href="rinconlectura.html" style="padding: 6px 8px;">📖 Rincón de Lectura</a>
                            <a href="preguntas.html" style="padding: 6px 8px;">❓ Rincón de Preguntas</a>
                            
                            <div style="color: #38bdf8; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; margin-top: 12px; margin-bottom: 6px;">📋 Práctico</div>
                            <a href="guiasSalud.html" style="padding: 6px 8px;">📋 Guías de Salud</a>
                            <a href="posparto-01.html" style="padding: 6px 8px; font-weight: 500; color: #f2b6c6;">🌸 Salud Mental Posparto</a>
                            <a href="orientacion.html" style="padding: 6px 8px; font-weight: 500; color: #38bdf8;">🧭 Orientación y Apoyo</a>
                        </div>
                    </div>
                </div>

                <!-- Menú 2: Guías de Crianza -->
                <div class="dropdown" id="parentingDropdown">
                    <button class="dropbtn" type="button">🌟 Guías de Crianza ▾</button>
                    <div class="dropdown-content">
                        <div style="width: 100%; display: flex; flex-direction: column;">
                            <div style="color: #f1c442; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px;">🌱 El Recorrido Vital</div>
                            
                            <a href="calculadora.html" style="padding: 6px 8px; font-weight: 500; color: #38bdf8; display: block; width: 100%;">🧭 Guía de Desarrollo</a>
                            
                            <a href="nombres.html" style="padding: 6px 8px; font-weight: 500; color: #f2b6c6; display: block; width: 100%; margin-top: 4px;">👶 Guía de Nombres</a>
                            <a href="embarazo01.html" style="padding: 6px 8px; font-weight: 500; margin-top: 4px; display: block; width: 100%;">🌟 Embarazo</a>
                            <a href="lactancia01.html" style="padding: 6px 8px; font-weight: 500; margin-top: 4px; display: block; width: 100%;">🍼 Lactancia</a>
                            <a href="dental01.html" style="padding: 6px 8px; font-weight: 500; margin-top: 4px; display: block; width: 100%; text-decoration: none;">🦷 Dental</a>
                            <a href="crecimiento01.html" style="padding: 6px 8px; font-weight: 500; margin-top: 4px; display: block; width: 100%; text-decoration: none;">🌱 Crecimiento</a>
                            <a href="auxilios01.html" style="padding: 6px 8px; font-weight: 500; margin-top: 4px; display: block; width: 100%; text-decoration: none;">🚨 Primeros Auxilios</a>
                        </div>
                    </div>
                </div>

                <!-- Menú 3: Recursos y Juegos -->
                <div class="dropdown" id="resourcesGamesDropdown">
                    <button class="dropbtn" type="button">🎨 Recursos y Juegos ▾</button>
                    <div class="dropdown-content">
                        <div style="width: 100%; display: flex; flex-direction: column;">
                            <div style="color: #38bdf8; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px;">📥 Material Práctico</div>
                            <a href="rutinas.html" style="padding: 6px 8px;">📅 Rutinas y Calendarios</a>

                            <div style="color: #38bdf8; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; margin-top: 12px; margin-bottom: 6px;">🎮 Zona Lúdica</div>
                            <a href="puzzles.html" style="padding: 6px 8px;">🧩 Puzzles Mágicos</a>
                            <a href="memoria.html" style="padding: 6px 8px;">✨ Memoria Mágica</a>
                            <a href="adivinanzas.html" style="padding: 6px 8px;">🔮 Adivinanzas</a>
                            <a href="aventura.html" style="padding: 6px 8px;">🧭 Aventura</a>
                            <a href="colorear.html" style="padding: 6px 8px;">🎨 Colorear Mágico</a>
                        </div>
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
                <a href="mapa.html" style="color: #eab308; text-decoration: underline;">🧭 Índice Maestro</a>
                <a href="legal.html" style="color: #eab308; text-decoration: underline;">📜 Aviso Legal y Privacidad</a>
            </div>
        </div>
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
        if (window.innerWidth > 968 && navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
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