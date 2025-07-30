class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"> 
      <link rel="stylesheet" href="css/footer.css"/>

      <footer class="footer text-white py-4 fixed-bottom bg-dark">
        <div class="container">
          <div class="row text-center">

            <!-- Columna 1: Logo -->
            <div class="col-3 d-flex flex-column align-items-center"> 
              <img src="assets/footer/Logo-Wenupillan.png" class="img-item logo-wenupillan mb-2" alt="Logo" title="Logo">
            
            <a href="https://www.facebook.com/WenuPillanMolco/" target="_blank" class="text-decoration-none text-white">  
              <div class="d-flex flex-row align-items-center mb-1">
                <img src="assets/footer/facebook.png" class="img-item iconos icono-dorado" style="width:20px; height:20px;" alt="Facebook" title="Facebook">
                <span class="small ms-2 fw-bold">Facebook</span>
              </div>
            </a>
            <a href="https://www.instagram.com/wenupillanmolco/" target="_blank" class="text-decoration-none text-white">  
              <div class="d-flex flex-row align-items-center mb-1">
                <img src="assets/footer/instagram.png" class="img-item iconos icono-dorado" style="width:20px; height:20px;" alt="Instagram" title="Instagram">
                <span class="small ms-2 fw-bold">Instagram</span>
              </div>
            </a>

            <a href="https://www.tripadvisor.cl/Restaurant_Review-g294303-d15697262-Reviews-Wenu_Pillan_Cerveceria_Restaurante-Villarrica_Araucania_Region.html" target="_blank" class="text-decoration-none text-white">  
              <div class="d-flex flex-row align-items-center mb-1">
                <img src="assets/footer/tripadvisor.png" class="img-item iconos icono-dorado" style="width:20px; height:20px;" alt="Restaurante" title="Restaurante">
                <span class="small ms-0 fw-bold">Tripadvisor</span>
              </div>
            </a> 
            <a href="https://untappd.com/WenuPillan#google_vignette" target="_blank" class="text-decoration-none text-white">  
              <div class="d-flex flex-row align-items-center mb-1">
                <img src="assets/footer/botella.png" class="img-item iconos icono-dorado" style="width:20px; height:20px;" alt="Restaurante" title="Restaurante">
                <span class="small ms-3 fw-bold">Untappd</span>
              </div>
            </a>         
          </div>
            

            <!-- Columna 2: Contacto -->
           <div class="col-3 d-flex flex-column">
             <strong class="mb-2 text-start w-100 fw-bold fs-3">Contáctanos</strong>
             <!-- Correo -->
           <div class="d-flex flex-row align-items-center mb-1">
             <img src="assets/footer/correo.png" class="img-item iconos icono-dorado" style="width:30px; height:30px;" alt="Correo" title="Correo">
             <span class="small ms-2 fw-bold">contacto@wenupillan.cl</span>
           </div>
             <!-- Teléfono -->
           <div class="d-flex flex-row align-items-center mt-2">
              <img src="assets/footer/llamar.png" class="img-item iconos icono-dorado " style="width:30px; height:30px;" alt="Teléfono" title="Teléfono">
              <span class="small ms-2 fw-bold">+56 9 5637 5330</span>
           </div>
           <div class="d-flex flex-row align-items-start mt-2">
              <img src="assets/footer/mapa.png" class="img-item iconos icono-dorado  mt-1" style="width:30px; height:30px;" alt="Ubicación" title="Ubicación">
              <span class="small ms-2 fw-bold">
                 Camino Villarrica a Pucón KM10<br>
                 Villarrica, Región de la Araucanía
           </span>
          </div>
         </div>

            <!-- Columna 3: Horario -->
            <div class="col-3 d-flex flex-column">
              <strong class="mb-2 text-start w-100 fs-3">Horario de Atención</strong>
              <span class="small mb-2 text-start fw-bold">Cervecería (solo venta online)</span>
              <div class="d-flex flex-row align-items-center mb-1">
                <img src="assets/footer/reloj.png" class="img-item iconos icono-dorado" alt="Horario" title="Horario">
                <span class="small text-center fw-bold">Lunes a Jueves<br>09:00 a 20:00 hrs</span>
              </div>
            </div>

            <!-- Columna 4: Logos -->
            <div class="col-3 d-flex flex-column align-items-center">
              <img src="assets/footer/ssl-kit-digital.png" class="img-item kit mb-2" alt="Sitio Seguro" title="Sitio Seguro">
              <img src="assets/footer/sercotec.png" class="img-item sercotec" alt="Sercotec" title="Sercotec">
            </div>
          </div>

        </div>
      </footer>
    `;
  }
}

window.customElements.define("mi-footer", Footer);
