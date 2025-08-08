class CarritoCompras extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._carritoActual = localStorage.getItem("carrito"); // Estado inicial
  }

  connectedCallback() {
    const basePath = this.getAttribute("basepath") || ".";

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
      <style>
        #carrito-wrapper { position: relative; }
        #toggle-carrito { position: relative; }
        #dropdown-carrito {
          display: none;
          position: absolute;
          top: 100%;
          right: 0;
          background: white;
          color: black;
          border: 1px solid #ccc;
          border-radius: 5px;
          width: 300px;
          max-height: 400px;
          overflow-y: auto;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
          z-index: 999;
          padding: 1rem;
        }
        #dropdown-carrito.mostrar { display: block; }
      </style>

      <div id="carrito-wrapper">
        <button id="toggle-carrito" class="btn btn-light position-relative">
          🛒 <span id="contador-carrito" class="badge bg-danger">0</span>
        </button>
        <div id="dropdown-carrito">
          <h6>🛒 Carrito</h6>
          <ul id="lista-carrito" style="list-style: none; padding: 0;"></ul>
          <p><strong>Total:</strong> $<span id="total-carrito" class="text-success fw-bold fs-5">0</span></p>
          <a href="${basePath}/tienda.html" class="btn btn-success w-100">Ir a pagar</a>
        </div>
      </div>
    `;

    this.toggleCarrito = this.shadowRoot.getElementById("toggle-carrito");
    this.dropdownCarrito = this.shadowRoot.getElementById("dropdown-carrito");
    this.contadorCarrito = this.shadowRoot.getElementById("contador-carrito");
    this.listaCarrito = this.shadowRoot.getElementById("lista-carrito");
    this.totalCarrito = this.shadowRoot.getElementById("total-carrito");

    this.toggleCarrito.addEventListener("click", (e) => {
      e.stopPropagation();
      this.dropdownCarrito.classList.toggle("mostrar");
    });

    window.addEventListener("click", (e) => {
      const path = e.composedPath();
      if (!path.includes(this.toggleCarrito) && !path.includes(this.dropdownCarrito)) {
        this.dropdownCarrito.classList.remove("mostrar");
      }
    });

    window.addEventListener("storage", (e) => {
      if (e.key === "carrito") {
        this.actualizarCarrito();
      }
    });

    this._interval = setInterval(() => {
      const actual = localStorage.getItem("carrito");
      if (actual !== this._carritoActual) {
        this._carritoActual = actual;
        this.actualizarCarrito();
      }
    }, 500);

    this.actualizarCarrito();
  }

  disconnectedCallback() {
    clearInterval(this._interval);
  }

  actualizarCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    this.contadorCarrito.textContent = carrito.length;
    this.listaCarrito.innerHTML = "";
    let total = 0;

    const subtotales = {};
    carrito.forEach((item) => {
      const nombre = item.nombre;
      const precio = Number(item.precio) || 0;
      total += precio;

      if (!subtotales[nombre]) {
        subtotales[nombre] = { cantidad: 0, subtotal: 0, precio };
      }

      subtotales[nombre].cantidad += 1;
      subtotales[nombre].subtotal += precio;
    });

    const subtotalesContainer = document.createElement("div");
    subtotalesContainer.classList.add("mb-3");

    for (const nombre in subtotales) {
      const { cantidad, subtotal, precio } = subtotales[nombre];
      const subtotalEl = document.createElement("div");
      subtotalEl.classList.add("d-flex", "justify-content-between", "align-items-center", "mb-2");

      subtotalEl.innerHTML = `
        <div>
          <strong>${nombre}</strong> - $${precio.toLocaleString()} x 
          <span id="cantidad-${nombre}">${cantidad}</span> = 
          $${subtotal.toLocaleString()}
        </div>
        <div class="d-flex align-items-center gap-1">
          <button class="btn btn-sm btn-outline-secondary" data-nombre="${nombre}" data-action="decrement">−</button>
          <span style="min-width: 20px; text-align: center;">${cantidad}</span>
          <button class="btn btn-sm btn-outline-secondary" data-nombre="${nombre}" data-action="increment">+</button>
        </div>
      `;

      subtotalesContainer.appendChild(subtotalEl);
    }

    this.listaCarrito.appendChild(subtotalesContainer);
    this.totalCarrito.textContent = total.toLocaleString();

    subtotalesContainer.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const nombre = e.target.getAttribute("data-nombre");
        const action = e.target.getAttribute("data-action");
        if (action === "decrement") {
          this.eliminarUnaUnidad(nombre);
        } else if (action === "increment") {
          this.agregarUnaUnidad(nombre);
        }
      });
    });
  }

  agregarUnaUnidad(nombre) {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const ejemplo = carrito.find(item => item.nombre === nombre);
    if (ejemplo) {
      carrito.push({ ...ejemplo });
      localStorage.setItem("carrito", JSON.stringify(carrito));
      this._carritoActual = localStorage.getItem("carrito");
      this.actualizarCarrito();
    }
  }

  eliminarUnaUnidad(nombre) {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const index = carrito.findIndex(item => item.nombre === nombre);
    if (index !== -1) {
      carrito.splice(index, 1);
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    this._carritoActual = localStorage.getItem("carrito");
    this.actualizarCarrito();
  }
}

customElements.define("carrito-compras", CarritoCompras);
