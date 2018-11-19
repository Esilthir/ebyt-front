import { Component, OnInit } from '@angular/core';
import { ConcertService } from '../concert.service';
import { Concert } from '../concert';



@Component({
  selector: 'app-liste-concert-admin',
  templateUrl: './liste-concert-admin.component.html',
  styleUrls: ['./liste-concert-admin.component.css']
})
export class ListeConcertAdminComponent implements OnInit {


  concerts: Array<Concert> = new Array();

  constructor(private concertService: ConcertService) {
   }

  ngOnInit() {
    this.concertService.getConcerts().subscribe((listeConcert) => {
       this.concerts = listeConcert;
       console.log(this.concerts);
    })}

  deleteConcert(id: number) {
    this.concertService.deleteConcert(id);
  }

}