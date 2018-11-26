import { User } from "./user";
import { Item } from "./item";

export class Commande {

    id: number;
    user: User;
    date: Date;
    items: Array<Item>;

    constructor( id?: number, user?: User, items?: Array<Item> , date?:Date){
        this.id = id === undefined ? 0 : id;
        this.user = user === undefined ? null : user;
        this.items = items === undefined ? new Array<Item>() : items;
        this.date = date === undefined ? new Date() : date;
    }

}
