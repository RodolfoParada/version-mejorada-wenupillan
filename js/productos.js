// productos.js
const productos = [
  { id: 1, nombre: 'Machi Pale Ale 5.2', precio: 12000, imagen: '/assets/productos/cerveza-machi.jpg', texto: 'Precio exclusivo por pack de 4 unidades' },
  { id: 2, nombre: 'Toki Irish Red Ale 6.5', precio: 12000,  imagen: '/assets/productos/cerveza-machi.jpg', texto: 'Precio exclusivo por pack de 4 unidades' },
  { id: 3, nombre: 'Weichafe IPA 7.2', precio: 12000,  imagen: '/assets/productos/cerveza-lonko.jpg', texto: 'Precio exclusivo por pack de 4 unidades' },
  { id: 4, nombre: 'Lonko Porter 8.0', precio: 12000,  imagen: '/assets/productos/cerveza-lonko.jpg', texto: 'Precio exclusivo por pack de 4 unidades' }
];

// Guardar productos en localStorage si aún no existen

  localStorage.setItem('productos', JSON.stringify(productos));

// Simular usuarios
const usuarios = [
  { correo: 'admin@tienda.cl', rol: 'admin' },
  { correo: 'editor@tienda.cl', rol: 'editor' },
  { correo: 'cliente@tienda.cl', rol: 'cliente' }
];

if (!localStorage.getItem('usuarios')) {
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
}
