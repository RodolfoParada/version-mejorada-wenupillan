 class ContactoWenupillan extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });

      this.shadowRoot.innerHTML = `
        <style>
        
          .contacto-container {
            font-family: Arial, sans-serif;
            max-width: 1100px;
            margin: auto;
            background: #f7f7f7;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            color: #333;
             margin-bottom: -2rem;
          }

          h2, h3 {
            text-align: center;
            margin-bottom: 1rem;
          }

          .info-contacto {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1rem;
            margin-bottom: 2rem;
          }

          .persona {
            background-color: #fff;
            padding: 1rem;
            border-radius: 8px;
            box-shadow: 0 0 5px rgba(0,0,0,0.05);
            text-align: center;
            font-size: 0.95rem;
          }

          .persona a {
            color: #ff9800;
            text-decoration: none;
            word-break: break-word;
          }

          .form-mapa {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            align-items: start;
          }

          form {
            display: grid;
            gap: 1rem;
          }

          input, textarea {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #ccc;
            border-radius: 8px;
            font-size: 1rem;
          }

          button {
            padding: 0.75rem;
            border: none;
            border-radius: 8px;
            background-color: #ff9800;
            color: white;
            font-size: 1rem;
            cursor: pointer;
          }

          button:hover {
            background-color: #e68900;
          }

          iframe {
            width: 100%;
            height: 100%;
            min-height: 400px;
            border: none;
            border-radius: 12px;
          }

          @media (max-width: 900px) {
            .info-contacto {
              grid-template-columns: repeat(2, 1fr);
            }
            .form-mapa {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 500px) {
            .info-contacto {
              grid-template-columns: 1fr;
            }
          }

          h2{
            color: #782259;
          }
          p{
            color: #782259;
            text-align: center; 
          }  
          h3{
            color: #782259;
          }  
        </style>

        <div class="contacto-container">
          <h2><b>Contáctanos</b></h2>
          <p ><strong>Cervecería Wenupillan</strong></p>
        <p>Completa el formulario o contáctanos directamente y te responderemos rápidamente para resolver todas tus dudas.</p>

          <div class="info-contacto">
            <div class="persona">
              <strong>Diego Andrés<br>Nahuelcheo Villalobos</strong><br>
              Maestro Cervecero<br>
              <a href="mailto:dnahuelcheo@wenupillan.cl">dnahuelcheo@wenupillan.cl</a>
            </div>
            <div class="persona">
              <strong>Laura Aedo<br>Fernández</strong><br>
              Encargada Administrativa<br>
              <a href="mailto:laedo@wenupillan.cl">laedo@wenupillan.cl</a>
            </div>
            <div class="persona">
              <strong>Sebastian Sandoval<br>Ibañez</strong><br>
              Ayudante de Cervecería<br>
              <a href="mailto:ssandoval@wenupillan.cl">ssandoval@wenupillan.cl</a>
            </div>
            <div class="persona">
              <strong>Pablo Fernandez-Sancho</strong><br>
              Chef Ejecutivo<br>
              <a href="mailto:contacto@wenupillan.cl">contacto@wenupillan.cl</a>
            </div>
            
          </div>

          <h3>Escríbenos y te responderemos</h3>
          <div class="form-mapa">
            <form id="contacto-form">
              <input type="text" name="nombre" placeholder="Nombre" required>
              <input type="text" name="apellido" placeholder="Apellido" required>
              <input type="tel" name="telefono" placeholder="Teléfono" required>
              <input type="email" name="email" placeholder="Email" required>
              <textarea name="mensaje" rows="5" placeholder="Escribe acá tu mensaje" required></textarea>
              <button type="submit">Enviar mensaje</button>
            </form>

             <iframe
              src="https://www.google.com/maps?q=Wenu+Pillán+Cervecería+y+Restaurante,+Camino+Villarrica+a+Pucón,+KM+10,+4930000+Villarrica,+Araucanía&output=embed"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
            
        </div>
      `;

      
    }

    connectedCallback() {
      const form = this.shadowRoot.querySelector('#contacto-form');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Gracias por contactarnos. Está es una página de estudio pero puede ingresar a www.wenupillan.cl para comunicarse directamente con el proveedor.');
        form.reset();
      });
    }
  }

  customElements.define('contacto-wenupillan', ContactoWenupillan);
