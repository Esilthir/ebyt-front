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
    })
  }

  deleteConcert(id: number) {
    this.concertService.deleteConcert(id).subscribe( () => {
      alert("Le concert " + id + " a bien été supprimé");
      this.ngOnInit();
    });
  }

  updateActiveConcert(concert: Concert) {
    this.concertService.updateConcert(concert);
  }



}
