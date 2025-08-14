class BuyButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Corrige enlaces cuando se publica en GitHub Pages (evita 404)
    const isGitHub = location.hostname.includes('github.io');
    const repoName = isGitHub ? location.pathname.split('/')[1] : '';
    let href = this.getAttribute('href') || '#';
    if (isGitHub && href.startsWith('/')) {
      href = `/${repoName}${href}`; // p.ej. /mi-repo/tienda.html
    }

    this.shadowRoot.innerHTML = `
      <style>
        :host{
          display:block;          /* el host ocupa todo el ancho de su contenedor */
          width:100%;
          position:relative;
          z-index:2;              /* se asegura por encima de overlays externos */
        }
        .wrap{
          text-align:center;      /* centra el contenido inline */
        }
        a{
          display:inline-block;   /* necesario para centrado con text-align */
          padding:0.6rem 1.2rem;
          background-color:orange;
          color:white;
          border-radius:8px;
          text-decoration:none;
          transition:background-color .2s ease;
        }
        a:hover{
          background-color:darkorange;
        }
      </style>
      <div class="wrap">
        <a href="${href}" role="button"><slot>Ir a comprar</slot></a>
      </div>
    `;
  }
}
customElements.define('buy-button', BuyButton);
