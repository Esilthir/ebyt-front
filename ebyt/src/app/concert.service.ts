import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Concert } from './concert';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConcertService {

	url = 'http://localhost:8070/concert';	
	httpOptions = {
		headers: new HttpHeaders({'Content-type': 'application/json'})
	};

	constructor(private http: HttpClient, private router: Router) { }

	// La on met les méthodes qui discutent avec le back

	addConcert(concert : Concert){
		this.http.post(this.url + '/', concert, this.httpOptions).subscribe(() => this.router.navigate(['/']));
	}

	updateConcert(concert : Concert){
		this.http.put(this.url + '/' + concert.id, concert, this.httpOptions).subscribe(() => this.router.navigate(['/']));
	}

	getConcert(id : number) : Observable<Concert>{
		return this.http.get<Concert>(this.url + '/' + id, this.httpOptions);
	}

	getConcerts() : Observable<Array<Concert>>{
		return this.http.get<Array<Concert>>(this.url + '/all', this.httpOptions);
	}

	deleteConcert(id: number) {
		this.http.delete(this.url + "/" + id, this.httpOptions).subscribe();
	}
	
}
