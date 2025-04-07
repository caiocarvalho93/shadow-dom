class Cardnews extends HTMLElement{
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");
        
        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        cardRight.appendChild(newsImage);
        newsImage.src = this.getAttribute("photo") || "assets/default.jpg";
        newsImage.alt = "Foto da noticia";
     

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
            return componentRoot;
    }
    styles() {
        const style = document.createElement("style");
        style.textContent = `
            .card {
                width: 100%;
                max-width: 600px;         /* Limits card width */
                margin: 20px auto;        /* Centers the card with vertical spacing */
                border: 1px solid #ddd;   /* Light border */
                border-radius: 8px;       /* Rounded corners */
                overflow: hidden;         /* Hides any overflow */
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  /* Soft shadow */
                display: flex;            /* Flex layout for side-by-side content */
                background-color: #fff;   /* White background */
            }
    
            .card__left {
                flex: 2;                /* More space for text */
                padding: 20px;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
    
            .card__left span {
                font-size: 14px;
                color: #999;
            }
    
            .card__left a {
                margin-top: 10px;
                font-size: 22px;
                color: #333;
                text-decoration: none;
                font-weight: bold;
            }
    
            .card__left p {
                color: #666;
                margin-top: 10px;
                line-height: 1.5;
            }
    
            .card__right {
                flex: 1;                /* Less space for the image */
                display: flex;
                align-items: center;
                justify-content: center;
            }
    
            .card__right img {
                width: 100%;
                height: auto;
                object-fit: cover;      /* Ensures the image covers its container without distortion */
                display: block;
            }
        `;
        return style;
    }
    
    
}
customElements.define("card-news", Cardnews);  //cria o componente  <card-news></card-news>  no html