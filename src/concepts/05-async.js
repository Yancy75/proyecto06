/**
 * 
 * @param {HTMLDivElement} element 
 */

import { heroes } from "../data/heroes"

export const asyncComponent = (element) => {
    const id1 ='5d86371f1efebc31def272e2';
   
    const renderHero = (grupo = [], accion)=>{
        switch(accion){
         case 1:console.log(grupo);grupo.forEach(hero =>{element.innerHTML = hero.name;});
                break;
         case 2:grupo.forEach(error =>{
                      element.innerHTML = `<h1>Error</h1><h3>id:
                      ${id1}</h3><p>a regresado ${error}</p>`;
                     });
                break;
         }
    }

   encontrarHeroe(id1)
   .then(heroe=> renderHero([heroe],1))
   .catch(error=> renderHero([error],2));

}
/**
 * 
 * @param {string} id 
 * 
 */
/* el async regresa lo que sea la funcion como una promesa de javascritp */
const encontrarHeroe = async (id) =>{
       const heroe = heroes.find(heroe => heroe.id === id);
        return heroe;
}