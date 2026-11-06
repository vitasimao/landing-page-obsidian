// 1. Contador Regresivo de 24 Horas ciclico
function iniciarContadorCiclico(horasTotales = 24) {
  const countdownEl = document.getElementById('countdown');
  if (!countdownEl) return;

  // Duración del ciclo en milisegundos (24 horas)
  const duracionCiclo = horasTotales * 60 * 60 * 1000;

  function actualizarReloj() {
    const ahora = new Date().getTime();
    
    // Calcula cuánto tiempo resta dentro del ciclo actual de 24h
    const tiempoRestante = duracionCiclo - (ahora % duracionCiclo);

    // Conversión a Horas, Minutos y Segundos
    const horas = Math.floor((tiempoRestante / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((tiempoRestante / (1000 * 60)) % 60);
    const segundos = Math.floor((tiempoRestante / 1000) % 60);

    // Formato con ceros a la izquierda (00:00:00)
    const hStr = String(horas).padStart(2, '0');
    const mStr = String(minutos).padStart(2, '0');
    const sStr = String(segundos).padStart(2, '0');

    countdownEl.textContent = `${hStr}:${mStr}:${sStr}`;
  }

  // Ejecución inmediata y actualización cada segundo
  actualizarReloj();
  setInterval(actualizarReloj, 1000);
}

// Iniciar al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  iniciarContadorCiclico(24);
});

// 2. Animación de Entrada con GSAP
function initAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  // Animación suave del texto y contenido del Hero
  gsap.from(".hero-content > *", {
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.15,
    ease: "power3.out"
  });

  // Entrada del contenedor 3D
  gsap.from(".hero-3d", {
    duration: 1.4,
    scale: 0.9,
    opacity: 0,
    ease: "power2.out",
    delay: 0.3
  });
}

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  initCountdown();
  initAnimations();
});