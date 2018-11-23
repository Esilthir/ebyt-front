import { Concert } from "./concert";

export class Panier {

    concerts:Array<Concert>;
    priceTotal:number;
    nbProduct: number;
    
    constructor( concerts?:Array<Concert>, priceTotal?:number, nbProduct?: number){

        this.concerts = concerts === undefined ? null : concerts;
        this.priceTotal = priceTotal === undefined ? 0 : priceTotal;
        this.nbProduct = nbProduct === undefined ? 0 : nbProduct;

    }

}
