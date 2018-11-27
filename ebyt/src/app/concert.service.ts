import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Concert } from './concert';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';


@Injectable({
	providedIn: 'root'
})

export class ConcertService {
	
	private concerts: Concert[];
	
	url = 'http://localhost:8070/concert';	
	httpOptions = {
		headers: new HttpHeaders({'Content-type': 'application/json'}),
		reportProgress: true
	};
	
	constructor(private http: HttpClient, private router: Router) {
	}
	
	// La on met les méthodes qui discutent avec le back
	
	addConcert(concert : Concert): Observable<Concert> {
		return this.http.post<Concert>(this.url + '/', concert, this.httpOptions);
	}
	
	updateConcert(concert : Concert, imgRec: File, imgCarre: File){
		let tab: any[] = new Array(3);
		tab[0] = concert;
		tab[1] = imgRec;
		tab[2] = imgCarre;
		this.http.put(this.url + '/' + concert.id, tab, this.httpOptions).subscribe( () => this.router.navigate(['/admin/concerts']));
	}

	addImageRec(imgRec: File, id: number) {
		this.http.post(this.url + '/' + "AddImageRec" + '/' + id, imgRec, this.httpOptions);
	}

	addImageCarre(imgCarre: File, id: number){
		this.http.post(this.url + '/' + "AddImageCarre" + '/' + id, imgCarre, this.httpOptions);
	}

	getConcert(id : number) : Observable<Concert>{
		return this.http.get<Concert>(this.url + '/' + id, this.httpOptions);
	}
	
	getConcerts() : Observable<Array<Concert>>{
		return this.http.get<Array<Concert>>(this.url + '/all', this.httpOptions);
	}
	
	deleteConcert(id: number): Observable<any> {
		return this.http.delete(this.url + "/" + id, this.httpOptions);
	}
	
	getFameConcerts() : Observable<Array<Concert>>{
		return this.http.get<Array<Concert>>(this.url + '/fame', this.httpOptions);
	}
	
	getLastConcerts() : Observable<Array<Concert>>{
		return this.http.get<Array<Concert>>(this.url + '/last', this.httpOptions);
	}
	
	concertCount() : Observable<number> {
		return this.http.get<number>(this.url + '/count', this.httpOptions);
	}

	getGenres() : Observable<Array<string>> {
		return this.http.get<Array<string>>(this.url + "/allGenres", this.httpOptions);
	}
	
	search(name?:string, artist?:string, genre?:string, place?:string, priceMax?:number, active?:boolean) : Observable<Array<Concert>> {
		
		let optionsParams = 
		{ 	params: new HttpParams(),
			headers: new HttpHeaders({'Content-type': 'application/json'}),
			reportProgress: true
		};

		if (name) {
			optionsParams.params = optionsParams.params.set('name', name);
		}
		if (artist) {
			optionsParams.params = optionsParams.params.set('artist',artist);
		}
		if (genre) {
			optionsParams.params = optionsParams.params.set('genre', genre);
		}
		if (place) {
			optionsParams.params = optionsParams.params.append('place', place);
		}
		if (priceMax < 200) {
			optionsParams.params = optionsParams.params.set('priceMax', priceMax.toString());
		}
		if (active) {
			optionsParams.params = optionsParams.params.set('active', active.toString());
		}

		if (sessionStorage.getItem('role') === "ROLE_ADMIN") {
			return this.http.get<Array<Concert>>(this.url + '/getAllAdmin', optionsParams);
		} else {
			return this.http.get<Array<Concert>>(this.url + '/getAll', optionsParams);
		}
	}
}
