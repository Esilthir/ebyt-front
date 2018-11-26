import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item';
import { CartService } from '../cart.service';

@Component({
	selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  
  items: Item[] = [];
  cart: Item[];
  
	constructor(
		private activatedRoute: ActivatedRoute,
		private cartService: CartService
    ) {}
    
    ngOnInit() {
      this.cart = this.cartService.loadCart();
    }
    
    quantityPlus1(item: Item){
      let stock: Item = JSON.parse(localStorage.getItem('cart'));
      stock[0].quantity += 1;
      item.quantity += 1;
      localStorage.setItem('cart', JSON.stringify(stock));
    }
    
    quantityMinus1(item: Item){
      if(item.quantity > 1)
      {
        let stock: Item = JSON.parse(localStorage.getItem('cart'));
        stock[0].quantity -= 1;
        item.quantity -= 1;
        localStorage.setItem('cart', JSON.stringify(stock));
      }
    }
    
    remove(id: number): void{
      console.log(id);
      this.cartService.remove(id);
      this.ngOnInit();
    }
    
  }