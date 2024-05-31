

export const settings = {
    db: {
        url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
        products: 'products',
        contactUs: 'contactUs',

    }

}

export const select = {
    containerOf: {
        pages: '#pages',
        products: '.products-page-inner .box'
    },

    nav: {
        links: 'header a',
    }
}

export const templates = {
    productsPage: Handlebars.compile(document.querySelector('[id="template-product-page"]').innerHTML),
    contactUsPage: Handlebars.compile(document.querySelector('[id="template-contact-us-page"]').innerHTML),
    aboutUsPage: Handlebars.compile(document.querySelector('[id="template-about-us-page"]').innerHTML),

    product: Handlebars.compile(document.querySelector('[id="template-single-product"]').innerHTML),
}