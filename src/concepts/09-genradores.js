/**
 * 
 * @param {HTMLDivElement} element 
 */

export const generadorFuncionesComponent = (element) => {
    
    /*const myPrimer = miPrimeraFuncionGeneradora();
    console.log(myPrimer.next());
    console.log(myPrimer.next());
    console.log(myPrimer.next());
    console.log(myPrimer.next());
    console.log(myPrimer.next());
    console.log(myPrimer.next());*/
   
    //const genId = idGenerador();
    const genId = miPrimeraFuncionGeneradora();

    const boton= document.createElement('button');
    boton.innerHTML = 'Click me';
    element.append(boton);

    const botonValue = () =>{
        /* se usa value por la forma del objeto*/
      const { value } = genId.next();
      boton.innerHTML = `Click me ${value}`;
    }
    
    boton.addEventListener('click', botonValue);
}

function* idGenerador(){
    let currentId = 0;
    while(true){
        yield ++currentId;
    }
}

function* miPrimeraFuncionGeneradora(){
    yield 'Primer valor';
    yield 'segundo valor';
    yield 'tercer valor';
    yield 'cuarto valor';
    return 'no hay valores';
}