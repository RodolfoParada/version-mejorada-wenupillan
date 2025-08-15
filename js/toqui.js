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
          margin-right: -30px;
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
              title="Toqui Irish Red Ale 6,5º"
              description="Toqui es una cerveza de estilo Irish Red Ale de color cobrizo con aroma a maltas caramelo, maltas tostadas y lúpulo. 
              Sabor herbal de cuerpo medio bajo y un toque de amargor moderado. Sin aditivos, ni preservantes. Sin Filtrar."
              image="./assets/cervezas/1-nana.png" alt="Cerveza Toqui">
           </beer-card>

           <div>
              <img src="./assets/cervezas/2-toki.png" alt="Cerveza Toqui">
           </div>      
      </div>
    `;
  }
}

customElements.define('cerveza-toqui', Toqui);
