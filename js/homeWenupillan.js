 class AboutWenupillan extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });

      shadow.innerHTML = `
        <style>
          .color-back {
            background-color: #798754; /* verde musgo */
            color: white;
            padding: 3rem 1rem;
            box-sizing: border-box;
            width: 100%;
          }

          h3, h5 {
            text-align: center;
            margin-bottom: 1.5rem;
          }

          p {
            text-align: center;
            line-height: 1.8;
            margin: 1rem 0;
          }

          @media (min-width: 768px) {
            .color-back {
              padding: 4rem 6rem;
            }
          }
        </style>

        <div class="color-back">
          <h3><b>WenuPillán, más que cerveza artesanal</b></h3>

          <p>
            Desde el corazón de La Araucanía nace Wenu Pillán, una cerveza con identidad, 
            pasión y respeto por nuestras raíces.<br>
            Inspirados por la fuerza de la tierra mapuche y una profunda conexión con la 
            naturaleza, elaboramos cada cerveza con <br> 
            dedicación, aprendizaje constante y orgullo cultural.<br>
          </p>

          <p>
            Nuestro viaje comenzó en 2015, y desde entonces no hemos parado de crecer, 
            experimentar y soñar. WenuPillán es el <br> 
            resultado de años de esfuerzo, amistad y la convicción de que la cultura 
            también se puede disfrutar en cada sorbo.<br>
          </p>

          <h5>
            ¡Te invitamos a conocer de nosotros, probar nuestras cervezas y ser parte 
            de este viaje con sentido!
          </h5>
        </div>
      `;
    }
  }

  customElements.define('about-wenupillan', AboutWenupillan);