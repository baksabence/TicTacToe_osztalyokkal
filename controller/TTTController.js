import Palya from "../view/Palya.js"
import TTTModell from "../modell/TTTModel.js"

//2 feladat, peldanyositja a modellt es a viewt, ill feliratkozik az esemenykezelokre
// es az esemenykezelokben fogja meghivni a szukseges metodusokat
export default class TTTController{

    constructor(){
        this.taroloELEM = $(".jatekter")
        this.tttModell = new TTTModell()
        new Palya(this.tttModell.getList(), this.taroloELEM)
        this.#esemenykezelo()
    }

    #esemenykezelo(){
        $(window).on("kattintas", (event)=>{
            console.log(event.detail)
            this.tttModell.lepteto(event.detail)
            new Palya(this.tttModell.getList(), this.taroloELEM)
        })
    }
}