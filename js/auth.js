// auth.js
class AuthComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <form id="login-form">
        <input type="email" id="correo" placeholder="Correo" required />
        <button type="submit">Iniciar sesión</button>
      </form>
    `;

    this.querySelector('#login-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const correo = this.querySelector('#correo').value;
      const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

      const usuario = usuarios.find(u => u.correo === correo);
      if (usuario) {
        localStorage.setItem('usuarioActual', JSON.stringify(usuario));
        alert(`Bienvenido ${usuario.rol}`);
        window.location.href = 'tienda.html';
      } else {
        alert('Usuario no encontrado');
      }
    });
  }
}

customElements.define('auth-component', AuthComponent);
