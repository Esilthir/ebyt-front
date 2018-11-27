import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../item';
import { CartService } from '../cart.service';
import { CommandeService } from '../commande.service';
import { Commande } from '../commande';
import { User } from '../user';

@Component({
	selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  item: Item;
  items: Item[] = [];
  cart: Item[];
  tot: number;
  role: string;
  authenticated: boolean;
  
	constructor(
    private router: Router,
		private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private commandeService: CommandeService
    ) {
    }
    
    ngOnInit() {
      this.reloadCart();
      this.role = sessionStorage.getItem('role');
      this.cart = this.cartService.loadCart();
      if(sessionStorage.getItem('username')) {
        this.authenticated = true;
      }
    }
    
    quantityPlus1(item: Item){
      this.cartService.addOneToCart(item.concert);
      this.reloadCart();
    }
    
    quantityMinus1(item: Item){
      if (item.quantity > 1) {
        this.cartService.removeOneFromCart(item.concert);
      }
      this.reloadCart();
    }
    
    remove(id: number): void{
      this.cartService.remove(id);
      this.reloadCart();
    }
    
    reloadCart() {
      this.cart = this.cartService.loadCart();
      this.tot = this.cartService.totalTotal;
    }
    
    removeAll(){
      localStorage.clear();
    }

    createCommande() {
      let userId: string = sessionStorage.getItem('id');
      let user: User = new User();
      user.id = Number.parseInt(userId);

      let commande = new Commande(user, this.cart);
      this.commandeService.createCommande(commande).then(() => { 
        this.removeAll();
      this.router.navigate(['payment']) });
    }
  }