import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { Subject, Observable } from 'rxjs';
import { MenuComponent } from './menu/menu.component';

@Injectable({
	providedIn: 'root'
})

export class UserService {
	private url = 'http://localhost:8070';
	private authenticated = false;
	private identifiant = new Subject<String>()

	identifiant$ = this.identifiant.asObservable();

	httpOptions = {
		headers: new HttpHeaders({ 'Content-type': 'application/json' })
	};

	constructor(private http: HttpClient, private router: Router) {
		if (sessionStorage.getItem('username')) {
			this.authenticated = true;
		}
	}


	authenticate(credentials, success, callback) {

		this.http.post(this.url + '/loginCustom', credentials, this.httpOptions)
		
		.subscribe(response => {
			if (response['username']) {
				sessionStorage.setItem('username', response['username']);
				sessionStorage.setItem('role', response['role']);
				sessionStorage.setItem('lastname', response['lastname']);
				sessionStorage.setItem('firstname', response['firstname']);
				this.authenticated = true;
				this.identifiant.next(response['username']);
				return success && success();

			} else {
				this.authenticated = false;
				return callback && callback();

			}
		})
	}

	logout() {
		this.clearSession().then(() => {
			this.identifiant.next(" ");

		  });

	}
	clearSession() {
		return new Promise ((resolve, reject) => {
			resolve.call(sessionStorage.clear())
		})
	}

	createUser( user: User ){
		this.http.post(this.url + '/user/', user, this.httpOptions).subscribe(() => this.router.navigate(['/']));
	}

}
