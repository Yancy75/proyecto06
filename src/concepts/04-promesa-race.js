/**
 * 
 * @param {HTMLDivElement} element 
 */

export const promiseRace = (element) => {
    //console.log(element);
    element.innerHTML = 'Cargando...';
    const renderValue = (value) => {
        element.innerHTML = value;
    }

    /* trae la primera promesa que se resuelve */
    Promise.race([
        lentaPromesa(),
        mediaPromesa(),
        rapidaPromesa(),
    ]).then(renderValue);
   
}

const lentaPromesa = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promesa lenta');
    }, 2500)
    
});

const mediaPromesa = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promesa media');
    }, 1500)
    
});

const rapidaPromesa = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promesa rapida');
    }, 1000)
    
});