export default class Mezo{
    #index
    #jel
    #szuloElem

    constructor(jel, index, szuloElem){
        this.#jel = jel
        this.#index = index
        this.#szuloElem = szuloElem
        this.megjelenit()
        // letrehozzuk a gomb elemet
        this.gombElem = $(".card:last-child")
        // csak ures mezore hivja meg az esemenyt
        if (this.#jel === "") {
            this.gombkattint()   
        }
    }

    //tagfuggveny
    megjelenit(){
        let txt = `<div class="card col-lg-4"> <p>${this.#jel} </p></div>`
        this.#szuloElem.append(txt)
    }

    gombkattint(){
        this.gombElem.on("click", () => {
            const e = new CustomEvent("kattintas", {detail: this.#index})
            window.dispatchEvent(e)
        })
    }
}