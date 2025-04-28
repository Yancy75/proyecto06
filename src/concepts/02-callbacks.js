import { heroes } from "../data/heroes";
/**
 * 
 * @param {HTMLDivElement} element 
 */

export const callbacksComponent = (element) => {
    console.log('callbacksComponent');
    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371fd55e2e2a30fe1ccb2';
    encontraHeroe(id2, (error, heroe)=>{
        /* al poner un signo de interrogacion preguntamos si la propiedad existe */
        /* si le agrego el or el hace una evaluacion */
             //  element.innerHTML = heroe?.name || 'no hay Heroe';
        if(error){
            element.innerHTML=error;
            return;
        }
            let constructo = `<h2> ${heroe.name}</h2><img src="${heroe.picture}" width="200" /> `;
            element.innerHTML = constructo;//heroe.name+" "+heroe.picture;
    });
   
}

/**
 * 
 * @param {string} id 
 * @param {(error: String| null, hero: Object)=> void} callback 
 */
const encontraHeroe = (id,callback) =>{
     const hero = heroes.find(hero => hero.id === id );
    if(!hero){
        callback(`Heroe id: ${id}  no encontrado. `);
        return; //no encontrado
    }
     callback(null, hero);
}