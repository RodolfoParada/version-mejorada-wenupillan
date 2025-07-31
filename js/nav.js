class Navegacion extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    // Detectar si estamos en GitHub Pages
    const isGitHub = location.hostname.includes("github.io");
    
    // Si estamos en GitHub Pages, obtenemos el nombre del repositorio
    const repoName = isGitHub ? location.pathname.split("/")[1] : "";

    // Generamos la ruta base según entorno
    const basePath = isGitHub ? `/${repoName}` : "";

    const rutaActual = window.location.pathname;

    let imagenFondo = `${basePath}/assets/nav/default.png`;

    if (rutaActual.includes("index.html") || rutaActual === "/" || rutaActual.includes("index")) {
      imagenFondo = `${basePath}/assets/nav/azul.jpg`;
    } else if (rutaActual.includes("nosotros.html")) {
      imagenFondo = `${basePath}/assets/nav/gris.jpg`;
    } else if (rutaActual.includes("cervezas.html")) {
      imagenFondo = `${basePath}/assets/nav/mandarina.jpg`;
    } else if (rutaActual.includes("restaurant.html")) {
      imagenFondo = `${basePath}/assets/nav/negro.jpg`;
    } else if (rutaActual.includes("tienda.html")) {
      imagenFondo = `${basePath}/assets/nav/verde.jpg`;
    } else if (
      rutaActual.includes("contacto.html") ||
      rutaActual.includes("machi.html") ||
      rutaActual.includes("toqui.html") ||
      rutaActual.includes("weichafe.html") ||
      rutaActual.includes("lonko.html")
    ) {
      imagenFondo = `${basePath}/assets/nav/violeta.jpg`;
    }

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">

      <style>
        nav.navbar {
          background-color: transparent !important;
          padding-top: 2rem;
          padding-bottom: 2rem;
          background-image: url('${imagenFondo}');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
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

      <nav class="navbar navbar-expand-lg navbar-light fixed-top color px-3 position-relative" style="height: 400px;">
        <!-- Logo -->
        <div style="position: absolute; top: 20px; left: 50%; transform: translateX(-50%); z-index: 10;">
          <a href="${basePath}/index.html">
            <img src="${basePath}/assets/nav/Logo.png" alt="Logo" style="height: 80px;" />
          </a>
        </div>

        <div class="container-fluid position-relative" style="height: 100%; display: flex; flex-direction: column; justify-content: flex-end;">
          <button class="navbar-toggler" id="btn-toggle" type="button">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-center" id="menu">
            <ul class="navbar-nav gap-4 mb-3">
              <li class="nav-item"><a class="nav-link text-white fw-bold" href="${basePath}/index.html">Home</a></li>
              <li class="nav-item"><a class="nav-link text-white fw-bold" href="${basePath}/nosotros.html">Nosotros</a></li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white fw-bold" href="${basePath}/cervezas.html" id="cervezasDropdown">
                  Cervezas
                </a>
                <ul class="dropdown-menu" id="submenu-cervezas" style="display: none;">
                  <li><a class="dropdown-item" href="${basePath}/machi.html">Machi Pale Ale 5.2</a></li>
                  <li><a class="dropdown-item" href="${basePath}/toqui.html">Toqui Irish Red Ale 6.5</a></li>
                  <li><a class="dropdown-item" href="${basePath}/weichafe.html">Wichafe IPA 7.2</a></li>
                  <li><a class="dropdown-item" href="${basePath}/lonko.html">Lonko Porter 8.0</a></li>
                </ul>
              </li>
              <li class="nav-item"><a class="nav-link text-white fw-bold" href="${basePath}/restaurant.html">Restaurant</a></li>
              <li class="nav-item"><a class="nav-link text-white fw-bold" href="${basePath}/tienda.html">Tienda</a></li>
              <li class="nav-item"><a class="nav-link text-white fw-bold" href="${basePath}/contacto.html">Contacto</a></li>
            </ul>
          </div>
        </div>
      </nav>
    `;

    const toggleBtn = this.shadowRoot.getElementById("btn-toggle");
    const menu = this.shadowRoot.getElementById("menu");
    toggleBtn.addEventListener("click", () => menu.classList.toggle("show"));

    const links = this.shadowRoot.querySelectorAll(".nav-link");
    links.forEach(link => {
      const linkHref = link.getAttribute("href");
      if (rutaActual.includes(linkHref)) {
        link.classList.add("active");
      }
    });

    const dropdownToggle = this.shadowRoot.getElementById("cervezasDropdown");
    const submenu = this.shadowRoot.getElementById("submenu-cervezas");

    dropdownToggle.addEventListener("click", (e) => {
      e.preventDefault();
      submenu.style.display = submenu.style.display === "block" ? "none" : "block";
    });

    window.addEventListener("click", (e) => {
      const path = e.composedPath();
      if (!path.includes(submenu) && !path.includes(dropdownToggle)) {
        submenu.style.display = "none";
      }
    });
  }
}

customElements.define("mi-navegacion", Navegacion);
