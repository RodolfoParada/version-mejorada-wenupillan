class Toqui extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        .cerveza-container {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2rem;
          gap: 2rem;
          margin-bottom: 10rem;

          background-image: url('./assets/cervezas/volcan-humo.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-color: rgba(255, 0, 0, 0.75); /* rojo con opacidad */
          background-blend-mode: multiply;
        }

        .texto {
          flex: 1;
          text-align: left;
          font-family: sans-serif;
        }

        h3 {
          margin: 0;
          font-size: 1.8rem;
          font-weight: bold;
          color: white;
        }

        p {
          margin-top: 1.5rem;
          text-align: justify;
          font-size: 1rem;
          line-height: 1.5;
          color: white; 
        }
          .titulo-cerveza {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .descripcion {
         text-align: justify;
         font-size: 1rem;
         color: white;
         }

        .imagen {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          margin-bottom: -2rem;
        }

        .imagen img {
          max-width: 100%;
          height: auto;
          border-radius: 12px;
          margin-right: -2rem;
        }

        @media (max-width: 768px) {
          .cerveza-container {
            flex-direction: column;
            text-align: center;
          }

          .imagen {
            justify-content: center;
            margin-top: 1rem;
          }

          .texto {
            text-align: center;
          }
        }
      </style>

      <div class="cerveza-container">
        <div class="texto">
          <div class="titulo-cerveza">
           <p>Cerveza</p>  
           <h3>Toqui Irish Red Ale 6,5º</h3>
          </div>
          <p>
            Toqui es una cerveza de estilo Irish Red Ale de color cobrizo con aroma a maltas caramelo, maltas tostadas y lúpulo. 
            Sabor herbal de cuerpo medio bajo y un toque de amargor moderado. Sin aditivos, ni preservantes. Sin Filtrar.
          </p>
        </div>
        <div class="imagen">
          <img src="./assets/cervezas/2-toki.png" alt="Cerveza Toqui">
        </div>
      </div>
    `;
  }
}

customElements.define('cerveza-toqui', Toqui);
