import { Component, OnInit } from '@angular/core';
import { Concert } from '../concert';
import { ConcertService } from '../concert.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-concert',
  templateUrl: './list-concert.component.html',
  styleUrls: ['./list-concert.component.css']
})
export class ListConcertComponent implements OnInit {

  rechercheAvancee: boolean;

  concerts: Array<Concert> = new Array();
  concertsToShow: Array<Concert>;
  concertCount: number;

  constructor( private concertService: ConcertService, private cartService: CartService, private router : Router ) {

   }

  ngOnInit() {
    console.log("coucou");
    this.concertService.search().subscribe((listeConcert) => {
      this.concerts = listeConcert;
      console.log(this.concerts);
      this.concertCount = this.concerts.length;
      console.log(this.concertCount);
      this.concertsToShow = this.concerts.slice(0,10);
      console.log(this.concertsToShow);
   })
  }

  addToCart(concert: Concert) {
    this.cartService.addToCart(concert);
  }

  paginate(event) {
    this.concertsToShow = this.concerts.slice(event.first, event.first + event.rows);
    
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
  }

}
