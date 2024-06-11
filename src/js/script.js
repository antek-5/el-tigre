import { settings, select } from './settings.js'
import ProductsPage from './components/ProductsPage.js';
import AboutUsPage from './components/AboutUsPage.js';
import ContactUsPage from './components/ContactUsPage.js';


/* Page App */


const pageApp = {

    initPages: function() {
        const thisPageApp = this;

        thisPageApp.pages = document.querySelector(select.containerOf.pages).children;
        //console.log('thisPageApp.pages', thisPageApp.pages);

        thisPageApp.navLinks = document.querySelectorAll(select.nav.links);
        //console.log('thisPageApp.navLinks', thisPageApp.navLinks);

        const idFromHash = window.location.hash.replace('#/', '');
        //console.log('idFromHash', idFromHash);

        let pageMatchingHash = thisPageApp.pages[0].id;
        //console.log('pageMatchingHash', pageMatchingHash);

        if(idFromHash == 'home' || idFromHash == ''){
            thisPageApp.activatePage('home');
            //console.log('done');
        } else {
            for(let page of thisPageApp.pages){
                if(page.id == idFromHash){
                    pageMatchingHash = page.id;
                    thisPageApp.activatePage(pageMatchingHash);
                    
                    break;
                }
                
            }
        }
        

        

        for(let link of thisPageApp.navLinks){
            link.addEventListener('click', function(event){
            const clickedElement = this;
            event.preventDefault();
    
            /* get page id from href attribute */
            const id = clickedElement.getAttribute('href').replace('#', '');
    
            /* run thisApp.activatePage with that id */
    
            //console.log('id', id);
            thisPageApp.activatePage(id);
    
    
            /* change URL hash */
            window.location.hash = '#/' + id;
      
            });
      
          }



    },

    activatePage: function(pageId){
        const thisPageApp = this;


    
        /* add class active to maching pages, remove from non matching */
        for(let page of thisPageApp.pages){

            
            page.classList.toggle('active', page.id == pageId);
            
    
        }
    
        /* add class active to maching links, remove from non matching */
    
        for(let link of thisPageApp.navLinks){
          link.classList.toggle('active', link.getAttribute('href') == '#' + pageId);
        }

        if(pageId == 'home') {
            for(let page of thisPageApp.pages){
                page.classList.remove('active');
                if(page.id == 'products' || page.id == 'about-us'){
                    page.classList.add('active');
                }
            }
            
        }
        
        
    
    
    
    },

    initData: function() {
        const thisPageApp = this;
        
        const url = settings.db.url + '/' + settings.db.products;
        this.data = {};

        fetch(url)
            .then((rawResponse) => {
                return rawResponse.json();
            })
            .then((parsedResponse) => {
                this.data.products = parsedResponse;
                //console.log('parsedResponse', parsedResponse);
                thisPageApp.data = {
                    products: parsedResponse
                }
                thisPageApp.initProductsPage();
            });

        // rest of init..
        setTimeout(() => {

            //console.log('thisPageApp.data.products', thisPageApp.data.products)
            
            thisPageApp.initAboutUsPage();
            thisPageApp.initContactUsPage();

            pageApp.initPages();

        }, 20);
        
        

        //

    },

    init: function() {
    const thisPageApp = this;

    thisPageApp.initData();

    

    },

    initProductsPage: function() {
        const thisPageApp = this;

        //console.log('thisPageApp.data.products', thisPageApp.data.products);
        const productsData = thisPageApp.data.products;
        //console.log('productsData', productsData);

        const productsPageContainer = document.querySelector('.products-page-container');
        new ProductsPage(productsPageContainer, productsData);
    },

    initAboutUsPage: function() {
      const aboutUsPageContainer = document.querySelector('.about-us-container');
      new AboutUsPage(aboutUsPageContainer);
    },

    initContactUsPage() {
      const contactUsPageContainer = document.querySelector('.contact-us-container');
      new ContactUsPage(contactUsPageContainer);
    },





}


pageApp.init();