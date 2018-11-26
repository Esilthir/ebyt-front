import { Component, OnInit } from '@angular/core';
import { Concert } from '../concert';
import { ConcertService } from '../concert.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { Item } from '../item';

@Component({
  selector: 'app-list-concert',
  templateUrl: './list-concert.component.html',
  styleUrls: ['./list-concert.component.css']
})
export class ListConcertComponent implements OnInit {

  rechercheAvancee: boolean;
  item: Item;
  concerts: Array<Concert> = new Array();
  concertsToShow: Array<Concert>;
  concertCount: number;
  plus = "+";

  constructor( private concertService: ConcertService, private cartService: CartService, private router : Router ) {

   }

  ngOnInit() {
    this.concertService.search().subscribe((listeConcert) => {
      this.concerts = listeConcert;
      this.concertCount = this.concerts.length;
      this.concertsToShow = this.concerts.slice(0,10);
   })
  }

  addToCart(concert: Concert) {
    this.cartService.addOneToCart(concert);
  }

  paginate(event) {
    this.concertsToShow = this.concerts.slice(event.first, event.first + event.rows);
    
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
  }

}
