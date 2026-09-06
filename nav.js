document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.getElementById("menu-container");

    if (headerContainer) {
        headerContainer.innerHTML = `
        <style>
            /* Estilo adaptativo para el menú desplegable en dos columnas y dispositivos móviles */
            @media (min-width: 969px) {
                #healthDropdown .dropdown-content, #parentingDropdown .dropdown-content {
                    min-width: 440px !important;
                    display: grid !important;
                    grid-template-columns: 1fr 1fr !important;
                    gap: 16px !important;
                    padding: 16px !important;
                }
            }
            @media (max-width: 968px) {
                #healthDropdown .dropdown-content, #parentingDropdown .dropdown-content {
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
                    </div>
                </div>

                <!-- Menú desplegable de Cuentos unificado -->
                <div class="dropdown" id="storiesDropdown">
                    <button class="dropbtn" type="button">📁 Cuentos ▾</button>
                    <div class="dropdown-content">
                     <a href="audios-lista.html">🎧 Cuentos para Escuchar</a>
                     <a href="cuentos-texto.html">📖 Cuentos para Leer</a>
                     <a href="microcuentos.html">✨ Microcuentos</a>
                    </div>
                </div>

                <!-- Menú desplegable de Audios unificado (Podcast y Debates) -->
                <div class="dropdown" id="audiosDropdown">
                    <button class="dropbtn" type="button">🎧 Audios ▾</button>
                    <div class="dropdown-content">
                        <a href="podcast.html">🎙️ Podcast</a>
                        <a href="debates.html">💬 Debates y Reflexión</a>
                    </div>
                </div>

                <!-- Menú 1: Salud y Bienestar (Solo Psicología y Recursos Prácticos) -->
                <div class="dropdown" id="healthDropdown">
                    <button class="dropbtn" type="button">🩺 Salud y Bienestar ▾</button>
                    <div class="dropdown-content">
                        <div style="width: 100%;">
                            <div style="color: #38bdf8; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px;">🧠 Psicología</div>
                            <a href="glosario.html" style="padding: 6px 8px;">✨ Glosario Poético</a>
                            <a href="glosariopedagogico.html" style="padding: 6px 8px;">🧠 Glosario Pedagógico</a>
                            <a href="rinconlectura.html" style="padding: 6px 8px;">📖 Rincón de Lectura</a>
                            <a href="preguntas.html" style="padding: 6px 8px;">❓ Rincón de Preguntas</a>
                            
                            <div style="color: #38bdf8; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; margin-top: 12px; margin-bottom: 6px;">📋 Práctico</div>
                            <a href="guiasSalud.html" style="padding: 6px 8px;">📋 Guías de Salud</a>
                            <a href="orientacion.html" style="padding: 6px 8px; font-weight: 500; color: #38bdf8;">🧭 Orientación y Apoyo</a>
                        </div>
                    </div>
                </div>

                <!-- Menú 2: Guías de Crianza (Desplegable independiente) -->
                <div class="dropdown" id="parentingDropdown">
                    <button class="dropbtn" type="button">🌟 Guías de Crianza ▾</button>
                    <div class="dropdown-content">
                        <div style="width: 100%;">
                            <div style="color: #f1c442; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px;">🌱 El Recorrido Vital</div>
                            <a href="embarazo01.html" style="padding: 8px; font-weight: 500;">🌟 Embarazo</a>
                            <a href="lactancia01.html" style="padding: 8px; font-weight: 500; margin-top: 6px;">🍼 Lactancia</a>
                            <a href="dental01.html" style="padding: 8px 12px; font-weight: 500; margin-top: 6px; display: inline-flex; align-items: center; gap: 8px; text-decoration: none;">🦷 Dental</a>
                            <a href="crecimiento01.html" style="padding: 8px 12px; font-weight: 500; margin-top: 6px; display: inline-flex; align-items: center; gap: 8px; text-decoration: none;">🌱 Crecimiento</a>
                            <a href="auxilios01.html" style="padding: 8px 12px; font-weight: 500; margin-top: 6px; display: inline-flex; align-items: center; gap: 8px; text-decoration: none;">🚨 Primeros Auxilios</a>
                        </div>
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
    footer.className = "site-footer";
    footer.innerHTML = `
        <div class="footer-content-wrapper">
            <p style="margin: 0;">&copy; 2026 El Nido de Estrellas. | Síguenos en nuestro <a href="https://www.youtube.com/@elnidodeestrellas" target="_blank" style="color: #eab308; text-decoration: none;">Canal de YouTube</a> y en <a href="https://www.instagram.com/elnidodeestrellas" target="_blank" style="color: #eab308; text-decoration: none;">Instagram</a></p>
            <div style="margin: 0;">
                <a href="legal.html" style="color: #eab308; text-decoration: underline;">Aviso Legal y Privacidad</a>
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