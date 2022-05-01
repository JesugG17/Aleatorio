
import { initArray } from './initArray';
import '../css/components.css';

const botonGenerar  = document.querySelector(".btn-primary");
const botonResetear = document.querySelector(".btn-danger");

const h3Nombres = document.querySelector(".nombre");


let arrayNombres = [];

export const initProgram = () => {
    arrayNombres = initArray();
}


botonGenerar.addEventListener('click', () => {

    
    if ( arrayNombres.length != 0 ) {
        const numeroAleatorio = Math.trunc( Math.random() * arrayNombres.length );
        const nombreObtenido  = arrayNombres[ numeroAleatorio ];

        h3Nombres.textContent = "Nombre: " + nombreObtenido;

        arrayNombres = arrayNombres.filter( nombre => nombre !== nombreObtenido );
        console.log( arrayNombres );
    } else {
        alert("Ya no hay mas nombres");
    }
});

botonResetear.addEventListener('click', () => {
    initProgram();

    h3Nombres.textContent = "Nombre: "

})