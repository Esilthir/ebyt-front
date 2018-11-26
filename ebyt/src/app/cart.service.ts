import { Injectable } from '@angular/core';
import { Item } from './item';
import { Concert } from './concert';
import { ConcertService } from './concert.service';
import { isUndefined, isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
	private items: Item[] = [];
	private total: number = 0;
  
  constructor(private concertService: ConcertService) { }
  
  
  addToCart(concert: Concert): void{
    if (concert.id) {
      let item: Item = new Item(concert, 1);

      if (isNullOrUndefined(localStorage.getItem('cart'))) {
        let cart = new Array<Item>();
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        let index: number = -1;
        let cart: Item[] = JSON.parse(localStorage.getItem('cart'));
        for (var i = 0; i < cart.length; i++) {
          let item: Item = cart[i];
          if (item.concert.id == concert.id) {
            index = i;
            break;
          }
        }
  
        if (index == -1) {
          cart.push(item);
        } else {
          let item: Item = cart[index];
          item.quantity += 1;
          cart[index] = item;
        }
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    }

    this.loadCart();
  }
  
  loadCart(): Array<Item> {
    this.total = 0;
    this.items = [];
    let cart = JSON.parse(localStorage.getItem('cart'));
    for (var i = 0; i < cart.length; i++) {
      let item = cart[i];
      this.items.push(new Item(item.concert, item.quantity));
      this.total += item.concert.price * item.quantity;
    }
    return this.items;
  }
  
  remove(id: number): void {
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    let index: number = -1;
    for (var i = 0; i < cart.length; i++) {
      let item: Item = cart[i];
      if (item.concert.id == id) {
        cart.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.loadCart();
  }

  
}
