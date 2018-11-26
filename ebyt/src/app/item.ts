import { Concert } from "./concert";
import { isNull } from "@angular/compiler/src/output/output_ast";
import { isNullOrUndefined } from "util";

export class Item {
    
    concert: Concert;
    quantity: number;
    
    constructor(concert?:Concert, quantity?:number){
        isNullOrUndefined(concert) ? console.log("NUL") : console.log("OK");
        this.concert = concert; 
        this.quantity = quantity;
    }
    
    getTotalPrice(): number {
        return this.concert.price * this.quantity;
    }
}