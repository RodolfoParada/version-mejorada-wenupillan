class MenuPDF extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const pdfPath = `${window.location.origin}/assets/restaurant/Carta_Wenupillan2020-2021.pdf`;

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          max-width: 100%;
        }
        h2 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #782259 !important;
        }
        .pdf-container {
          border: none;
          margin-bottom: 2rem;
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
          background-color: transparent;
          color: #782259;
          border: 2px solid #782259;
          text-decoration: none;
          border-radius: 4px;
          cursor: pointer;
          margin-bottom: 1rem;
        }
        .btn:hover {
          background-color: #782259;
          color: white;
        }
        .fallback {
          font-size: 1rem;
          color: #333;
          margin-bottom: 1rem;
        }
      </style>

      <h2>Menú del Restaurante<info-tooltip></info-tooltip></h2>

      <a href="${pdfPath}" download class="btn" aria-label="Descargar el menú del restaurante en PDF">
        Descargar Menú en PDF
      </a>

      <div class="pdf-container" id="pdfContainer"></div>
    `;

    // Lógica para verificar soporte PDF
    const container = this.shadowRoot.getElementById("pdfContainer");
    if (this._supportsPDF()) {
      container.innerHTML = `
        <iframe src="${pdfPath}" title="Carta del restaurante 2020-2021">
        </iframe>
      `;
    } else {
      container.innerHTML = `
        <p class="fallback">
          Tu navegador no puede mostrar PDFs. 
          <a href="${pdfPath}" class="btn" download>Descargar Menú en PDF</a>
        </p>
      `;
    }
  }

  _supportsPDF() {
    // Detecta si el navegador puede mostrar PDFs en <iframe>
    const pdfMime = navigator.mimeTypes["application/pdf"];
    return !!pdfMime || typeof window.navigator.pdfViewerEnabled !== "undefined";
  }
}

customElements.define('menu-pdf', MenuPDF);
