class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      />
      <style>
        .footer {
          background-color: #25688b26;
          color: #f0f6fd;
          padding: 2rem 1rem;
          text-align: center;
        }

        .logo-wenupillan {
          width: 140px;
          height: 40px;
          object-fit: contain;
          margin-bottom: 1rem;
        }

        .iconos {
          width: 25px;
          height: 25px;
          object-fit: contain;
        }

        .icono-dorado {
          filter: invert(55%) sepia(79%) saturate(372%) hue-rotate(355deg)
            brightness(95%) contrast(92%);
        }

        /* Columna 2 y 3 títulos */
        .footer strong {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          display: block;
          text-align: left;
        }

        /* Enlaces sociales */
        a.text-decoration-none {
          display: inline-block;
          margin-bottom: 0.5rem;
        }

        a .small {
          font-weight: 700;
        }

        /* Ajustes móviles */
        @media (max-width: 767.98px) {
          .footer {
            text-align: center;
            padding: 1.5rem 1rem;
          }

          /* Que cada columna ocupe todo el ancho */
          .col-12 {
            margin-bottom: 2rem;
          }

          /* Centrar títulos y texto */
          .footer strong {
            text-align: center !important;
            font-size: 1.25rem;
          }

          /* Ajustar imágenes para móviles */
          .logo-wenupillan {
            width: 120px;
            height: auto;
            margin-bottom: 1rem;
          }

          .iconos {
            width: 20px;
            height: 20px;
          }

          /* Centramos los iconos y textos en redes sociales */
          .d-flex.flex-row.align-items-center {
            justify-content: center;
          }

          /* Ajustar márgenes en enlaces sociales */
          a.text-decoration-none {
            margin-bottom: 0.75rem;
          }

          /* Ajustar textos de contacto y horario */
          .col-12 .small {
            font-size: 0.9rem;
          }
        }
      </style>

      <footer class="footer text-white bg-dark">
        <div class="container">
          <div class="row text-center text-md-start">
            <!-- Columna 1: Logo y redes -->
            <div class="col-12 col-md-4 d-flex flex-column align-items-center align-items-md-start">
              <img
                src="assets/footer/Logo-Wenupillan.png"
                class="logo-wenupillan"
                alt="Logo"
                title="Logo"
                style="display: block;"
              />
              <a
                href="https://www.facebook.com/WenuPillanMolco/"
                target="_blank"
                class="text-decoration-none text-white"
              >
                <div class="d-flex flex-row align-items-center mb-1">
                  <img
                    src="assets/footer/facebook.png"
                    class="iconos icono-dorado"
                    alt="Facebook"
                    title="Facebook"
                  />
                  <span class="small ms-2">Facebook</span>
                </div>
              </a>
              <a
                href="https://www.instagram.com/wenupillanmolco/"
                target="_blank"
                class="text-decoration-none text-white"
              >
                <div class="d-flex flex-row align-items-center mb-1">
                  <img
                    src="assets/footer/instagram.png"
                    class="iconos icono-dorado"
                    alt="Instagram"
                    title="Instagram"
                  />
                  <span class="small ms-2">Instagram</span>
                </div>
              </a>
              <a
                href="https://www.tripadvisor.cl/Restaurant_Review-g294303-d15697262-Reviews-Wenu_Pillan_Cerveceria_Restaurante-Villarrica_Araucania_Region.html"
                target="_blank"
                class="text-decoration-none text-white"
              >
                <div class="d-flex flex-row align-items-center mb-1">
                  <img
                    src="assets/footer/tripadvisor.png"
                    class="iconos icono-dorado"
                    alt="Tripadvisor"
                    title="Tripadvisor"
                  />
                  <span class="small ms-2">Tripadvisor</span>
                </div>
              </a>
              <a
                href="https://untappd.com/WenuPillan#google_vignette"
                target="_blank"
                class="text-decoration-none text-white"
              >
                <div class="d-flex flex-row align-items-center mb-1">
                  <img
                    src="assets/footer/botella.png"
                    class="iconos icono-dorado"
                    alt="Untappd"
                    title="Untappd"
                  />
                  <span class="small ms-2">Untappd</span>
                </div>
              </a>
            </div>

            <!-- Columna 2: Contacto -->
            <div class="col-12 col-md-4 d-flex flex-column">
              <strong>Contáctanos</strong>
              <div class="d-flex flex-row align-items-center mb-1">
                <img
                  src="assets/footer/correo.png"
                  class="iconos icono-dorado"
                  alt="Correo"
                  title="Correo"
                  style="width: 30px; height: 30px;"
                />
                <span class="small ms-2">contacto@wenupillan.cl</span>
              </div>
              <div class="d-flex flex-row align-items-center mt-2">
                <img
                  src="assets/footer/llamar.png"
                  class="iconos icono-dorado"
                  alt="Teléfono"
                  title="Teléfono"
                  style="width: 30px; height: 30px;"
                />
                <span class="small ms-2">+56 9 5637 5330</span>
              </div>
              <div class="d-flex flex-row align-items-start mt-2">
                <img
                  src="assets/footer/mapa.png"
                  class="iconos icono-dorado mt-1"
                  alt="Ubicación"
                  title="Ubicación"
                  style="width: 30px; height: 30px;"
                />
                <span class="small ms-2">
                  Camino Villarrica a Pucón KM10<br />
                  Villarrica, Región de la Araucanía
                </span>
              </div>
            </div>

            <!-- Columna 3: Horario -->
            <div class="col-12 col-md-4 d-flex flex-column">
              <strong>Horario de Atención</strong>
              <span class="small mb-2 fw-bold"
                >Cervecería (solo venta online)</span
              >
              <div class="d-flex flex-row align-items-center mb-1">
                <img
                  src="assets/footer/reloj.png"
                  class="iconos icono-dorado"
                  alt="Horario"
                  title="Horario"
                />
                <span class="small text-center fw-bold">
                  Lunes a Jueves<br />09:00 a 20:00 hrs
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

window.customElements.define("mi-footer", Footer);
