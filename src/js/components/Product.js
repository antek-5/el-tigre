
import { templates, select } from "../settings.js";

class Product {

    constructor(productData) {
        const thisProduct = this;

        thisProduct.data = productData;

        thisProduct.render();

    }

    render(){

        const thisProduct = this;

        const generatedHTML = templates.product(thisProduct.data);

        const container = document.querySelector(select.containerOf.products);

        container.innerHTML += generatedHTML;


    }

}

export default Product;