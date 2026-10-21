// nav-familias.js — menú de zona · El Nido de Estrellas (versión de taller, sin subir)
document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.getElementById("menu-container");

    if (headerContainer) {
        headerContainer.innerHTML = `
        <style>
            .nido-barra { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; background: rgba(9, 13, 24, 0.94); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); border-bottom: 1px solid rgba(241, 196, 66, 0.28); }
            .nido-barra-interior { max-width: 1280px; margin: 0 auto; display: flex; align-items: center; gap: 18px; padding: 10px 22px; }
            .nido-marca { display: flex; align-items: center; gap: 12px; text-decoration: none; flex-shrink: 0; }
            .nido-marca img { width: 46px; height: 46px; border-radius: 50%; object-fit: cover; border: 1.5px solid rgba(241, 196, 66, 0.75); box-shadow: 0 0 14px rgba(241, 196, 66, 0.25); }
            .nido-marca span { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.55rem; font-weight: 600; color: #f1c442; letter-spacing: 0.03em; white-space: nowrap; }
            .nido-enlaces { position: static; width: auto; background: transparent; backdrop-filter: none; -webkit-backdrop-filter: none; border-bottom: none; box-shadow: none; padding: 0; justify-content: flex-end; }
            .nido-enlaces { display: flex; align-items: center; gap: 4px; margin-left: auto; flex-wrap: nowrap; }
            .nido-enlaces > a, .nido-desplegable > button { font-family: 'Inter', system-ui, sans-serif; font-size: 0.88rem; font-weight: 500; letter-spacing: 0.07em; text-transform: uppercase; color: #e9e4d6; background: none; border: none; cursor: pointer; padding: 9px 11px; text-decoration: none; position: relative; white-space: nowrap; }
            .nido-enlaces > a::after, .nido-desplegable > button::after { content: ""; position: absolute; left: 11px; right: 11px; bottom: 4px; height: 1.5px; width: auto; top: auto; opacity: 1; pointer-events: none; background: #f1c442; transform: scaleX(0); transform-origin: left; transition: transform 0.25s ease; }
            .nido-enlaces > a:hover, .nido-desplegable > button:hover { color: #f1c442; }
            .nido-enlaces > a:hover::after, .nido-desplegable:hover > button::after, .nido-desplegable.abierto > button::after { transform: scaleX(1); }
            .nido-enlaces > a.nido-activo { color: #f1c442; }
            .nido-enlaces > a.nido-activo::after { transform: scaleX(1); }
            .nido-desplegable { position: relative; }
            .nido-flecha { font-size: 0.6rem; margin-left: 4px; color: #f1c442; }
            .nido-panel { position: absolute; top: calc(100% + 10px); left: 50%; transform: translate(-50%, 6px); min-width: 250px; background: rgba(13, 19, 34, 0.98); border: 1px solid rgba(241, 196, 66, 0.25); border-radius: 12px; padding: 10px; opacity: 0; visibility: hidden; transition: opacity 0.2s ease, transform 0.2s ease; box-shadow: 0 22px 44px rgba(0,0,0,0.5); z-index: 1001; }
            .nido-desplegable:hover .nido-panel, .nido-desplegable.abierto .nido-panel { opacity: 1; visibility: visible; transform: translate(-50%, 0); }
            .nido-grupo { font-size: 0.68rem; letter-spacing: 0.14em; text-transform: uppercase; color: #f1c442; margin: 8px 10px 4px; font-family: 'Inter', sans-serif; }
            .nido-panel a { display: block; padding: 7px 10px; border-radius: 8px; color: #e9e4d6; text-decoration: none; font-size: 0.92rem; font-family: 'Inter', sans-serif; }
            .nido-panel a:hover { background: rgba(241, 196, 66, 0.1); color: #f1c442; }
            .nido-enlaces > a.nido-boton-app { margin-left: 10px; flex-shrink: 0; background: linear-gradient(135deg, #f6cf4f, #dda51d); color: #0f1626; font-weight: 700; padding: 9px 18px; border-radius: 999px; box-shadow: 0 4px 16px rgba(241, 196, 66, 0.35); }
            .nido-enlaces > a.nido-boton-app::after { display: none; }
            .nido-enlaces > a.nido-boton-app:hover { filter: brightness(1.08); color: #0f1626; }
            .nido-hamburguesa { display: none; margin-left: auto; background: none; border: 1px solid rgba(241,196,66,0.4); border-radius: 8px; color: #f1c442; font-size: 1.15rem; padding: 6px 12px; cursor: pointer; }
            .nido-hamburguesa::after { content: none; }
            .nido-hamburguesa:hover { transform: none; box-shadow: none; border-color: rgba(241,196,66,0.4); }
            .nido-desplegable > button:hover { transform: none; box-shadow: none; border-color: transparent; }
            @media (max-width: 1080px) {
                .nido-hamburguesa { display: block; }
                .nido-enlaces { display: none; position: absolute; top: 100%; left: 0; right: 0; flex-direction: column; align-items: stretch; background: rgba(9, 13, 24, 0.98); padding: 12px 18px 18px; border-bottom: 1px solid rgba(241, 196, 66, 0.28); }
                .nido-enlaces.visible { display: flex; }
                .nido-enlaces > a, .nido-desplegable > button { text-align: left; padding: 12px 8px; width: 100%; }
                .nido-panel { position: static; transform: none; opacity: 1; visibility: visible; display: none; box-shadow: none; border: none; background: transparent; padding: 0 0 6px 12px; }
                .nido-desplegable.abierto .nido-panel { display: block; }
                .nido-enlaces > a.nido-boton-app { margin: 10px 0 0; text-align: center; }
            }
        </style>
        <header class="nido-barra">
          <div class="nido-barra-interior">
            <a class="nido-marca" href="index.html">
              <img src="img/logo-simbolo.jpg" alt="Símbolo de El Nido de Estrellas">
              <span>El Nido de Estrellas</span>
            </a>
            <button class="nido-hamburguesa" id="nidoBtnMenu" aria-label="Abrir menú" type="button">☰</button>
            <nav class="nido-enlaces" id="nidoMenuEnlaces">
              <a href="familias.html">Inicio</a>
              <div class="nido-desplegable">
                <button type="button">Salud <span class="nido-flecha">▼</span></button>
                <div class="nido-panel">
                  <div class="nido-grupo">Guías prácticas</div>
                  <a href="guiasSalud.html">Guías de Salud</a>
                  <a href="posparto-01.html">Salud Mental y Posparto</a>
                  <a href="orientacion.html">Orientación y Apoyo</a>
                  <div class="nido-grupo">Psicología y mente</div>
                  <a href="glosario.html">Glosario Poético</a>
                  <a href="glosariopedagogico.html">Glosario Pedagógico</a>
                  <a href="mitos.html">Mitos vs. Realidad</a>
                  <a href="rinconlectura.html">Rincón de Lectura</a>
                  <a href="preguntas.html">Rincón de Preguntas</a>
                </div>
              </div>
              <div class="nido-desplegable">
                <button type="button">Crianza <span class="nido-flecha">▼</span></button>
                <div class="nido-panel">
                  <a href="desarrollo.html">Guía de Desarrollo</a>
                  <a href="calculadora.html">Calculadora 0–3 años</a>
                  <a href="nombres.html">Guía de Nombres</a>
                  <div class="nido-grupo">Recorrido vital</div>
                  <a href="embarazo01.html">Embarazo y Nacimiento</a>
                  <a href="lactancia01.html">Lactancia y Alimentación</a>
                  <a href="dental01.html">Salud Dental</a>
                  <a href="crecimiento01.html">Crecimiento y Revisiones</a>
                  <a href="auxilios01.html">Primeros Auxilios</a>
                </div>
              </div>
              <div class="nido-desplegable">
                <button type="button">Debates y podcast <span class="nido-flecha">▼</span></button>
                <div class="nido-panel">
                  <a href="podcast.html">Podcast: Debates de Crianza</a>
                  <a href="debates.html">Debates y Reflexión</a>
                </div>
              </div>
              <div class="nido-desplegable">
                <button type="button">Recursos <span class="nido-flecha">▼</span></button>
                <div class="nido-panel">
                  <a href="recursos.html">Rincón de Familias (PDF)</a>
                  <a href="rutinas.html">Rutinas y Calendarios</a>
                </div>
              </div>
              <div class="nido-desplegable">
                <button type="button">El Nido <span class="nido-flecha">▼</span></button>
                <div class="nido-panel">
                  <a href="bienvenida.html">Bienvenida</a>
                  <a href="proyecto.html">El Proyecto y el Autor</a>
                  <a href="tuvoz.html">Tu Voz</a>
                  <a href="contacto.html">Contacto</a>
                  <a href="mapa.html">Índice Maestro</a>
                </div>
              </div>
              <a href="https://www.elnidodeestrellas.com/app/" class="nido-boton-app">App gratuita</a>
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
            if (!estaba) drop.classList.add('abierto');
        });
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