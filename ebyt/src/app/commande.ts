import { User } from "./user";
import { Item } from "./item";

export class Commande {

    id: number;
    user: User;
    date: Date;
    itemCommande: Array<Item>;

    constructor(user?: User, itemCommande?: Array<Item>, date?:Date, id?: number){
        this.id = id === undefined ? 0 : id;
        this.user = user === undefined ? null : user;
        this.itemCommande = itemCommande === undefined ? new Array<Item>() : itemCommande;
        this.date = date === undefined ? new Date() : date;
    }

}
