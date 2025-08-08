class WhatsAppChat extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
 <style>
        .chat-container {
          position: fixed;       /* Fija el chat en pantalla */
          bottom: 20px;          /* Separado del borde inferior */
          right: 20px;           /* Separado del borde derecho */
          z-index: 9999;         /* Asegura que quede sobre el contenido */
  
          width: 100%;
          max-width: 320px;
          height: 400px;
          border: 1px solid #ccc;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          font-family: Arial, sans-serif;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          overflow: hidden;
          transition: height 0.3s ease;
          background: white;     /* Para evitar transparencia */
        }

        .header {
         background-color: #075E54;
         color: white;
         padding: 10px;
         text-align: center;
         font-weight: bold;
         position: relative;
         display: flex;
         justify-content: center;
         align-items: center;
        }
        .title {
         flex: 1;
         cursor: pointer;
         user-select: none;
        }

        .close-btn {
         position: absolute;
         right: 10px;
         top: 5px;
         font-size: 18px;
         cursor: pointer;
         color: white;
        }

        .messages {
          flex: 1;
          padding: 10px;
          overflow-y: auto;
          background-color: #e5ddd5;
        }

        .input-container {
          display: flex;
          border-top: 1px solid #ccc;
          background: #f0f0f0;
        }

        input {
          flex: 1;
          padding: 10px;
          border: none;
          font-size: 14px;
          outline: none;
        }

        button {
          padding: 10px 16px;
          border: none;
          background: #25D366;
          color: white;
          cursor: pointer;
          font-weight: bold;
        }

        .user, .bot {
          margin: 8px 0;
          max-width: 80%;
          padding: 8px 12px;
          border-radius: 10px;
          clear: both;
          word-wrap: break-word;
        }

        .user {
          background: #dcf8c6;
          align-self: flex-end;
          margin-left: auto;
        }

        .bot {
          background: white;
          align-self: flex-start;
          margin-right: auto;
        }
      </style>

        <div class="chat-container">
        <div class="header">
          <span class="title" id="title">WhatsApp Simulado</span>
          <span class="close-btn" id="closeBtn">✕</span>
        </div>
        
        <div class="messages" id="messages"></div>
         <div class="input-container">
           <input type="text" id="input" placeholder="Escribe un mensaje...">
           <button id="send">Enviar</button>
         </div>
        </div>
    `;


     // Elementos clave
    this.container = this.shadowRoot.querySelector('.chat-container');
    this.header = this.shadowRoot.querySelector('.header');
    this.title = this.shadowRoot.querySelector('.title');
    this.titleSpan = this.shadowRoot.getElementById('title');
    this.closeBtn = this.shadowRoot.getElementById('closeBtn');
    this.messagesDiv = this.shadowRoot.getElementById('messages');
    this.input = this.shadowRoot.getElementById('input');
    this.sendButton = this.shadowRoot.getElementById('send');
    this.inputContainer = this.shadowRoot.querySelector('.input-container');

    // Estado del chat (expandido o no)
    this.minimized = false;

    // Eventos
    this.sendButton.addEventListener('click', () => this.handleSend());
    this.input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.handleSend();
    });

    // Cerrar (minimizar)
    this.closeBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // evitar que se dispare el click del header
      this.minimizeChat();
    });

    // Hacer clic en el header para expandir
    this.header.addEventListener('click', () => {
      if (this.minimized) {
        this.expandChat();
      }
    });

   // Minimizar
this.closeBtn.addEventListener('click', () => {
  this.container.style.height = '40px';
  this.messagesDiv.style.display = 'none';
  this.inputContainer.style.display = 'none';
  this.titleSpan.textContent = 'WhatsApp Simulado';
  this.minimized = true;
});

// Expandir al hacer clic solo en el título (no todo el header)
this.titleSpan.addEventListener('click', () => {
  if (this.minimized) {
    this.container.style.height = '400px';
    this.messagesDiv.style.display = 'block';
    this.inputContainer.style.display = 'flex';
    this.titleSpan.textContent = 'WhatsApp Simulado';
    this.minimized = false;
  }
});

  }

  minimizeChat() {
    this.container.style.height = '40px';
    this.messagesDiv.style.display = 'none';
    this.inputContainer.style.display = 'none';
    this.title.textContent = 'WhatsApp Simulado (haz clic para abrir)';
    this.minimized = true;
  }

  expandChat() {
    this.container.style.height = '400px';
    this.messagesDiv.style.display = 'block';
    this.inputContainer.style.display = 'flex';
    this.title.textContent = 'WhatsApp Simulado';
    this.minimized = false;
  }

  handleSend() {
    const text = this.input.value.trim();
    if (!text) return;
    this.addMessage('user', text);
    this.input.value = '';

    setTimeout(() => {
      const response = this.getBotResponse(text.toLowerCase());
      this.addMessage('bot', response);
    }, 500);
  }


  addMessage(sender, text) {
    const msg = document.createElement('div');
    msg.className = sender;
    msg.textContent = text;
    this.messagesDiv.appendChild(msg);
     this.messagesDiv.scrollTo({ top: this.messagesDiv.scrollHeight, behavior: 'smooth' });
  }

  getBotResponse(message) {
     const cleaned = message.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const respuestas = {
      "hola": "¡Hola! ¿Cómo puedo ayudarte?",
      "Hola": "¡Hola! ¿Cómo puedo ayudarte?",
      "Cuál es el precio": "Los precios son iguales para todos los productos.",
      "Cual es el precio": "Los precios son iguales para todos los productos.",
      "cual es el precio": "Los precios son iguales para todos los productos.",
      "Cuánto cuestan las cervezas": "Los precios son iguales para todos los productos.",
      "Cuanto cuestan las cervezas": "Los precios son iguales para todos los productos.",
      "cuánto cuestan las cervezas": "Los precios son iguales para todos los productos.",
      "cuanto cuestan las cervezas": "Los precios son iguales para todos los productos.",
      "envío": "Realizamos envíos a todo el país.",
      "envíos": "Realizamos envíos a todo el país.",
      "los envío": "Realizamos envíos a todo el país.",
      "los envíos": "Realizamos envíos a todo el país.",
      "Los envío": "Realizamos envíos a todo el país.",
      "Los envíos": "Realizamos envíos a todo el país.",
      "Hacen envíos": "Realizamos envíos a todo el país.",
      "hacen envíos": "Realizamos envíos a todo el país.",
      "Hacen envios": "Realizamos envíos a todo el país.",
      "hacen envios": "Realizamos envíos a todo el país.",
      "adiós": "¡Hasta pronto!",
      "gracias": "¡De nada!",
      "quién eres": "Soy un asistente automático.",
      "quien eres": "Soy un asistente automático.",
      "Quién eres": "Soy un asistente automático.",
      "Quien eres": "Soy un asistente automático.",
      "Cuál es su horario de atención": "De lunas a viernes de 9:00 a 18:hrs",
      "cuál es su horario de atención": "De lunas a viernes de 9:00 a 18:hrs",
      "Cual es su horario de atencion": "De lunas a viernes de 9:00 a 18:hrs",
      "Cual es su horario de atencion": "De lunas a viernes de 9:00 a 18:hrs",
      "En que horario atienden": "De lunas a viernes de 9:00 a 18:hrs",
      "en que horario atienden": "De lunas a viernes de 9:00 a 18:hrs",
      
    };
    return respuestas[message] || "Lo siento, no entendí tu mensaje.";

}
}

customElements.define('whatsapp-chat', WhatsAppChat);
