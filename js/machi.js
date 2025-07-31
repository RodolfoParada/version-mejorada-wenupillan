class Machi extends HTMLElement {
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
          margin-bottom: 2rem;
          
          background-image: url('./assets/cervezas/volcan-humo.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-color: rgba(238, 203, 0, 0.85);
          background-blend-mode: multiply;
        }

        .texto {
          flex: 1;
          font-family: sans-serif;
          text-align: left; /* Asegura que por defecto sea izquierda */
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
            <h3>Machi Pale Ale 5,2º</h3>
          </div>

          <p class="descripcion">
            Machi es una cerveza de estilo Pale Ale de color dorada. Aroma a frutas maduras y un sutil toque de lúpulo. 
            Sabor maltoso de bajo amargor que finaliza con el dulzor propio de la malta. Sin aditivos, ni preservantes. Sin Filtrar.
          </p>
        </div>
        <div class="imagen">
          <img src="./assets/cervezas/1-nana.png" alt="Cerveza Machi">    
        </div>
      </div>
    `;
  }
}

customElements.define('cerveza-machi', Machi);
