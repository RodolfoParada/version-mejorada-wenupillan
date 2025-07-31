class NavbarMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const hostname = location.hostname;
    const isGitHubPages = hostname.includes('github.io');
    const repoName = isGitHubPages ? location.pathname.split('/')[1] : '';
    const basePath = isGitHubPages ? `/${repoName}` : '';

    this.shadowRoot.innerHTML = `
      <style>
        .navbar-nav {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }

        .nav-item {
          margin-bottom: 0.75rem;
        }

        .nav-link {
          text-decoration: none;
          display: inline-block;
        }

        .nav-link img {
          width: 60px;
          height: auto;
          border-radius: 0.5rem;
          transition: transform 0.3s;
        }

        .nav-link img:hover {
          transform: scale(1.1);
        }

        @media (min-width: 768px) {
          .mb-3 {
            margin-bottom: 1rem !important;
          }
        }
      </style>

      <div class="collapse navbar-collapse justify-content-center" id="menu">
        <ul class="navbar-nav gap-4 mb-3">
          <li class="nav-item">
            <a class="nav-link" href="${basePath}/machi.html">
              <img src="${basePath}/assets/index/nana.png" alt="Machi" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="${basePath}/toqui.html">
              <img src="${basePath}/assets/index/toki.png" alt="Toqui" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="${basePath}/weichafe.html">
              <img src="${basePath}/assets/index/weychafe.png" alt="Weichafe" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="${basePath}/lonko.html">
              <img src="${basePath}/assets/index/lonko.png" alt="Lonko" />
            </a>
          </li>
        </ul>
      </div>
    `;
  }
}

customElements.define('navbar-menu', NavbarMenu);
