class Machi extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        .cerveza-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #EECB00; /* fondo amarillo */
          padding: 2rem;
          gap: 2rem;
        
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

        .imagen {
          flex: 1;
          display: flex;
          justify-content: flex-end;
        }

        img {
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
           display: flex;
           flex-direction: column;
           justify-content: center;
           height: 100%;
          }

          .titulo-cerveza {
            margin-bottom: 1rem; /* separa del párrafo */
          }

          .descripcion {
          text-align: justify;
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
