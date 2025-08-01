class ImageCarousel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.currentIndex = 1;

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: flex;
          justify-content: center;
          width: 100%;
          margin: 1rem 0;
          box-sizing: border-box;
          user-select: none;
        }

        .carousel-container {
          position: relative;
          width: 100%;
          max-width: 600px;
          aspect-ratio: 3 / 2;
          overflow: hidden;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0,0,0,0.3);
          background: #000;
        }

        .carousel-slide {
          display: flex;
          height: 100%;
          transition: transform 0.5s ease;
        }

        ::slotted(img) {
          display: none;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          flex-shrink: 0;
          pointer-events: none;
          user-select: none;
        }

        button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(255,255,255,0.7);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          cursor: pointer;
          font-size: 24px;
          color: #333;
          user-select: none;
          transition: background-color 0.3s;
          z-index: 10;
        }

        button:hover {
          background-color: rgba(255,255,255,0.9);
        }

        button:focus {
          outline: none;
        }

        .prev {
          left: 10px;
        }

        .next {
          right: 10px;
        }
      </style>

      <div class="carousel-container">
        <div class="carousel-slide"></div>
        <button class="prev" aria-label="Previous">&#10094;</button>
        <button class="next" aria-label="Next">&#10095;</button>
        <slot></slot>
      </div>
    `;
  }

  connectedCallback() {
    this.originalImages = Array.from(this.querySelectorAll('img'));
    if (this.originalImages.length === 0) {
      this.originalImages = [
        this.createImg('https://picsum.photos/id/1015/600/400'),
        this.createImg('https://picsum.photos/id/1016/600/400'),
        this.createImg('https://picsum.photos/id/1018/600/400'),
        this.createImg('https://picsum.photos/id/1020/600/400'),
      ];
    }

    this.slideContainer = this.shadowRoot.querySelector('.carousel-slide');
    this.prevBtn = this.shadowRoot.querySelector('.prev');
    this.nextBtn = this.shadowRoot.querySelector('.next');

    this.renderImages();
    this.update(false);

    this.slideContainer.addEventListener('transitionend', () => {
      if (this.currentIndex === this.originalImages.length + 1) {
        this.currentIndex = 1;
        this.update(false);
      }
      if (this.currentIndex === 0) {
        this.currentIndex = this.originalImages.length;
        this.update(false);
      }
    });

    this.prevBtn.addEventListener('click', () => this.prevImage());
    this.nextBtn.addEventListener('click', () => this.nextImage());

    // Listener para cambios de tamaño
    window.addEventListener('resize', () => this.update(false));
  }

  createImg(src) {
    const img = document.createElement('img');
    img.src = src;
    return img;
  }

  renderImages() {
    this.slideContainer.innerHTML = '';

    const cloneLast = this.originalImages[this.originalImages.length - 1].cloneNode();
    this.slideContainer.appendChild(cloneLast);

    this.originalImages.forEach(img => {
      this.slideContainer.appendChild(img.cloneNode());
    });

    const cloneFirst = this.originalImages[0].cloneNode();
    this.slideContainer.appendChild(cloneFirst);
  }

  update(animate = true) {
    const containerWidth = this.shadowRoot.querySelector('.carousel-container').clientWidth;

    if (animate) {
      this.slideContainer.style.transition = 'transform 0.5s ease';
    } else {
      this.slideContainer.style.transition = 'none';
    }

    const offset = -this.currentIndex * containerWidth;
    this.slideContainer.style.transform = `translateX(${offset}px)`;
  }

  prevImage() {
    if (this.currentIndex <= 0) return;
    this.currentIndex--;
    this.update();
  }

  nextImage() {
    if (this.currentIndex >= this.originalImages.length + 1) return;
    this.currentIndex++;
    this.update();
  }
}

customElements.define('image-carousel', ImageCarousel);
