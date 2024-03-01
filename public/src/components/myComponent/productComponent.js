class   ProductComponent extends HTMLElement {
    constructor(){
        super();
        this. attachShadow({mode: 'open'});

    }

    connectedCallback(){
        const title = this.getAttribute('title');
        const description = this.getAttribute('description');
        const value = this.getAttribute('value');
        const sizes = this.getAttribute('sizes');
        const image = this.getAttribute('image');

        this.shadowRoot.innerHTML = `
        <section>
        <h2>${title}</h2>
        <p>${description}</p>
        <p>${value}</p>
        <p>${sizes}</p>
        <img src="${image}" alt="${title}" width="200">
        <button class="moreDetails"> Más detalles </button>
        </section>
        `;

        this.shadowRoot.querySelector(".moreDetails").addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('showDetails', { detail: product.details }));
        });
    }
}

customElements.define('product-component', ProductComponent);
export default ProductComponent;