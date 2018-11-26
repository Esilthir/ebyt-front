import { Component, OnInit } from '@angular/core';
import { ConcertService } from '../concert.service';
import { Concert } from '../concert';



@Component({
  selector: 'app-liste-concert-admin',
  templateUrl: './liste-concert-admin.component.html',
  styleUrls: ['./liste-concert-admin.component.css']
})
export class ListeConcertAdminComponent implements OnInit {

  concertCount: number;
  concerts: Array<Concert> = new Array();
  concertsToShow: Array<Concert> = new Array();


  constructor(private concertService: ConcertService) {
  }

  ngOnInit() {
    this.concertService.search().subscribe((listeConcert) => {
      this.concerts = listeConcert;
      this.concertCount = this.concerts.length;
      this.concertsToShow = this.concerts.slice(0,10);
    });

  }

  deleteConcert(id: number) {
    this.concertService.deleteConcert(id).subscribe(response => {
      if (response) {
        alert(response.message);
      } else {
        alert("Le concert " + id + " a bien été supprimé");
        this.ngOnInit();
      }
    });
  }

  updateActiveConcert(concert: Concert) {
    let f1 = null;
    let f2 = null;
    this.concertService.updateConcert(concert, f1, f2);
  }

  paginate(event) {
    this.concertsToShow = this.concerts.slice(event.first, event.first + event.rows);
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
  }
}
