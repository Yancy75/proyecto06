import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { BrakingbadApp } from './breakingbad/breaking-bad-app.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
       <img src="${viteLogo}" class="logo" alt="Vite logo"/>
    </a>
    <a href="#" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="Javascript logo">
    </a>
    <h1 id="app-title">http app</h1>
    <div class="card">
     

    </div>
 </div>`;
const elemento = document.querySelector('.card');
BrakingbadApp(elemento);
//setupCounter(document.querySelector('#counter'))
