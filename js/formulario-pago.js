class FormularioPago extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["total"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "total" && this.shadowRoot) {
      this.render();
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const total = parseInt(this.getAttribute("total")) || 0;
    const despacho = 30000;
    const totalFinal = total + despacho;

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
      <style>
         <style>
      :host {
        display: block;
        max-width: 100%;
      }

      /* Contenedor para manejar scroll en móviles */
      .form-wrapper {
        max-height: 100vh;
        overflow-y: auto;
        padding: 1rem;
        box-sizing: border-box;
      }

      .buttom {
        background-color:#5F8B4C;
        color:white; 
      }
      .buttom:hover {
        background-color: #4a6b39;
        cursor: pointer;
        color:white; 
      }

      /* Ajustes para pantallas menores a 991px */
      @media (max-width: 991px) {
        .form-wrapper {
          padding: 0.8rem;
          margin-bottom:130px;
        }
      }
    </style>
     
    <div class="form-wrapper">
      <h6>Formulario de Pago</h6>
      <form id="formulario">
        <div class="mb-2">
          <input type="text" class="form-control" placeholder="Nombres" name="nombres" required>
        </div>
        <div class="mb-2">
          <input type="text" class="form-control" placeholder="Apellidos" name="apellidos" required>
        </div>
        <div class="mb-2">
          <input type="text" class="form-control" placeholder="RUT" name="rut" required>
        </div>
        <div class="mb-2">
          <input type="text" class="form-control" placeholder="Tarjeta bancaria" name="tarjeta" required>
        </div>
        <div class="mb-2">
          <input type="text" class="form-control" placeholder="Dirección" name="direccion" required>
        </div>

        <hr>
        <p><strong>Subtotal del carrito:</strong> $<span id="subtotal-carrito">${total.toLocaleString()}</span></p>
        <p><strong>Despacho:</strong> $<span id="valor-despacho">${despacho.toLocaleString()}</span></p>
        <p><strong>Total a pagar:</strong> $<span id="total-con-despacho" class="text-success fw-bold fs-5">${totalFinal.toLocaleString()}</span></p>
        <hr>

        <button type="submit" class="btn buttom w-100">Pagar</button>
      </form>
    </div>
    `;

    this.formulario = this.shadowRoot.getElementById("formulario");

    this.formulario.addEventListener("submit", (e) => this.procesarPago(e));
  }

  procesarPago(e) {
    e.preventDefault();

    const data = new FormData(this.formulario);
    const camposObligatorios = ["nombres", "apellidos", "rut", "tarjeta", "direccion"];
    let faltan = false;

    for (const campo of camposObligatorios) {
      if (!data.get(campo)?.trim()) {
        faltan = true;
        break;
      }
    }

    if (faltan) {
      alert("Por favor, complete todos los campos obligatorios.");
      return;
    }

    alert("Esta es una página de estudio. Los valores son idénticos a la página original www.wenupillan.cl, pero quizás están desactualizados. Contactarse con ellos para realizar una compra real.");

    // Limpiar el carrito
    localStorage.removeItem("carrito");
    window.dispatchEvent(new Event("storage"));

    // Reiniciar el formulario con total 0
    this.setAttribute("total", "0");
  }
}

customElements.define("formulario-pago", FormularioPago);

