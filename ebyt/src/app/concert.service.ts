import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Concert } from './concert';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConcertService {

	url = 'http://localhost:8091/api/MyUsers';	
	httpOptions = {
		headers: new HttpHeaders({'Content-type': 'application/json'})
	};

	constructor(private http: HttpClient, private router: Router) { }

	// La on met les méthodes qui discutent avec le back ex pour ajouter un concert:
	//addConcert(Concert: Concert){
	//	console.log(this.url);
	//	this.http.post(this.url + '/addConcert',concert, this.httpOptions).subscribe(() => this.router.navigate(['/addConcert']));
	//}
}
