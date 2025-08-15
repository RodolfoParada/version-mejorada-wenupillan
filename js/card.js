class BeerCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        .card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center; /* centra todo horizontalmente */
          gap: 1rem;
          padding: 2rem;
          border-radius: 12px;
          color: white;
          background-color: rgba(0,0,0,0.3); /* solo visual */
          margin-top:160px;
          z-index:20;

        
        }

        /* overlay visual sin bloquear clics */
        .card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(128, 128, 128, 0.5);
          border-radius: 12px;
          pointer-events: none; /* crucial */
          z-index: 0;
        }

        .card > * {
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .titulo-cerveza h4,
        .titulo-cerveza h1 {
          margin: 0;
        }

        .descripcion {
          font-size: 1rem;
        }

        @media (min-width: 768px) and (max-width: 991px) {
        /* estilos para tablets */
        .card{
          width: 400px;
          margin-top: 250px;
        
        }
      }

        @media (min-width: 992px) and (max-width: 1199px) {
        /* estilos para laptops */
        .card{
          width: 400px;
          margin-top: 250px;
        
         }
        }

        @media (min-width: 1200px) and (max-width: 1243px) {
        /* estilos para pantallas grandes */
        .card{
        
        width: 400px;
          margin-top: 250px;
        
         }
        }
 
          @media (min-width: 1243px) and (max-width: 1400px) {
        .card{
        
        width: 400px;
          margin-top: 250px;
        
         }
        }  

      </style>

      <div class="card">
        <div class="titulo-cerveza">
          <h4 id="subtitle"></h4>
          <h1 id="title"></h1>
        </div>
        <p class="descripcion" id="description"></p>
        <div>
          <buy-button href="/tienda.html">Ir a comprar</buy-button>
        </div>  
      </div>
    `;
  }

  static get observedAttributes() {
    return ['title', 'subtitle', 'description'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'title') this.shadowRoot.getElementById('title').textContent = newValue;
    if (name === 'subtitle') this.shadowRoot.getElementById('subtitle').textContent = newValue;
    if (name === 'description') this.shadowRoot.getElementById('description').textContent = newValue;
  }
}

customElements.define('beer-card', BeerCard);
