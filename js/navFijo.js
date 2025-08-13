class NavegacionFija extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const isGitHub = location.hostname.includes("github.io");
    const repoName = isGitHub ? location.pathname.split("/")[1] : "";
    const basePath = isGitHub ? `/${repoName}` : "";
    const rutaActual = window.location.pathname.replace(/\/$/, "");

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
      <style>
        nav.navbar {
          background-color: #25688b26;
        }
        .navbar-brand img {
          height: 85px;
        }
        .nav-link {
          color: white !important;
          font-weight: normal;
        }
        .nav-link:hover {
          color: #f8f9fa !important;
        }
        .nav-link.active {
          font-weight: bold;
        }
        .dropdown-menu {
          background-color: white;
          display: none; /* Control manual */
          position: absolute;
        }
        .dropdown-item:hover {
          background-color: #ff9800;
          color: white;
        }
        .collapse {
         display: none !important;
        }
        .collapse.show {
         display: block !important;
        }
       
        @media (min-width: 992px) {
        .collapse {
         display: flex !important;
         }
        }


        @media (max-width: 991px) {
          .navbar-nav {
            text-align: center;
            gap: 0.5rem;
          }
        @media (min-width: 447px) and (max-width: 991px) {
         nav.navbar {
         min-height: 100px; /* o el alto que quieras */ 
         }

        .navbar-brand img {
         height: 124px; /* ajusta el logo */
          }
         }   
        }
      </style>

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container-fluid flex-lg-column align-items-lg-center">
          <a href="${basePath}/index.html" class="navbar-brand">
            <img src="${basePath}/assets/nav/Logo.png" alt="Logo">
          </a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="menu">
            <ul class="navbar-nav gap-3 position-relative">
              <li class="nav-item"><a class="nav-link" href="${basePath}/index.html">Home</a></li>
              <li class="nav-item"><a class="nav-link" href="${basePath}/nosotros.html">Nosotros</a></li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="cervezasDropdown">Cervezas</a>
                <ul class="dropdown-menu" id="submenu-cervezas">
                  <li><a class="dropdown-item" href="${basePath}/machi.html">Machi Pale Ale 5.2</a></li>
                  <li><a class="dropdown-item" href="${basePath}/toqui.html">Toqui Irish Red Ale 6.5</a></li>
                  <li><a class="dropdown-item" href="${basePath}/weichafe.html">Weichafe IPA 7.2</a></li>
                  <li><a class="dropdown-item" href="${basePath}/lonko.html">Lonko Porter 8.0</a></li>
                </ul>
              </li>
              <li class="nav-item"><a class="nav-link" href="${basePath}/restaurant.html">Restaurant</a></li>
              <li class="nav-item"><a class="nav-link" href="${basePath}/tienda.html">Tienda</a></li>
              <li class="nav-item"><a class="nav-link" href="${basePath}/contacto.html">Contacto</a></li>
              <li class="nav-item">
                <carrito-compras basepath="${basePath}"></carrito-compras>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;

    // Marcar link activo
    const links = this.shadowRoot.querySelectorAll(".nav-link");
    links.forEach(link => {
      const linkPath = new URL(link.href, window.location.origin).pathname.replace(/\/$/, "");
      if (linkPath === rutaActual) {
        link.classList.add("active");
      }
    });

    // Control manual del dropdown
    const dropdownToggle = this.shadowRoot.getElementById("cervezasDropdown");
    const submenu = this.shadowRoot.getElementById("submenu-cervezas");

    dropdownToggle.addEventListener("click", (e) => {
      e.preventDefault();
      submenu.style.display = submenu.style.display === "block" ? "none" : "block";
    });

    // Cerrar dropdown si se hace click afuera
    window.addEventListener("click", (e) => {
      const path = e.composedPath();
      if (!path.includes(submenu) && !path.includes(dropdownToggle)) {
        submenu.style.display = "none";
      }
    });
    const toggleButton = this.shadowRoot.querySelector(".navbar-toggler");
    const menu = this.shadowRoot.querySelector("#menu");

    toggleButton.addEventListener("click", () => {
    menu.classList.toggle("show"); // Bootstrap usa la clase "show" para abrir
    });

  }
}

customElements.define("nav-fijo", NavegacionFija);
