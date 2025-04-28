/**
 * @returns{ Promise<Object>} Quote information
 */
const fetchQuote = async () => {
   
    const respuesta = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await respuesta.json();
    //console.log(data[0]);
    return data[0];
}

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const BrakingbadApp =  async (elemento) => {
         document.querySelector('#app-title').innerHTML = 'Breakingbad App';
         elemento.innerHTML = 'Cargando...';
       //  const aux = await fetchQuote();
       // elemento.innerHTML = 'tenemos data';
         /* construyendo  el maqueteado */
         const etiqueta = document.createElement('blockquote');
         const autorEtiqueta = document.createElement('h3');
         const botonNext = document.createElement('button');
         botonNext.innerText = 'Siguiente Quote';
          botonNext.setAttribute('style','color:white;background: #0000ff;box-shadow: 0px 3px 10px #ffffff4a;');
    //console.log(aux);
    
    const dibujaQuote = (aux) => {
        etiqueta.innerText = aux.quote;
        autorEtiqueta.innerText = aux.author;
        elemento.replaceChildren(etiqueta,autorEtiqueta,botonNext);

    }

    //fetchQuote().then(aux => dibujaQuote(aux));
    fetchQuote().then(dibujaQuote);
    botonNext.addEventListener('click', async () => {
        elemento.innerHTML = 'Cargando...';
        botonNext.setAttribute('disabled','disabled');
        await fetchQuote().then((aux) => { dibujaQuote(aux); botonNext.removeAttribute('disabled'); });
    });
    
     
}