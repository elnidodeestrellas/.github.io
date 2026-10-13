/* El Nido de Estrellas — lógica de la app */
(function(){
  "use strict";
  var WEB = 'https://www.elnidodeestrellas.com';

  function el(html){
    var d = document.createElement('div');
    d.innerHTML = html.trim();
    return d.firstChild;
  }
  function ext(url){ return url ? ' target="_blank" rel="noopener"' : ''; }

  /* Navegación por pestañas */
  var botones = document.querySelectorAll('nav.tabs button');
  function ir(pag){
    botones.forEach(function(b){ b.classList.toggle('activa', b.dataset.pag === pag); });
    document.querySelectorAll('.pagina').forEach(function(p){
      p.classList.toggle('activa', p.id === 'pag-' + pag);
    });
    window.scrollTo({top:0, behavior:'smooth'});
  }
  botones.forEach(function(b){ b.addEventListener('click', function(){ ir(b.dataset.pag); }); });
  document.querySelectorAll('.acceso[data-ir]').forEach(function(a){
    a.addEventListener('click', function(){ ir(a.dataset.ir); });
  });

  /* Destacado de buenas noches: rota un microcuento por día */
  (function(){
    var i = Math.floor(Date.now()/864e5) % MICROCUENTOS.length;
    var m = MICROCUENTOS[i];
    document.getElementById('destacadoNoche').innerHTML =
      '<h3>🌟 Para esta noche: «' + m.titulo + '»</h3>' +
      '<p>' + m.descripcion + '</p>' +
      '<div class="fila-botones"><a class="boton chico" href="' + WEB + '/microcuentos.html"' + ext(1) + '>Leer el microcuento 📖</a></div>';
  })();

  /* Cuentos: leer / escuchar */
  var listaLeer = document.getElementById('listaLeer');
  CUENTOS.forEach(function(c, i){
    listaLeer.appendChild(el(
      '<a class="item" href="' + c.url + '"' + ext(c.url) + '>' +
      '<span class="num">' + (i+1) + '</span><span><b>' + c.titulo + '</b>' +
      '<small>Léelo antes de dormir 🌙</small></span><span class="flecha">›</span></a>'
    ));
  });
  var listaEscuchar = document.getElementById('listaEscuchar');
  AUDIOS.forEach(function(a, i){
    var url = a.url || (WEB + '/audios-lista.html');
    listaEscuchar.appendChild(el(
      '<a class="item" href="' + url + '"' + ext(url) + '>' +
      '<span class="num">🔊</span><span><b>' + a.titulo + '</b>' +
      '<small>Escúchalo donde estés</small></span><span class="flecha">›</span></a>'
    ));
  });
  var tabLeer = document.getElementById('tabLeer'),
      tabEsc = document.getElementById('tabEscuchar');
  tabLeer.addEventListener('click', function(){
    tabLeer.classList.add('activa'); tabEsc.classList.remove('activa');
    listaLeer.classList.remove('oculto'); listaEscuchar.classList.add('oculto');
  });
  tabEsc.addEventListener('click', function(){
    tabEsc.classList.add('activa'); tabLeer.classList.remove('activa');
    listaEscuchar.classList.remove('oculto'); listaLeer.classList.add('oculto');
  });

  /* Guías con buscador */
  var listaGuias = document.getElementById('listaGuias');
  function pintarGuias(filtro){
    listaGuias.innerHTML = '';
    var f = (filtro || '').toLowerCase().trim();
    var n = 0;
    GUIAS.forEach(function(g){
      if (f && g.titulo.toLowerCase().indexOf(f) < 0) return;
      n++;
      listaGuias.appendChild(el(
        '<a class="item" href="' + g.url + '"' + ext(g.url) + '>' +
        '<span class="num">🩺</span><span><b>' + g.titulo + '</b></span><span class="flecha">›</span></a>'
      ));
    });
    if (!n) listaGuias.appendChild(el('<p style="color:var(--suave);padding:8px 4px;">No hay guías con ese texto. Prueba con otra palabra 🙂</p>'));
  }
  pintarGuias('');
  document.getElementById('buscarGuia').addEventListener('input', function(e){ pintarGuias(e.target.value); });

  /* Debates */
  var listaDebates = document.getElementById('listaDebates');
  DEBATES.forEach(function(d){
    listaDebates.appendChild(el(
      '<div class="tarjeta"><h3>' + d.titulo + '</h3><p>' + d.tema + '</p>' +
      '<div class="fila-botones"><a class="boton chico" href="' + WEB + '/debates.html"' + ext(1) + '>Escuchar 🎧</a></div></div>'
    ));
  });

  /* Podcast propio */
  var listaPodcast = document.getElementById('listaPodcast');
  PODCAST.forEach(function(p, i){
    var url = p.url || (WEB + '/podcast.html');
    listaPodcast.appendChild(el(
      '<a class="item" href="' + url + '"' + ext(url) + '>' +
      '<span class="num">' + (i+1) + '</span><span><b>' + p.titulo + '</b></span><span class="flecha">›</span></a>'
    ));
  });

  /* Microcuentos por categoría */
  var listaMicro = document.getElementById('listaMicro');
  var cats = {};
  MICROCUENTOS.forEach(function(m){
    (cats[m.categoria] = cats[m.categoria] || []).push(m);
  });
  Object.keys(cats).forEach(function(cat){
    listaMicro.appendChild(el('<div class="grupo-cat">' + cat + '</div>'));
    cats[cat].forEach(function(m){
      listaMicro.appendChild(el(
        '<div class="tarjeta"><h3>' + m.titulo + '</h3><p>' + m.descripcion + '</p></div>'
      ));
    });
  });

  /* Recorrido vital */
  var nombres = {
    embarazo: '🤰 Embarazo',
    posparto: '💗 Posparto y salud mental',
    lactancia: '🤱 Lactancia',
    dental: '🦷 Salud dental',
    crecimiento: '🌱 Crecimiento',
    primeros_auxilios: '⛑️ Primeros auxilios'
  };
  var listaRec = document.getElementById('listaRecorrido');
  Object.keys(nombres).forEach(function(k){
    var partes = RECORRIDO[k] || [];
    if (!partes.length) return;
    listaRec.appendChild(el('<div class="grupo-cat">' + nombres[k] + '</div>'));
    partes.forEach(function(p){
      var t = p.titulo || ('Parte ' + p.parte);
      listaRec.appendChild(el(
        '<a class="item" href="' + p.url + '"' + ext(p.url) + '>' +
        '<span class="num">' + p.parte + '</span><span><b>' + t + '</b></span><span class="flecha">›</span></a>'
      ));
    });
    if (k === 'embarazo' && RECORRIDO.preguntas_frecuentes && RECORRIDO.preguntas_frecuentes.url){
      var pf = RECORRIDO.preguntas_frecuentes;
      listaRec.appendChild(el(
        '<a class="item" href="' + pf.url + '"' + ext(pf.url) + '>' +
        '<span class="num">?</span><span><b>' + (pf.titulo || 'Preguntas frecuentes') + '</b></span><span class="flecha">›</span></a>'
      ));
    }
  });

  /* Juegos */
  var juegos = [
    ['🧩','Puzzles', WEB + '/puzzles.html'],
    ['🃏','Juego de memoria', WEB + '/memoria.html'],
    ['❓','Adivinanzas', WEB + '/adivinanzas.html'],
    ['🗺️','Aventura', WEB + '/aventura.html'],
    ['🎨','Colorear', WEB + '/colorear.html']
  ];
  var listaJuegos = document.getElementById('listaJuegos');
  juegos.forEach(function(j){
    listaJuegos.appendChild(el(
      '<a class="acceso" href="' + j[2] + '"' + ext(j[2]) + ' style="text-decoration:none;">' +
      '<span class="ico">' + j[0] + '</span><b>' + j[1] + '</b></a>'
    ));
  });

  /* Banner de instalación PWA */
  var banner = document.getElementById('bannerInstalar'),
      btnInstalar = document.getElementById('btnInstalar'),
      diferido = null;
  window.addEventListener('beforeinstallprompt', function(e){
    e.preventDefault();
    diferido = e;
    banner.classList.add('mostrar');
  });
  btnInstalar.addEventListener('click', function(){
    if (diferido){ diferido.prompt(); diferido = null; banner.classList.remove('mostrar'); }
  });
  document.getElementById('btnInstalarCerrar').addEventListener('click', function(){
    banner.classList.remove('mostrar');
  });
  /* iOS: no hay beforeinstallprompt; mostrar ayuda manual una vez */
  var esIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  if (esIOS && !navigator.standalone && !localStorage.getItem('nidoBannerVisto')){
    banner.classList.add('mostrar');
    banner.querySelector('p').innerHTML = '📲 <b>Instala la app:</b> toca <b>Compartir</b> y elige <b>«Añadir a pantalla de inicio»</b>.';
    btnInstalar.classList.add('oculto');
    localStorage.setItem('nidoBannerVisto', '1');
  }
})();
