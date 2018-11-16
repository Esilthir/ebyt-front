import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class UserService {
	private url = 'http://localhost:8070';
	private authenticated = new Subject<boolean>();
	currentAuth = this.authenticated.asObservable();
	private identifiant;

	httpOptions = {
		headers: new HttpHeaders({ 'Content-type': 'application/json' })
	};

	constructor(private http: HttpClient, private router: Router) {
		this.identifiant = sessionStorage.getItem('username');
		if (this.identifiant !== null) {
			this.authenticated.next(true);
		}
	}


	authenticate(credentials, callback) {

		this.http.post(this.url + '/loginCustom', credentials, this.httpOptions).subscribe(response => {
			if (response['username']) {
				sessionStorage.setItem('username', response['username']);
				sessionStorage.setItem('role', response['role']);
				sessionStorage.setItem('lastname', response['lastname']);
				sessionStorage.setItem('firstname', response['firstname']);
				this.authenticated.next(true);
				window.location.reload(); //Attention, c'est dégueulasse
			} else {
				this.authenticated.next(false);
			}
			return callback && callback();
		})
	}

	logout() {
		this.clearSession().then(() => {
			this.authenticated.next(false);
			window.location.reload(); //Attention, c'est dégueulasse
		  });

	}
	clearSession() {
		return new Promise ((resolve, reject) => {
			resolve.call(sessionStorage.clear())
		})
	}
}
