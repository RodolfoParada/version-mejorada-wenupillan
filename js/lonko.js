class Lonko extends HTMLElement {
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
          margin-top: -155px;
           margin-left: 80px;
        }
        
     

         @media (min-width: 768px) and (max-width: 991px) {
        img{
           
          width:150%;
          margin-top: 230px;
          }
         }
          
      </style>

      <div class="cerveza-container">
        <navbar-menu class="menu"></navbar-menu>

           <beer-card class="card-bottom"
              subtitle="Cerveza"
              title="Lonko Porter 8º"
              description="Lonko es una cerveza de estilo Porter de un color marrón oscuro intenso. Aromas a chocolate, café y maltas. 
              Sabor chocolate y malta para terminar con un toque de lúpulo y café. Sin aditivos, ni preservantes. Sin Filtrar."
               image="./assets/cervezas/4.lonko.png" alt="Cerveza Lonko">
           </beer-card>
           <div>
              <img src="./assets/cervezas/4.lonko.png" alt="alt="Cerveza Lonko"">
           </div>   

      </div>
    `;
  }
}

customElements.define('cerveza-lonko', Lonko);
