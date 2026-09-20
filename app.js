// ---------- Config ----------
  var WA_NUMBER = "5492494643490"; // WhatsApp de Dulce Emma
  var CURRENCY = "$";

  // Fotos reales por id de producto (si no hay, se dibuja una ilustración)
  var PHOTOS = {
    3: "assets/prod-3.jpg",
    8: "assets/prod-8.jpg",
    4: "assets/prod-4.jpg",
    2: "assets/prod-2.jpg",
    1: "assets/prod-1.jpg"
  };

  // ---------- Catálogo demo ----------
  var CATS = [
    { id: "todos", label: "Todos" },
    { id: "velas", label: "Velas" },
    { id: "difusores", label: "Difusores" },
    { id: "porcelana", label: "Porcelana fría" }
  ];

  var PRODUCTS = [
    { id:1, cat:"velas", name:"Vela Flor de Loto", price:12000, tag:"Más vendida",
      desc:"Vela de cera de soja con forma de flor de loto. Aroma a elección." },
    { id:2, cat:"velas", name:"Vela Cuenco Zen", price:9500, tag:"",
      desc:"Cuenco de cera perfumada, ideal para meditar y relajar el ambiente." },
    { id:3, cat:"velas", name:"Vela Buda Meditación", price:14000, tag:"",
      desc:"Figura de Buda en cera de soja. Un detalle sereno para tu espacio." },
    { id:4, cat:"velas", name:"Set Cuenco + Velitas", price:18000, tag:"Set",
      desc:"Cuenco decorativo acompañado de tres velitas flotantes aromáticas." },
    { id:5, cat:"difusores", name:"Difusor Aromático Lavanda", price:11000, tag:"",
      desc:"Difusor de varillas con esencia de lavanda. Aroma duradero y suave." },
    { id:6, cat:"difusores", name:"Mini Difusor de Auto", price:6500, tag:"",
      desc:"Difusor colgante para el auto o placares. Fragancia a elección." },
    { id:7, cat:"difusores", name:"Set Difusor + Repuesto", price:16500, tag:"Set",
      desc:"Difusor de varillas con frasco de repuesto de 100 ml incluido." },
    { id:8, cat:"porcelana", name:"Maceta Frida", price:15000, tag:"Artesanal",
      desc:"Maceta decorativa modelada a mano inspirada en Frida, con flores." },
    { id:9, cat:"porcelana", name:'Figura decorativa "Luz"', price:10000, tag:"",
      desc:"Pieza de porcelana fría pintada a mano. Ideal para regalar." },
    { id:10, cat:"porcelana", name:"Rosas de Porcelana", price:13500, tag:"",
      desc:"Ramo de rosas modeladas en porcelana fría que no se marchitan." },
    { id:11, cat:"porcelana", name:"Souvenirs personalizados x10", price:22000, tag:"Eventos",
      desc:"Recuerdos a medida para cumpleaños, bautismos y casamientos." },
    { id:12, cat:"velas", name:"Vela Aromática Grande", price:16000, tag:"",
      desc:"Vela de gran tamaño en vaso de vidrio. Hasta 40 h de duración." }
  ];

  // ---------- Ilustraciones SVG por categoría (placeholder demo) ----------
  var PALETTES = [
    ["#efe3f4","#d9bfe6","#8b5aa8"],
    ["#f3e6dd","#e9c9ad","#d99a4e"],
    ["#e2edE4","#bcd7c2","#7fa284"],
    ["#f6e1e9","#e6b8ca","#c9738f"]
  ];
  function thumbSVG(p){
    var pal = PALETTES[p.id % PALETTES.length];
    var g = "g"+p.id;
    var motif = "";
    if(p.cat === "velas"){
      motif =
        '<g transform="translate(150 168)">'+
        '<ellipse cx="0" cy="60" rx="70" ry="12" fill="#000" opacity=".08"/>'+
        '<rect x="-30" y="-12" width="60" height="72" rx="10" fill="#fff8ee"/>'+
        '<rect x="-30" y="-12" width="16" height="72" rx="8" fill="#fff" opacity=".5"/>'+
        '<rect x="-2" y="-46" width="4" height="34" rx="2" fill="#5b4636"/>'+
        '<path d="M0 -78 C13 -66 13 -50 0 -40 C-13 -50 -13 -66 0 -78Z" fill="#f4a638"/>'+
        '<path d="M0 -70 C7 -62 7 -50 0 -44 C-7 -50 -7 -62 0 -70Z" fill="#fff0c2"/>'+
        '</g>';
    } else if(p.cat === "difusores"){
      motif =
        '<g transform="translate(150 150)">'+
        '<ellipse cx="0" cy="78" rx="60" ry="11" fill="#000" opacity=".08"/>'+
        '<g stroke="#8a6a4e" stroke-width="4" stroke-linecap="round">'+
        '<line x1="-14" y1="18" x2="-34" y2="-70"/><line x1="0" y1="16" x2="0" y2="-80"/>'+
        '<line x1="14" y1="18" x2="34" y2="-70"/><line x1="-4" y1="17" x2="-16" y2="-76"/>'+
        '<line x1="6" y1="17" x2="20" y2="-74"/></g>'+
        '<path d="M-34 20 Q-40 84 0 84 Q40 84 34 20 Z" fill="#fff8ee"/>'+
        '<path d="M-34 20 Q-38 54 -34 54 L34 54 Q38 54 34 20 Z" fill="#e9d9c6" opacity=".5"/>'+
        '<rect x="-16" y="6" width="32" height="20" rx="5" fill="#c9a37a"/>'+
        '</g>';
    } else {
      motif =
        '<g transform="translate(150 158)">'+
        '<ellipse cx="0" cy="66" rx="64" ry="11" fill="#000" opacity=".08"/>'+
        '<circle cx="0" cy="0" r="26" fill="#fff3c9"/>'+
        '<g fill="#fff">'+
        '<ellipse cx="0" cy="-40" rx="14" ry="24"/><ellipse cx="0" cy="40" rx="14" ry="24"/>'+
        '<ellipse cx="-40" cy="0" rx="24" ry="14"/><ellipse cx="40" cy="0" rx="24" ry="14"/>'+
        '<ellipse cx="-28" cy="-28" rx="18" ry="18"/><ellipse cx="28" cy="-28" rx="18" ry="18"/>'+
        '<ellipse cx="-28" cy="28" rx="18" ry="18"/><ellipse cx="28" cy="28" rx="18" ry="18"/>'+
        '</g>'+
        '<circle cx="0" cy="0" r="17" fill="#f4c542"/>'+
        '</g>';
    }
    return '<svg viewBox="0 0 300 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">'+
      '<defs><linearGradient id="'+g+'" x1="0" y1="0" x2="1" y2="1">'+
      '<stop offset="0" stop-color="'+pal[0]+'"/><stop offset="1" stop-color="'+pal[1]+'"/></linearGradient></defs>'+
      '<rect width="300" height="300" fill="url(#'+g+')"/>'+
      '<circle cx="150" cy="120" r="95" fill="#fff" opacity=".14"/>'+
      motif + '</svg>';
  }

  function thumbHTML(p){
    if(PHOTOS[p.id]) return '<img src="'+PHOTOS[p.id]+'" alt="'+p.name+'" loading="lazy">';
    return thumbSVG(p);
  }

  function fmt(n){ return n.toLocaleString("es-AR"); }

  function waLink(text){
    return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(text);
  }
  function productMsg(p){
    return "¡Hola Dulce Emma! 💜 Me interesa: " + p.name +
      " (" + CURRENCY + fmt(p.price) + "). ¿Está disponible?";
  }

  // ---------- Estado ----------
  var current = "todos";

  function renderFilters(){
    var el = document.getElementById("filters");
    el.innerHTML = "";
    CATS.forEach(function(c){
      var b = document.createElement("button");
      b.className = "chip";
      b.textContent = c.label;
      b.setAttribute("aria-pressed", c.id === current ? "true" : "false");
      b.addEventListener("click", function(){ current = c.id; renderFilters(); renderGrid(); });
      el.appendChild(b);
    });
  }

  function renderGrid(){
    var grid = document.getElementById("grid");
    grid.innerHTML = "";
    var list = PRODUCTS.filter(function(p){ return current === "todos" || p.cat === current; });
    if(!list.length){
      grid.innerHTML = '<p class="empty">No hay productos en esta categoría todavía.</p>';
      return;
    }
    list.forEach(function(p){
      var card = document.createElement("article");
      card.className = "card";
      card.innerHTML =
        '<div class="thumb">' + thumbHTML(p) +
          (p.tag ? '<span class="tag">'+p.tag+'</span>' : '') +
        '</div>'+
        '<div class="card-body">'+
          '<h3>'+p.name+'</h3>'+
          '<p class="desc">'+p.desc+'</p>'+
          '<div class="price-row">'+
            '<span class="price"><span class="cur">'+CURRENCY+'</span> '+fmt(p.price)+'</span>'+
            '<a class="wa-btn" href="'+waLink(productMsg(p))+'" target="_blank" rel="noopener">'+
              '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.9 5-1.3A10 10 0 1 0 12 2Zm5.5 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .3-3.4-.7-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 .9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.6.8 2 .8 2.1.1.1.1.3 0 .5-.1.2-.1.3-.3.5l-.4.5c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l1.9.9c.2.1.4.2.4.3.1.2.1.6-.1 1.1Z"/></svg>'+
              'Pedir por WhatsApp</a>'+
          '</div>'+
        '</div>';
      grid.appendChild(card);
    });
  }

  // ---------- Links WhatsApp globales ----------
  var generalMsg = "¡Hola Dulce Emma! 💜 Vi tu tienda online y quería hacer una consulta.";
  ["heroWa","heroWa2","ctaWa","footWa"].forEach(function(id){
    var e = document.getElementById(id);
    if(e) e.href = waLink(generalMsg);
  });

  // ---------- Tema ----------
  var themeBtn = document.getElementById("themeBtn");
  function currentTheme(){
    var t = document.documentElement.getAttribute("data-theme");
    if(t) return t;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  themeBtn.addEventListener("click", function(){
    var next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("de_theme", next); } catch(e){}
  });
  try {
    var saved = localStorage.getItem("de_theme");
    if(saved) document.documentElement.setAttribute("data-theme", saved);
  } catch(e){}

  // ---------- Init ----------
  document.getElementById("yr").textContent = new Date().getFullYear();
  renderFilters();
  renderGrid();
