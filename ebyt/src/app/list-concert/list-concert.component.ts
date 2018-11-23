import { Component, OnInit } from '@angular/core';
import { Concert } from '../concert';
import { ConcertService } from '../concert.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-list-concert',
  templateUrl: './list-concert.component.html',
  styleUrls: ['./list-concert.component.css']
})
export class ListConcertComponent implements OnInit {

  rechercheAvancee: boolean;

  concerts: Array<Concert> = new Array();

  constructor(private concertService: ConcertService, private cartService: CartService) {

   }

  ngOnInit() {
    this.concertService.search().subscribe((listeConcert) => {
      this.concerts = listeConcert;
   });
  }

  addToCart(concert: Concert) {
    this.cartService.addToCart(concert);
  }

}
