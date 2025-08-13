 class Suscribete extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            font-family: Arial, sans-serif;
            width: 100%;
            background-color: #e0e0e0; /* gris claro */
            padding: 20px 0; /* espacio arriba y abajo */
          }

          .container {
            border: 1px solid white;
            padding: 1em;
            border-radius: 8px;
            max-width: 400px;
            background-color: #e0e0e0;
            margin: 0 auto;
            text-align: center;
            position: relative;
            margin-top: 24px !important;
            margin-bottom:24px !important;

            /* Agregado: sombra alrededor del borde blanco */
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
          }


        .form-overlay {
  position: absolute;
  top: 0;
  left: 100%; 
  background: white;
  border: 1px solid #ccc;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-radius: 8px;
  padding: 1em;
  width: 250px;
  display: none;
  z-index: 999;
}

.form-overlay.show {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

/* Cambios para pantallas pequeñas */
@media (max-width: 1022px) {
  .form-overlay {
    top: 100%;        /* debajo del botón */
    left: 50%;        /* centrado horizontal */
    transform: translateX(-50%);
  }
}
          input {
            padding: 0.5em;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 1em;
          }

          button {
            padding: 0.5em 1em;
            font-size: 1em;
            background-color: transparent;
            color: #782259;
            border: 2px solid #782259;
            border-radius: 4px;
            cursor: pointer;
        
          }

          button:hover {
            background-color:  #782259;
            color: white;
            }
          
          h3 {
             color:  #782259;
          }

        </style>

        <div class="container">
          <h3>Suscríbete a nuestro boletín</h3>
          <button id="toggleForm">Aquí</button>
          <div class="form-overlay" id="subscriptionForm">
            <input type="text" placeholder="Nombre" id="name" />
            <input type="email" placeholder="Correo electrónico" id="email" />
            <button id="subscribeButton">Solicitar suscripción</button>
          </div>
        </div>
      `;

      const toggleBtn = this.shadowRoot.getElementById('toggleForm');
      const form = this.shadowRoot.getElementById('subscriptionForm');
      const subscribeBtn = this.shadowRoot.getElementById('subscribeButton');

      toggleBtn.addEventListener('click', () => {
        form.classList.toggle('show');
      });

      subscribeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const name = this.shadowRoot.getElementById('name').value.trim();
        const email = this.shadowRoot.getElementById('email').value.trim();

        if (!name || !email) {
          alert('Por favor, completa todos los campos.');
          return;
        }

        alert(`¡Gracias por suscribirte, ${name}!`);
        form.classList.remove('show');
      });
    }
  }

  customElements.define('suscribete-item', Suscribete);