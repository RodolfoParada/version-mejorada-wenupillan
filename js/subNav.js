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
        * {
          box-sizing: border-box;
        }

        .navbar-nav {
          list-style: none;
          padding: 0;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .nav-item {
          width: 100%;
          text-align: center;
        }

        .nav-link {
          text-decoration: none;
          display: inline-block;
        }

        .nav-link img {
          width: 50px;
          height: auto;
          border-radius: 0.5rem;
          transition: transform 0.3s;
        }

        .nav-link img:hover {
          transform: scale(1.1);
        }

        /* Tablet en adelante */
        @media (min-width: 768px) {
          .navbar-nav {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2rem;
            margin-bottom: 24rem;
          }

          .nav-item {
            width: auto;
          }

          .nav-link img {
            width: 30px;
            margin-top: 20px;
          }
        }

        /* Laptop en adelante */
        @media (min-width: 1024px) {
          .nav-link img {
            width: 40px;
            margin-top: -120px; 
          }
        }

        /* Escritorio grande */
        @media (min-width: 1440px) {
          .nav-link img {
            width: 50px;
          }
        }
      </style>

      <nav>
        <ul class="navbar-nav">
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
      </nav>
    `;
  }
}

customElements.define('navbar-menu', NavbarMenu);
