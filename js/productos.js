// productos.js
const productos = [
  { id: 1, nombre: 'Machi Pale Ale 5.2', precio: 12000, imagen: '/assets/productos/cerveza-machi.jpg', texto: 'Precio exclusivo por pack de 4 unidades', info:'Machi es una cerveza de estilo Pale Ale de color dorada. Aroma a frutas maduras y un sutil toque de lúpulo. Sabor maltoso de bajo amargor que finaliza con el dulzor propio de la malta. Sin aditivos, ni preservantes. Sin Filtrar. ' },
  { id: 2, nombre: 'Toki Irish Red Ale 6.5', precio: 12000,  imagen: '/assets/productos/cerveza-toki.jpg', texto: 'Precio exclusivo por pack de 4 unidades', info:'Toqui es una cerveza de estilo Irish Red Ale de color cobrizo con aroma a maltas caramelo, maltas tostadas y lúpulo. Sabor herbal de cuerpo medio bajo y un toque de amargor moderado. Sin aditivos, ni preservantes. Sin Filtrar.' },
  { id: 3, nombre: 'Weichafe IPA 7.2', precio: 12000,  imagen: '/assets/productos/cerveza-weichafe.jpg', texto: 'Precio exclusivo por pack de 4 unidades',info:'Weichafe es una cerveza IPA (Indian Pale Ale) de color oro. Aroma a maltas y lúpulo. Sabor fuertemente lupulado y equilibrado con malta. Sin aditivos, ni preservantes. Sin Filtrar.' },
  { id: 4, nombre: 'Lonko Porter 8.0', precio: 12000,  imagen: '/assets/productos/cerveza-lonko.jpg', texto: 'Precio exclusivo por pack de 4 unidades', info:'Lonko es una cerveza de estilo Porter de un color marrón oscuro intenso. Aromas a chocolate, café y maltas. Sabor chocolate y malta para terminar con un toque de lúpulo y café. Sin aditivos, ni preservantes. Sin Filtrar.' }
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
