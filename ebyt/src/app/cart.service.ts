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
  total: number = 0;
  totalTotal: number = 0;
  
  constructor(private concertService: ConcertService) { }
  
  addOneToCart(concert: Concert): void {
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
          cart[index].quantity += 1;
        }
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    }

    this.loadCart();
  }
  
  removeOneFromCart(concert: Concert): void {
    if (concert.id) {
      if (!isNullOrUndefined(localStorage.getItem('cart'))) {
        let index: number = -1;
        let cart: Item[] = JSON.parse(localStorage.getItem('cart'));
        for (var i = 0; i < cart.length; i++) {
          let item: Item = cart[i];
          if (item.concert.id == concert.id) {
            index = i;
            break;
          }
        }
  
        if (index > -1) {
          let item: Item = cart[index];
          if (item.quantity > 1) {
            item.quantity -= 1;
            cart[index] = item;
            localStorage.setItem('cart', JSON.stringify(cart));
          } else {
            this.remove(concert.id);
          }
        }
      }
    }

    this.loadCart();
  }

  loadCart(): Array<Item> {
    this.items = [];
    let cart: Item[] = JSON.parse(localStorage.getItem('cart'));
    if (!isNullOrUndefined(cart)){
      this.totalTotal = 0;
      for (var i = 0; i < cart.length; i++) {
        let item: Item = cart[i];
        this.items.push(new Item(item.concert, item.quantity));
        this.totalTotal += item.concert.price * item.quantity;
      }
    }
    return this.items;
  }
  
  remove(id: number): void {
    let cart: Item[] = JSON.parse(localStorage.getItem('cart'));
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
