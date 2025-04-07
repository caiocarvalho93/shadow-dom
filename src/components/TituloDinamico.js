class TituloDinamico extends HTMLElement{
    constructor() {
        super();

        const shadown = this.attachShadow({mode: "open"});

        //base do componente 
        const componentRoot = document.createElement('h1');
        componentRoot.textContent = 'Felipe';

        //estilizar o component 
        const style = document.createElement("style");
        style.textContent = `
            h1{
                color: red;
            }
        `;   

        //enviar para o shadow
        shadown.appendChild(componentRoot);
        shadown.appendChild(style);

    }
}

customElements.define('titulo-dinamico', TituloDinamico);