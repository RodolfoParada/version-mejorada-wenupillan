class PartnerButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
        }

        .container {
          font-family: Arial, sans-serif;
          text-align: center;
          padding: 1rem;
          background-color: #EEEEEE; /* gris claro, puedes cambiar a otro */
          width: 100%;
          box-sizing: border-box; /* para que el padding no haga overflow */
          margin-bottom:-4rem;
        }

        h1 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
          color: #782259;
        }

        p {
          font-size: 1rem;
          color: #333;
          margin-bottom: 1rem;
        }

        button {
          padding: 0.6rem 1.2rem;
          font-size: 1rem;
          background-color: transparent;
          color: #782259;
          border: 2px solid #782259;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        button:hover {
          background-color: #782259;
          color: white;
        }
      </style>

      <div class="container">
        <h1>Conviértete en nuestro partner</h1>
        <p><b>¡Nos encantaría estar presentes en tu bar, restaurante o botillería!</b></p>
        <button id="contactBtn">¡Contáctanos!</button>
      </div>
    `;
  }

  connectedCallback() {
    this.shadowRoot.getElementById("contactBtn").addEventListener("click", () => {
      window.location.href = `${this.basePath}/contacto.html`;
    });
  }
}

customElements.define('partner-button', PartnerButton);
