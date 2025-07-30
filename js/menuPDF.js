class MenuPDF extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          max-width: 100%;
        }

        h2 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .pdf-container {
          border: 1px solid #ccc;
          margin-bottom: 2rem;
          overflow: hidden;
           border: none;
        }

        iframe {
          width: 100%;
          height: 100vh;
          border: none;
          background: white;
          display: block;
           margin-bottom: 6rem;
        }

        .btn {
          display: inline-block;
          padding: 0.5rem 1rem;
          font-size: 1rem;
          text-align: center;
          background-color: #ffc107;
          color: black;
          text-decoration: none;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          margin-bottom: 1rem;
        }

        .btn:hover {
          background-color: #e0a800;
        }
      </style>

      <h2>Menú del Restaurante (Precios desactualizados 2020-2021)</h2>

      <a 
        href="assets/restaurant/Carta_Wenupillan2020-2021.pdf" 
        download 
        class="btn"
        aria-label="Descargar el menú del restaurante en PDF">
        Descargar Menú en PDF
      </a>

      <div class="pdf-container">
        <iframe 
          src="assets/restaurant/Carta_Wenupillan2020-2021.pdf" 
          title="Carta del restaurante 2020-2021">
          Tu navegador no soporta la visualización de PDFs.
        </iframe>
      </div>
    `;
  }
}

customElements.define('menu-pdf', MenuPDF);