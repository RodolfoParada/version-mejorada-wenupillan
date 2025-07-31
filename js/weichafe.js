class Weichafe extends HTMLElement {
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
          background-color: rgba(120, 34, 89, 0.85); /* vino con opacidad */
          background-blend-mode: multiply;
        }
          navbar-menu {
          position: absolute;
          top: 0;
          right: 55%;
          transform: translateX(-50%);
          z-index: 10;
          margin-top:160px;
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
        <navbar-menu class="menu"></navbar-menu>

        <div class="texto">
          <div class="titulo-cerveza">
            <p>Cerveza</p>  
              <h3>Weichafe Ipa 7,2º</h3>
            </div>
            <p>
            Weichafe es una cerveza IPA (Indian Pale Ale) de color oro. Aroma a maltas y lúpulo. 
            Sabor fuertemente lupulado y equilibrado con malta. Sin aditivos, ni preservantes. Sin Filtrar.
          </p>
        </div>
        <div class="imagen">
          <img src="./assets/cervezas/3.weichafe.png" alt="Cerveza Weichafe">
        </div>
      </div>
    `;
  }
}

customElements.define('cerveza-weichafe', Weichafe);
