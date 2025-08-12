class TiendaComponent extends HTMLElement {
  connectedCallback() {
    const isGitHub = location.hostname.includes("github.io");
    const repoName = isGitHub ? location.pathname.split("/")[1] : "";
    const basePath = isGitHub ? `/${repoName}` : "";

    this.innerHTML = `
      <style>
        .card-img-top {
          width: 20%;
          height: -25px;
          object-fit: cover;
          border-radius: 0.25rem;
        }
        .button {
          background-color: #782259;
          color: white;
        }
        .button:hover {
         
          background-color: white;
          border: 2px solid #782259;
          color: #782259;
        }
        /* Estilos para el mensaje */
        .mensaje-carrito {
          position: fixed;
          top: 20px;
          right: 20px;
          background-color: #782259;
          color: white;
          padding: 10px 15px;
          border-radius: 5px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.5s ease;
          z-index: 9999;
        }
        .mensaje-carrito.mostrar {
          opacity: 1;
        }
        .card-precio {
          text-align: justify;
        }
        .titulo {
          margin-top: 40px !important;
          margin-bottom: 40px !important;
          color: #782259 !important;
          text-align: center !important;
        }  
          .subtitulo {
          margin-top: -30px !important;
          margin-bottom: 40px !important;
          color: #782259 !important;
          text-align: center !important;
        }    
        .producto-titulo {
           color: #782259;
        }
        .card-info {
          text-align: left !important;
        }     

        .card .p-2 {
        padding-right: 3.0rem !important;
        }
        .card {
         border: none !important; /* quita el borde */
         box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); /* sombra suave */
         border-radius: 0.5rem; /* opcional: esquinas redondeadas */
         transition: box-shadow 0.3s ease;
        }

        .card:hover {
         box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25); /* sombra más fuerte al pasar el mouse */
        }

      </style>

      <section class="container">
        <h2 class="titulo"><b>Bienvenido a nuestra tienda</b></h2>
        <p class="subtitulo">Todas nuestras cervezas auténticas, sin aditivos ni preservantes, sin filtrar, para que disfrutes el sabor puro y natural.</p>
        <div class="row" id="lista-productos"></div>
      </section>

      <div id="mensaje-carrito" class="mensaje-carrito">Producto agregado al carrito</div>
    `;

    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    const contenedor = this.querySelector('#lista-productos');
    const mensajeCarrito = this.querySelector('#mensaje-carrito');

    const mostrarMensaje = (texto) => {
      mensajeCarrito.textContent = texto;
      mensajeCarrito.classList.add('mostrar');
      setTimeout(() => {
        mensajeCarrito.classList.remove('mostrar');
      }, 2000); // desaparece después de 2 segundos
    };

    const agregarAlCarrito = (producto) => {
      let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
      carrito.push(producto);
      localStorage.setItem('carrito', JSON.stringify(carrito));
      mostrarMensaje('Producto agregado al carrito');
    };

    productos.forEach(producto => {
      const div = document.createElement('div');
      div.classList.add('col-md-6', 'mb-4');

      const imagenSrc = producto.imagen.startsWith("/")
        ? `${basePath}${producto.imagen}`
        : producto.imagen;

      div.innerHTML = `
        <div class="card">
         <div class="d-flex">
          <img src="${imagenSrc}" class="card-img-top flex-shrink-0" alt="${producto.nombre}">
           <div class="p-2">
            <h5 class="card-title producto-titulo"><b>${producto.nombre}</b></h5>
             <p class="producto-titulo"><b>${producto.texto}</b></p>
             <p class="card-info">${producto.info}</p>
             <p class="card-precio">Precio: <b>$${producto.precio}</b></p>
             <button class="btn button agregar-carrito" data-id="${producto.id}">Añadir al carrito</button>
            </div>
          </div>
        </div>
      `;
      contenedor.appendChild(div);
    });

    this.querySelectorAll('.agregar-carrito').forEach(btn => {
      btn.addEventListener('click', e => {
        const id = parseInt(e.target.getAttribute('data-id'));
        const producto = productos.find(p => p.id === id);
        agregarAlCarrito(producto);
      });
    });
  }
}

customElements.define('tienda-component', TiendaComponent);
