/**
 * 
 * @param {HTMLDivElement} element 
 */

export const environmentsComponent = (element) =>{
 console.log(import.meta.env);
    const html = `
        Modo Desarrollo DEV: ${import.meta.env.DEV} </br>
        Prod: ${import.meta.env.PROD} </br>
        key: ${import.meta.env.VITE_API_KEY}</br>
        URL: ${import.meta.env.VITE_BASE_URL}</br>
         `;
        element.innerHTML = html;
}