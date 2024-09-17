export default class TTTModell{
    #LISTA = ["","","","","","","","",""]
    #lepes
    #aktElem
    constructor(){
        this.#lepes = 0;

        this.#setAktElem()
    }

    //előállítja (a kovetkezo allapotot) a program aktuális állapotát
    //
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
        // lista indexedik elemere beirja az aktualis elemet, megnoveli a lepest egyel  
        this.#LISTA[index] = this.#aktElem
        this.#lepes++;
        this.#setAktElem()
    }

    ell(){
        //kiszamolja hogy ki gyozott
    }

 


}