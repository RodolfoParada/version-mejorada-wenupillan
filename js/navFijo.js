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
          color: white;
          padding: 1rem;
          flex-direction: column;
          align-items: center;
        }

        .navbar-brand {
          margin-bottom: 0.5rem;
        }

        .navbar-brand img {
          height: 60px;
          display: block;
          margin: 0 auto;
        }

        .nav-link {
          color: white !important;
          font-weight: normal;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #f8f9fa;
        }

        .nav-link.active {
          font-weight: bold;
        }

        .dropdown-menu {
          background-color: white;
          color: black;
        }

        .dropdown-item:hover {
          background-color: #ff9800;
          color:white; 
        }

        /* Centrar menú */
        .navbar-nav {
          justify-content: center;
          width: 100%;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .menu {
            display: none;
            flex-direction: column;
            gap: 1rem;
            background-color: black;
            padding: 1rem;
            align-items: center;
          }
          .menu.show {
            display: flex;
          }
        }
      </style>

      <nav class="navbar navbar-expand-lg bg-dark fixed-top">
        <div class="container-fluid flex-column align-items-center">
          <a href="${basePath}/index.html" class="navbar-brand">
            <img src="${basePath}/assets/nav/Logo.png" alt="Logo">
          </a>

          <button class="navbar-toggler" id="btn-toggle" type="button">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse menu" id="menu">
            <ul class="navbar-nav gap-3">
              <li class="nav-item"><a class="nav-link" href="${basePath}/index.html">Home</a></li>
              <li class="nav-item"><a class="nav-link" href="${basePath}/nosotros.html">Nosotros</a></li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="${basePath}/cervezas.html" id="cervezasDropdown">Cervezas</a>
                <ul class="dropdown-menu" id="submenu-cervezas" style="display: none;">
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

    const toggleBtn = this.shadowRoot.getElementById("btn-toggle");
    const menu = this.shadowRoot.getElementById("menu");

    toggleBtn.addEventListener("click", () => {
      menu.classList.toggle("show");
    });

    const links = this.shadowRoot.querySelectorAll(".nav-link");
    links.forEach(link => {
      const linkPath = new URL(link.href, window.location.origin).pathname.replace(/\/$/, "");
      if (linkPath === rutaActual) {
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

customElements.define("nav-fijo", NavegacionFija);
