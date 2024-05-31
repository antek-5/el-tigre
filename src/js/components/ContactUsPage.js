import { templates, settings } from "../settings.js";


class ContactUsPage{

    constructor(container){
        
        const thisContactUsPage = this;

        thisContactUsPage.render(container);


        thisContactUsPage.dom = {};

        thisContactUsPage.dom.wrapper = document.querySelector('.contact-us-container');
        thisContactUsPage.dom.form = thisContactUsPage.dom.wrapper.querySelector("form");

        thisContactUsPage.dom.form.addEventListener('submit', function(event){
            event.preventDefault();

            thisContactUsPage.dom.name = thisContactUsPage.dom.wrapper.querySelector(".name").value;
        thisContactUsPage.dom.title = thisContactUsPage.dom.wrapper.querySelector(".title").value;
        thisContactUsPage.dom.message = thisContactUsPage.dom.wrapper.querySelector(".message").value;

            console.log('sendOrder method');
            thisContactUsPage.sendOrder();
        });

    }

    render(container){

        const generatedHTML = templates.contactUsPage();

        const contactUsPageContainer = container;

        contactUsPageContainer.innerHTML = generatedHTML;

    }

    sendOrder(){
        const thisContactUsPage = this;

        const url = settings.db.url + '/' + settings.db.contactUs;

        let payload = {
            name: thisContactUsPage.dom.name,
            title: thisContactUsPage.dom.title,
            message: thisContactUsPage.dom.message
        };

        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          };
          
          fetch(url, options);
      
          console.log('payload: ', payload);



    }


}

export default ContactUsPage;