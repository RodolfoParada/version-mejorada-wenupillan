class Lonko extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        .cerveza-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #782259; /* fondo amarillo */
          padding: 2rem;
          gap: 2rem;
          margin-bottom: 8rem;
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
          color:white;
        }

        p {
          margin-top: 1.5rem;
          text-align: justify;
          font-size: 1rem;
          line-height: 1.5;
          color:white;
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
            text-align: center;
          }
        }
      </style>

      <div class="cerveza-container">
        <div class="texto">
         <p>Cerveza<p>  
          <h3>Lonko Porter 8º</h3>
          <p>
           Lonko es una cerveza de estilo Porter de un color marrón oscuro intenso. Aromas a chocolate, café y maltas. Sabor chocolate y malta para terminar con un toque de lúpulo y café. Sin aditivos, ni preservantes. Sin Filtrar.
          </p>
        </div>
        <div class="imagen">
          <img src="./assets/cervezas/4.lonko.png" alt="Cerveza Machi">
        </div>
      </div>
    `;
  }
}

customElements.define('cerveza-lonko', Lonko);