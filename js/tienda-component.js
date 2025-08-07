class TiendaComponent extends HTMLElement {
  connectedCallback() {
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

    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    const contenedor = this.querySelector('#lista-productos');
    const carritoLista = this.querySelector('#carrito-lista');
    const totalCarrito = this.querySelector('#total-carrito');
    const btnIrPagar = this.querySelector('#ir-pagar');

    // Renderizar productos
    productos.forEach(producto => {
      const div = document.createElement('div');
      div.classList.add('col-md-6', 'mb-4');
      div.innerHTML = `
        <div class="card">
          <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
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

    // Manejar click "Agregar al carrito"
    this.querySelectorAll('.agregar-carrito').forEach(btn => {
      btn.addEventListener('click', e => {
        const id = parseInt(e.target.getAttribute('data-id'));
        const producto = productos.find(p => p.id === id);
        agregarAlCarrito(producto);
        renderCarrito();
      });
    });

    // Función para agregar productos al carrito
    const agregarAlCarrito = (producto) => {
      let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
      carrito.push(producto);
      localStorage.setItem('carrito', JSON.stringify(carrito));
    };

    // Función para renderizar el carrito
    const renderCarrito = () => {
      const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
      carritoLista.innerHTML = '';
      let total = 0;

      carrito.forEach((item, index) => {
        total += Number(item.precio);
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = `${item.nombre} - $${item.precio}`;
        carritoLista.appendChild(li);
      });

      totalCarrito.textContent = total;
      btnIrPagar.disabled = carrito.length === 0;
    };

    // Inicializar carrito al cargar
    renderCarrito();

    // Evento botón "Ir a pagar"
    btnIrPagar.addEventListener('click', () => {
      alert('Redirigiendo a la página de pago...'); // Aquí puedes redirigir a otra vista
    });
  }
}

customElements.define('tienda-component', TiendaComponent);
