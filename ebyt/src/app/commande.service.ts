import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Commande } from './commande';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Item } from './item';

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
  
  createCommande(commande: Commande): Promise<Commande> {
    console.log("createCommande");
		return this.http.post<Commande>(this.url + '/', commande, this.httpOptions).toPromise();
  }

}
