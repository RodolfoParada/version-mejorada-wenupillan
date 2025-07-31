class Navegacion extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {

  const rutaActual = window.location.pathname;

    // Mapea ruta a imagen fondo con rutas absolutas para evitar error de carga
    let imagenFondo = "./assets/nav/default.png";
    if (rutaActual.includes("index.html") || rutaActual === "/" || rutaActual === "/index") {
      imagenFondo = "./assets/nav/azul.jpg";
    } else if (rutaActual.includes("nosotros.html")) {
      imagenFondo = "./assets/nav/gris.jpg";
    } else if (rutaActual.includes("cervezas.html")) {
      imagenFondo = "./assets/nav/mandarina.jpg";
    } else if (rutaActual.includes("restaurant.html")) {
      imagenFondo = "./assets/nav/negro.jpg";
    } else if (rutaActual.includes("tienda.html")) {
      imagenFondo = "./assets/nav/verde.jpg";
    } else if (rutaActual.includes("contacto.html")) {
      imagenFondo = "./assets/nav/violeta.jpg";
    } else if (rutaActual.includes("machi.html")) {
      imagenFondo = "./assets/nav/violeta.jpg";
    } else if (rutaActual.includes("toqui.html")) {
      imagenFondo = "./assets/nav/violeta.jpg";
    } else if (rutaActual.includes("weichafe.html")) {
      imagenFondo = "./assets/nav/violeta.jpg";
    } else if (rutaActual.includes("lonko.html")) {
      imagenFondo = "./assets/nav/violeta.jpg";
    }

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
     

      <style> 
      nav.navbar {
  background-color: transparent !important;
  
}

nav.navbar {
   padding-top: 2rem;
  padding-bottom: 2rem;
  background-image: url('${imagenFondo}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
   /* Muy importante para que crezca con el contenido */
  height: auto;
  overflow: visible;
}  
.nav-link {
  position: relative;
  color: white !important;
  text-decoration: none;
  font-weight: normal;
  padding: 6px 12px;
  border: 1px solid transparent;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  border: 1px solid white;
  color: #f8f9fa;
}

.nav-link.active {
  font-weight: bold;
  border: 1px solid white;
}

.nav-link:hover::after,
.nav-link.active::after {
width: 100%;
}

.nav-link:hover {
   color: #f8f9fa;
}

.nav-link.active {
  font-weight: bold;
}

.dropdown-menu {
  position: absolute;
  background-color: white;
  color: black;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  margin-top: 0.5rem;
  z-index: 1000;
  min-width: 200px;
}

.dropdown-item {
  padding: 10px 15px;
  display: block;
  color: black;
  text-decoration: none;
}

.dropdown-item:hover {
  background-color: #f8f9fa;
}
  .dropdown-toggle::after {
  display: none !important;
}

      </style> 
   <nav class="navbar navbar-expand-lg navbar-light fixed-top color px-3 position-relative" style="height: 400px; background-size: cover; background-position: center;">
  
  <!-- Logo centrado y flotando sobre el fondo -->
  <div style="position: absolute; top: 20px; left: 50%; transform: translateX(-50%); z-index: 10;">
    <a href="#">
      <img src="./assets/nav/Logo.png" alt="Logo" style="height: 80px;" />
    </a>
  </div>

  <div class="container-fluid position-relative" style="height: 100%; display: flex; flex-direction: column; justify-content: flex-end;">
    <!-- Botón hamburguesa -->
    <button class="navbar-toggler" id="btn-toggle" type="button">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Menú de navegación alineado al fondo del navbar -->
    <div class="collapse navbar-collapse justify-content-center" id="menu">
      <ul class="navbar-nav gap-4 mb-3">
        <li class="nav-item"><a class="nav-link text-white fw-bold" href="./index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link text-white fw-bold" href="./nosotros.html">Nosotros</a></li>
        <li class="nav-item dropdown">
           <a class="nav-link dropdown-toggle text-white fw-bold" href="./cervezas.html" id="cervezasDropdown">
             Cervezas
           </a>
           <ul class="dropdown-menu" id="submenu-cervezas" style="display: none;">
              <li><a class="dropdown-item" href="machi.html">Machi Pale Ale 5.2</a></li>
              <li><a class="dropdown-item" href="toqui.html">Toqui Irish Red Ale 6.5</a></li>
              <li><a class="dropdown-item" href="weichafe.html">Wichafe IPA 7.2</a></li>
              <li><a class="dropdown-item" href="lonko.html">Lonko Porter 8.0</a></li>
           </ul>
        </li>
        <li class="nav-item"><a class="nav-link text-white fw-bold" href="./restaurant.html">Restaurant</a></li>
        <li class="nav-item"><a class="nav-link text-white fw-bold" href="./tienda.html">Tienda</a></li>
        <li class="nav-item"><a class="nav-link text-white fw-bold" href="./contacto.html">Contacto</a></li>
      </ul>
    </div>
  </div>
</nav>
    
    `;

     // Comportamiento del toggle personalizado
     const toggleBtn = this.shadowRoot.getElementById("btn-toggle");
     const menu = this.shadowRoot.getElementById("menu");
 
     toggleBtn.addEventListener("click", () => {
       menu.classList.toggle("show");
     });
 
     console.log("Componente <mi-navegacion> cargado correctamente");
   
  // Resaltar link activo
const links = this.shadowRoot.querySelectorAll(".nav-link");
links.forEach(link => {
  const linkHref = link.getAttribute("href");
  if (rutaActual.includes(linkHref)) {
    link.classList.add("active");
  }
}); 
   

// Dropdown para Cervezas
const dropdownToggle = this.shadowRoot.getElementById("cervezasDropdown");
const submenu = this.shadowRoot.getElementById("submenu-cervezas");

dropdownToggle.addEventListener("click", (e) => {
  e.preventDefault(); // Evita navegación
  submenu.style.display = submenu.style.display === "block" ? "none" : "block";
});

// Cerrar dropdown al hacer click fuera (fuera del submenu y del toggle)
window.addEventListener("click", (e) => {
  const path = e.composedPath();
  if (!path.includes(submenu) && !path.includes(dropdownToggle)) {
    submenu.style.display = "none";
  }
});
  } 
}

customElements.define("mi-navegacion", Navegacion);

