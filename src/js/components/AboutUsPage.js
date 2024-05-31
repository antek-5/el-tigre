import { templates } from "../settings.js";


class AboutUsPage{

    constructor(container){
        const thisAboutUsPage = this;

        thisAboutUsPage.render(container);

    }

    render(container){


        const generatedHTML = templates.aboutUsPage();

        const aboutUsPageContainer = container;

        aboutUsPageContainer.innerHTML = generatedHTML;

    }


}

export default AboutUsPage;