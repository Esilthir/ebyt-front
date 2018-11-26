import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Commande } from './commande';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  url = 'http://localhost:8070/commande';	
  httpOptions = {
		headers: new HttpHeaders({'Content-type': 'application/json'}),
		reportProgress: true
	};

  constructor(private http: HttpClient, private router: Router) { }

  getCommandes() : Observable<Array<Commande>>{
		return this.http.get<Array<Commande>>(this.url + '/', this.httpOptions);
  }
  
  getCommandesUser() : Observable<Array<Commande>>{
    return this.http.get<Array<Commande>>(this.url + '/commande/' + sessionStorage.getItem('id'), this.httpOptions);
  }

}