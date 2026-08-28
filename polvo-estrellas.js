document.addEventListener("DOMContentLoaded", () => {
    // Creamos el canvas dinámicamente para no alterar tu HTML existente
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none"; // Evita que interfiera con clics en los botones o enlaces
    canvas.style.zIndex = "9999"; // Siempre por encima pero sin estorbar
    document.body.appendChild(canvas);

    let particles = [];
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Clase para cada partícula de polvo estelar
    class StarParticle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 2.5 + 0.5; // Tamaño pequeño y delicado
            this.speedX = (Math.random() - 0.5) * 1.2;
            this.speedY = (Math.random() - 0.5) * 1.2;
            this.life = 1; // Opacidad inicial
            this.decay = Math.random() * 0.03 + 0.015; // Velocidad de desvanecimiento
            // Tonalidades cálidas/estelares (blancos y dorados suaves)
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

    // Generar partículas al mover el cursor
    window.addEventListener("mousemove", (e) => {
        // Generamos entre 1 y 2 partículas por cada movimiento para que no sature
        for (let i = 0; i < 2; i++) {
            particles.push(new StarParticle(e.clientX, e.clientY));
        }
    });

    // Bucle de animación fluido
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = particles.length - 1; i >= 0; i--) {
            particles[i].update();
            particles[i].draw();
            
            // Eliminar partículas muertas
            if (particles[i].life <= 0) {
                particles.splice(i, 1);
            }
        }
        
        requestAnimationFrame(animate);
    }

    animate();
});