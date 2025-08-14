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
          overflow: hidden;
        }

        navbar-menu {
          position: absolute;
          top: 0;
          right: 55%;
          transform: translateX(-50%);
          z-index: 10;
          margin-top:160px;
        }
       
        img {
          margin-bottom: -40px;
          max-width: 800px;
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

        .card-bottom{
           margin-top: -180px;
           margin-left: 80px;
        }
      </style>

      <div class="cerveza-container">
        <navbar-menu class="menu"></navbar-menu>

      <beer-card class="card-bottom"
       subtitle="Cerveza"
       title="Machi Pale Ale 5,2º"
       description="Machi es una cerveza de estilo Pale Ale de color dorada. Aroma a frutas maduras y un sutil toque de lúpulo. 
            Sabor maltoso de bajo amargor que finaliza con el dulzor propio de la malta. Sin aditivos, ni preservantes. Sin Filtrar."
       image="./assets/cervezas/1-nana.png" alt="Cerveza Machi">
      </beer-card>

       <div>
         <img src="../assets/cervezas/1-nana.png" alt="Descripción de la imagen">
       </div>


       
        </div>
    `;
  }
}

customElements.define('cerveza-machi', Machi);
