class Navegacion extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {

     const rutaActual = window.location.pathname;

    // Asocia cada página con su imagen
    let imagenFondo = "../assets/nav/default.png"; // por defecto

    if (rutaActual.includes("index.html") || rutaActual === "/" || rutaActual === "/index") {
      imagenFondo = "../assets/nav/Volcan.png";
    } else if (rutaActual.includes("nosotros.html")) {
      imagenFondo = "../assets/nav/Bosque.png";
    } else if (rutaActual.includes("cervezas.html")) {
      imagenFondo = "../assets/nav/Ciudad.png";
    } else if (rutaActual.includes("restaurant.html")) {
      imagenFondo = "../assets/nav/Playa.png";
    }else if (rutaActual.includes("tienda.html")) {
      imagenFondo = "../assets/nav/Playa.png";
    }else if (rutaActual.includes("contacto.html")) {
      imagenFondo = "../assets/nav/Playa.png";
    }


    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
      <link rel="stylesheet" href="css/nav.css"/>
  
   <nav class="navbar navbar-expand-lg navbar-light fixed-top color px-3 position-relative" style="height: 400px; background-image: url('../assets/nav/Volcan.png'); background-size: cover; background-position: center;">
  
  <!-- Logo centrado y flotando sobre el fondo -->
  <div style="position: absolute; top: 20px; left: 50%; transform: translateX(-50%); z-index: 10;">
    <a href="#">
      <img src="../assets/nav/Logo.png" alt="Logo" style="height: 80px;" />
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
        <li class="nav-item"><a class="nav-link text-white fw-bold" href="index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link text-white fw-bold" href="nosotros.html">Nosotros</a></li>
        <li class="nav-item"><a class="nav-link text-white fw-bold" href="cervezas.html">Cervezas</a></li>
        <li class="nav-item"><a class="nav-link text-white fw-bold" href="restaurant.html">Restaurant</a></li>
        <li class="nav-item"><a class="nav-link text-white fw-bold" href="tienda.html">Tienda</a></li>
        <li class="nav-item"><a class="nav-link text-white fw-bold" href="contacto.html">Contacto</a></li>
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
   
  } 
}

customElements.define("mi-navegacion", Navegacion);

