import Palya from "./view/Palya.js"

const taroloELEM = $(".jatekter")
const LISTA = ["","","","","","","","",""]
let lepes = 0;

new Palya(LISTA, taroloELEM)

$(window).on("kattintas", (event)=>{
    console.log(event.detail)
    if (lepes % 2 == 0) {
        LISTA[event.detail]="X"    
    }else{
        LISTA[event.detail]="O"
    }
    lepes++;
    console.log(LISTA)
    new Palya(LISTA, taroloELEM)
})