// productos.js
const productos = [
  { id: 1, nombre: 'Machi Pale Ale 5.2', precio: 12000, imagen: '/assets/productos/cerveza-machi.jpg', texto: 'Precio exclusivo por pack de 4 unidades', info:'Machi es una cerveza de estilo Pale Ale de color dorada con aroma a frutas maduras y ligero lúpulo. Sabor maltoso, bajo amargor y final dulce.' },
  { id: 2, nombre: 'Toki Irish Red Ale 6.5', precio: 12000,  imagen: '/assets/productos/cerveza-toki.jpg', texto: 'Precio exclusivo por pack de 4 unidades', info:'Toqui es una cerveza de estilo Irish Red Ale de color cobrizo con aroma a maltas caramelo, maltas tostadas y lúpulo. Sabor herbal y amargor moderado.' },
  { id: 3, nombre: 'Weichafe IPA 7.2', precio: 12000,  imagen: '/assets/productos/cerveza-weichafe.jpg', texto: 'Precio exclusivo por pack de 4 unidades',info:'Weichafe es una cerveza IPA (Indian Pale Ale) de color oro. Aroma a maltas y lúpulo. Sabor fuertemente lupulado y equilibrado con malta.' },
  { id: 4, nombre: 'Lonko Porter 8.0', precio: 12000,  imagen: '/assets/productos/cerveza-lonko.jpg', texto: 'Precio exclusivo por pack de 4 unidades', info:'Lonko, cerveza Porter marrón oscuro, con aromas a chocolate, café y malta; sabor a chocolate y malta,con toques de lúpulo y café.' }
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
