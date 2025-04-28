import { heroes } from "../data/heroes";
/**
 * 
 * @param {HTMLDivElement} element 
 */

export const promeseComponent = (element) => {
    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371fd55e2e2a30fe1ccb2';
    /*element.innerHTML = element;
    console.log(findHero(id));*/
    const renderHero = (hero) => { element.innerHTML = hero.name; }
    const renderTwoheros = (hero1, hero2) => {
        element.innerHTML =
            `<h3>${hero1.name}</h3>
             <h3>${hero2.name}<h3>`;
    }
    const renderError = (error) => {element.innerHTML = `<h1>ERROR</h1></br><h3>${error}</h3>`;}

    let hero1;
    //! forma especial solo si las promesas son idependientes una de la otra
     const vector = [findHero(id1), findHero(id2)];
//promise.all manda y resive arrays
//modo logico .then(arregloDevalores => { renderTwoheros(arregloDevalores[0], arregloDevalores[1]) }).catch(renderError);
    Promise.all([
        findHero(id1),
        findHero(id2),
    ]).then(([hero1, hero2]) => renderTwoheros(hero1, hero2)).catch(renderError);/* simplificado */

        
      //  Promise.all(vector).then(([hero1, hero2]) => renderTwoheros(hero1, hero2)).catch(renderError);/* simplificado */
    /* este es el modo correcto */
   //findHero(id1).then(pacotilla => renderHero(pacotilla));
    /* esto solo silve si mando un unico algumento puedo saltarme la variable y mandarla de forma anonima ejemplo siguiente */
    /* anidados de promesas  */
    //! forma 1
   /* findHero(id1).then(
        hero1 => {
            findHero(id2).then(hero2 => {
                renderTwoheros(hero1, hero2);
            }).catch(renderError);
        }).catch(renderError);*/
    //!forma 2
    /* otra forma de hacer el anidado de promesas, los then se pueden super poner por ser varias promesas*/
 /*    findHero(id1).then(hero => {
        hero1 = hero; 
        return findHero(id2);
    }).then(hero2 => {
        renderTwoheros(hero1, hero2);   
    }
    ).catch(renderError);*/

}
/**
 * 
 * @param {string} id 
 * @returns {Promise}
 */
const findHero = (id) => {
   /* modo optimizado */
    return new Promise((resolve, reject) => {
        const hero = heroes.find(hero => hero.id === id);
        if (hero) {resolve(hero);return;}
        reject(`heroe con la id ${id} no encontrado`);
    });
   
    //const hero = heroes.find(hero => hero.id === id);
}