import { Injectable } from '@angular/core';
import { Concert } from './concert';
import { Panier } from './panier';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierServiceService {

  panier : Panier;

  // panier = new Subject<Panier>();
  // panier$ = this.panier.asObservable;
  

  constructor(  ) { 
    this.panier = new Panier();
    this.panier.concerts = new Array<Concert>();
  }

  addPanier(concert: Concert) {
    console.log(concert);
    this.panier.concerts.push(concert);
    this.panier.nbProduct += 1;
    this.panier.priceTotal += concert.price;
    console.log(this.panier);
  }
  getPanier() : Panier{
    console.log(this.panier);
		return this.panier;
	}

}
