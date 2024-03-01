import { ProductDetailComponent } from './components/ProductDetailComponent.js';


class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const details = JSON.parse(this.getAttribute('details'));

    this.shadowRoot.innerHTML = `
      <section class="product-details">
        <h2>Detalles del Producto</h2>
        <p>Materiales: ${details.materials.join(', ')}</p>
        <p>Tallas disponibles: ${details.sizesAvailable.join(', ')}</p>
        <p>Marca: ${details.brand}</p>
        <p>Origen: ${details.origin}</p>
      </section>
    `;
  }
}

customElements.define('product-detail-component', ProductDetailComponent);

customElements.define('app-container', AppContainer);
