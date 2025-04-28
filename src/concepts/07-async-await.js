/**
 * 
 * @param {HTMLDivElement} element 
 */

export const asyncAwait2Component =  async (element) => {
    
    console.time('inicio');
    /* llamado especial como las promesas son independientes se usa otro metodo */
    /*const valor = await lentaPromesa();
    const valor1 = await mediaPromesa();
    const valor2 = await rapidaPromesa();*/
    /* los valores los tomo asi porque los estoy destructurando y la velocidad la da la promesa mas lenta porque todas entran en simultaneo */
   try {
       const [valor, valor1, valor2, valor3, valor4] = await Promise.all([
           lentaPromesa(),
           mediaPromesa(),
           rapidaPromesa(),
           superrapidaPromesa(),
           ultrarapidaPromesa(),
       ]);
       element.innerHTML = `
          valor: ${valor} </br>
          valor1: ${valor1} </br>
          valor2: ${valor2} </br>
           valor1: ${valor3} </br>
          valor2: ${valor4} </br>
    `;
   } catch (error) {
        element.innerHTML = error;
   }
    
   console.timeEnd('inicio');
}

const lentaPromesa = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promesa lenta');
    }, 1700)

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

const superrapidaPromesa = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promesa Super rapida');
    }, 500)

});
const ultrarapidaPromesa = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promesa ultra rapida');
    }, 100)

});