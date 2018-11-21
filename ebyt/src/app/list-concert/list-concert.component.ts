import { Component, OnInit } from '@angular/core';
import { Concert } from '../concert';
import { ConcertService } from '../concert.service';

@Component({
  selector: 'app-list-concert',
  templateUrl: './list-concert.component.html',
  styleUrls: ['./list-concert.component.css']
})
export class ListConcertComponent implements OnInit {

  rechercheAvancee: boolean

  concerts: Array<Concert> = new Array();

  constructor( private concertService: ConcertService ) {
    this.rechercheAvancee = false;
   }

  ngOnInit() {
    this.concertService.getConcerts().subscribe((listeConcert) => {
      this.concerts = listeConcert;
   })
  }

}
