import TTTModell from "./modell/TTTModel.js"
import Palya from "./view/Palya.js"

const taroloELEM = $(".jatekter")

const tttModell = new TTTModell()

new Palya(tttModell.getList(), taroloELEM)

$(window).on("kattintas", (event)=>{
    console.log(event.detail)
    tttModell.lepteto(event.detail)
    new Palya(tttModell.getList(), taroloELEM)
})