export default class TTTModell{
    #LISTA = ["","","","","","","","",""]
    #lepes
    #aktElem
    constructor(){
        this.#lepes = 0;

        this.#setAktElem()
    }

    #setAktElem(){
        if(this.#lepes % 2 === 0){
            this.#aktElem = "X"
        }else{
            this.#aktElem = "O"
        }
    }

    getAktElem(){
        return this.#aktElem;
    }

    getList(){
        return this.#LISTA
    }

    lepteto(index){
        this.#LISTA[index] = this.#aktElem
        this.#lepes++;
        this.#setAktElem()
    }


}