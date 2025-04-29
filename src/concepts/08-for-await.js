import { heroes } from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async (element) => {
   // console.log('forAwaitComponent');
    //const id = '5d86371f9f80b591f499df3dsad2';
   // const heroe = await getHeroAsync(id);
   /* prueba simple para usar el await en un if */
   /* if(await getHeroAsync(id)){
        element.innerHTML = "existe el heroe";
        return;
    }
    element.innerHTML = 'No existe ese heroe';*/
    /* para obtener un arreglo especifico de otro arreglo usamos map */
    const heroesId = heroes.map(valor => valor.id);
    
    const herosPromesas = getHeroesAsync(heroesId);
    console.time('tiempo');
    for await(const heroe of herosPromesas){
        await new Promise((resolve) => {
            setTimeout(() => resolve(), 300)
        });
        element.innerHTML += `${heroe.name} </br>`;
        
    }
    console.timeEnd('tiempo');
}

/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */
const getHeroesAsync = (heroIds) => {

    const heroPromises = [];

    heroIds.forEach(id => {
        heroPromises.push(getHeroAsync(id));
    });

    return heroPromises;
}

const getHeroAsync = async (id) => {

    /*await new Promise((resolve) => {
        setTimeout(() => resolve(), 1000)
    });*/

    return heroes.find(hero => hero.id === id);
}