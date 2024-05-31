import { templates } from "../settings.js";
import Product from "./Product.js";

class ProductsPage{

    constructor(container, productsData){

        const thisProductsPage = this;

        thisProductsPage.render(container);

        thisProductsPage.renderProducts(productsData);

    }

    render(container){

        const generatedHTML = templates.productsPage();

        const productsPageContainer = container;

        productsPageContainer.innerHTML = generatedHTML;

    }

    renderProducts(productsData){

        console.log('productsData', productsData);

        for(let product of productsData) {

            //console.log('product', product);
            new Product(product);

        }

        

    }


}

export default ProductsPage;