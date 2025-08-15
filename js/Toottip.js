class InfoTooltip extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-flex;
          align-items: center;
          position: relative;
          font-family: Arial, sans-serif;
        }

        .icon {
          display: inline-block;
          margin-left: 8px;
          width: 20px;
          height: 20px;
          background-color: #782259;
          color: white;
          border-radius: 50%;
          text-align: center;
          font-size: 14px;
          line-height: 20px;
          cursor: pointer;
          user-select: none;
        }

        .tooltip {
          position: absolute;
          right: 0;
          top: 120%;
          background: #fff;
          color: #333;
          padding: 0.5rem;
          border-radius: 4px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          font-size: 0.85rem;
          width: 250px;
          display: none;
          z-index: 10;
        }

        .tooltip a {
          color: #782259;
          text-decoration: none;
          font-weight: bold;
        }

        .tooltip a:hover {
          text-decoration: underline;
        }

        .tooltip.visible {
          display: block;
        }
      </style>

      <span class="icon" title="Más información">?</span>
      <div class="tooltip">
        Precios desactualizados desde 2020-2021, consultar en 
        <a href="https://www.wenupillan.cl" target="_blank">www.wenupillan.cl</a>
        para ver los precios actuales. sino puedes visualizar la carta la puedes descargar.
      </div>
    `;
  }

  connectedCallback() {
    const icon = this.shadowRoot.querySelector('.icon');
    const tooltip = this.shadowRoot.querySelector('.tooltip');

    icon.addEventListener('click', (e) => {
      tooltip.classList.toggle('visible');
      e.stopPropagation();
    });

    document.addEventListener('click', () => {
      tooltip.classList.remove('visible');
    });
  }
}

customElements.define('info-tooltip', InfoTooltip);
