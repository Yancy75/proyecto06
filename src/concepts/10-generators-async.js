/**
 * 
 * @param {HTMLDivElement} element 
 */

import { heroes } from "../data/heroes";

export const generadorAsyncComponent = async (element) => {
    /*cuando igualamos la funcion la pasamos por parametro 
    la tenemos disponible y aplicamos su cualidad next*/    
    const heroeGenerador = tomaHeroGenerador();
    let cartel;
    do{
        cartel = await heroeGenerador.next();
        !cartel.done ? element.innerHTML += cartel.value+"</br>" : console.log(cartel.value);
    }while(!cartel.done)
   
}
async function* tomaHeroGenerador(){
     for(const heroe of heroes){
        /* se usa una funcion generadora para aprobechar el yield y no tener que llamar contanstemente la funcion
        esto crea un resolte al usar el await debe esperar a la promesa se cumpla por ser condicion de promesa */
         await dormir();
         yield heroe.name;
     }
     return 'No hay mas';
}

const dormir = () =>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve();
        }, 100);
    });
}
