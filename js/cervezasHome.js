class BeerCarousel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: Arial, sans-serif;
        }

        .titulo {
          text-align: center;
          color: #782259;
        }

        .image-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          padding: 20px;
          box-sizing: border-box;
          overflow: hidden;
        }

        .img-wrapper {
          position: relative;
          width: 300px;
          flex: 0 0 auto;
          cursor: pointer;
        }

        .img-wrapper img {
          width: 100%;
          height: auto;
          border: 2px solid transparent;
          transition: transform 0.3s, border-color 0.3s;
          display: block;
        }

        .img-wrapper img:hover {
          transform: scale(1.05);
          border-color: #394476;
        }

        .img-text {
          display: none;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 1rem;
          font-size: 0.85rem;
          text-align: center;
          z-index: 10;
        }

        .img-text.visible {
          display: block;
        }

        /* Tablets: dos columnas */
        @media (max-width: 991px) {
          .img-wrapper {
            width: calc(50% - 20px);
          }
        }

        /* Móviles: una sola columna */
        @media (max-width: 576px) {
          .image-row {
            flex-direction: column;
            align-items: center;
            gap: 30px;
          }

          .img-wrapper {
            width: 90%;
          }
        }
      </style>

      <h2 class="titulo">Nuestros Productos</h2> 
      <div class="image-row">
        <div class="img-wrapper">
          <img src="./assets/index/nana.png" alt="Ñana" />
          <div class="img-text">
            <p>Cerveza</p>
            <h3>Machi Pale Ale 5,2º</h3>
            <p>Machi es una cerveza de estilo Pale Ale de color dorada. Aroma a frutas maduras y un sutil toque de lúpulo. Sabor maltoso de bajo amargor que finaliza con el dulzor propio de la malta. Sin aditivos, ni preservantes. Sin Filtrar.</p>
          </div>
        </div>

        <div class="img-wrapper">
          <img src="./assets/index/toki.png" alt="Toki" />
          <div class="img-text">
            <p>Cerveza</p>
            <h3>Toqui Irish Red Ale 6,5º</h3>
            <p>Toqui es una cerveza de estilo Irish Red Ale de color cobrizo con aroma a maltas caramelo, maltas tostadas y lúpulo. Sabor herbal de cuerpo medio bajo y un toque de amargor moderado. Sin aditivos, ni preservantes. Sin Filtrar.</p>
          </div>
        </div>

        <div class="img-wrapper">
          <img src="./assets/index/weychafe.png" alt="Weychafe" />
          <div class="img-text">
            <p>Cerveza</p>
            <h3>Weichafe Ipa 7,2º</h3>
            <p>Weichafe es una cerveza IPA (Indian Pale Ale) de color oro. Aroma a maltas y lúpulo. Sabor fuertemente lupulado y equilibrado con malta. Sin aditivos, ni preservantes. Sin Filtrar.</p>
          </div>
        </div>

        <div class="img-wrapper">
          <img src="./assets/index/lonko.png" alt="Lonko" />
          <div class="img-text">
            <p>Cerveza</p>
            <h3>Lonko Porter 8º</h3>
            <p>Lonko es una cerveza de estilo Porter de un color marrón oscuro intenso. Aromas a chocolate, café y maltas. Sabor chocolate y malta para terminar con un toque de lúpulo y café. Sin aditivos, ni preservantes. Sin Filtrar.</p>
          </div>
        </div>
      </div>
    `;

    this.shadowRoot.querySelectorAll('.img-wrapper').forEach(wrapper => {
      wrapper.addEventListener('click', () => {
        const texto = wrapper.querySelector('.img-text');
        const isVisible = texto.classList.contains('visible');
        this.shadowRoot.querySelectorAll('.img-text').forEach(t => t.classList.remove('visible'));
        if (!isVisible) {
          texto.classList.add('visible');
        }
      });
    });
  }
}

customElements.define('cervezas-home', BeerCarousel);
