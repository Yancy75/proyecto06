/**
 * 
 * @param {HTMLDivElement} element 
 */

import { heroes } from "../data/heroes";

export const asyncawaitComponent = async (element) => {
    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371f25a058e5b1c8a65e';
   
    
    element.innerHTML = 'Cargando....';
    
   try {
       const heroe1 = await encuentraHeroe(id2);
       const heroe = await encuentraHeroe(id1);
      
     /*  setTimeout(() => {
          //const heroe =  encuentraHeroe(id1);
          heroes.forEach(hero =>{
            let heroe = encuentraHeroe(hero.id);
            heroe.then((hero) =>{ element.innerHTML= `${hero.name} </br> `;  });
          })
          //heroe.then((hero) =>{ element.innerHTML= `${hero.name} </br> `;  });
          //element.innerHTML = `${heroe} `; 
       }, 500);*/
       element.innerHTML = `${heroe.name} / ${heroe1.name}`
      
    } catch (error) {
       element.innerHTML =error;
    }
    
}

const encuentraHeroe = async(id) =>{
       const hero = heroes.find(hero=> hero.id === id);
         if(!hero) throw 'heroe no encontrado';
       return hero;
}