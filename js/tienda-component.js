class TiendaComponent extends HTMLElement {
  connectedCallback() {
    // Detectar entorno (local o GitHub Pages)
    const isGitHub = location.hostname.includes("github.io");
    const repoName = isGitHub ? location.pathname.split("/")[1] : "";
    const basePath = isGitHub ? `/${repoName}` : "";

    // HTML del componente
    this.innerHTML = `
      <style>
        .card-img-top {
          width: 20%;
          height: 220px;
          object-fit: cover;
          border-radius: 0.25rem;
        }
      </style>

      <section class="container">
        <h2>Bienvenido a la tienda</h2>
        <div class="row" id="lista-productos"></div>
       
      </section>
    `;

    // Obtener productos del localStorage
    const productos = JSON.parse(localStorage.getItem('productos')) || [];

    // Referencias DOM
    const contenedor = this.querySelector('#lista-productos');
    const carritoLista = this.querySelector('#carrito-lista');
    const totalCarrito = this.querySelector('#total-carrito');
    const btnIrPagar = this.querySelector('#ir-pagar');

    // Renderizar productos
    productos.forEach(producto => {
      const div = document.createElement('div');
      div.classList.add('col-md-6', 'mb-4');

      // Corregir ruta de imagen si comienza con "/"
      const imagenSrc = producto.imagen.startsWith("/")
        ? `${basePath}${producto.imagen}`
        : producto.imagen;

      div.innerHTML = `
        <div class="card">
          <img src="${imagenSrc}" class="card-img-top" alt="${producto.nombre}">
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p><b>${producto.texto}</b></p>
            <p class="card-text">Precio: $${producto.precio}</p>
            <button class="btn btn-primary agregar-carrito" data-id="${producto.id}">Añadir al carrito</button>
          </div>
        </div>
      `;
      contenedor.appendChild(div);
    });

    // Manejar clics en botones "Agregar al carrito"
    this.querySelectorAll('.agregar-carrito').forEach(btn => {
      btn.addEventListener('click', e => {
        const id = parseInt(e.target.getAttribute('data-id'));
        const producto = productos.find(p => p.id === id);
        agregarAlCarrito(producto);
        renderCarrito();
      });
    });

    // Agregar producto al carrito
    const agregarAlCarrito = (producto) => {
      let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
      carrito.push(producto);
      localStorage.setItem('carrito', JSON.stringify(carrito));
    };

    // Renderizar carrito
    const renderCarrito = () => {
      const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
      carritoLista.innerHTML = '';
      let total = 0;

      carrito.forEach((item) => {
        total += Number(item.precio);
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = `${item.nombre} - $${item.precio}`;
        carritoLista.appendChild(li);
      });

      totalCarrito.textContent = total;
      btnIrPagar.disabled = carrito.length === 0;
    };

    // Inicializar carrito
    renderCarrito();

    // Botón "Ir a pagar"
    btnIrPagar.addEventListener('click', () => {
      alert('Redirigiendo a la página de pago...');
      // Si tienes una página de pago, puedes usar:
      // window.location.href = `${basePath}/pago.html`;
    });
  }
}

customElements.define('tienda-component', TiendaComponent);
