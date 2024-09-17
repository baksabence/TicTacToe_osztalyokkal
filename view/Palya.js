import Mezo from "./Mezo.js"

export default class Palya{
        #lista = []
        #szuloElem
           //lekeri a listanak az aktualis allapotat, tehat tudja peldanyositani, a controlleren keresztul kommunikal. annyi mezot peldanyosit amennyire szukseg van

        constructor(lista, szuloElem){
            this.#lista = lista
            this.#szuloElem = szuloElem
            this.#szuloElem.empty()
            this.megjelenit()
        }


        megjelenit(){
            this.#lista.forEach((elem, index) =>{
                new Mezo(elem, index, this.#szuloElem)
            })
        }


}
