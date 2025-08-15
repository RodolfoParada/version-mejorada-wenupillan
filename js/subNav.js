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

        .tooltip-custom {
          position: relative;
        }
 
        .tooltip-text {
          visibility: hidden;
          background: #333;
          color: #fff;
          text-align: center;
          padding: 4px 8px;
          border-radius: 4px;
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          white-space: nowrap;
          z-index: 10;
        }
        
        .tooltip-custom:hover .tooltip-text {
          visibility: visible;
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
            <a class="nav-link tooltip-custom" href="${basePath}/machi.html">
              <img src="${basePath}/assets/index/nana.png" alt="Machi" />
              <span class="tooltip-text">Conoce nuestra Cerveza Pale Ale</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link tooltip-custom" href="${basePath}/toqui.html">
              <img src="${basePath}/assets/index/toki.png" alt="Toqui" />
                <span class="tooltip-text">Conoce nuestra Cerveza Toqui Irish Red Ale</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link tooltip-custom" href="${basePath}/weichafe.html">
              <img src="${basePath}/assets/index/weychafe.png" alt="Weichafe" />
                <span class="tooltip-text">Conoce nuestra Cerveza Weichafe Ipa</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link tooltip-custom" href="${basePath}/lonko.html">
              <img src="${basePath}/assets/index/lonko.png" alt="Lonko" />
                <span class="tooltip-text">Conoce nuestra Cerveza Lonko Porter</span>
            </a>
          </li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('navbar-menu', NavbarMenu);
