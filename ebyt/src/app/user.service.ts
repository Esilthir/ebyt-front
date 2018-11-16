import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})

export class UserService {
	url = 'http://localhost:8070';
	authenticated: boolean;
	identifiant;

	httpOptions = {
		headers: new HttpHeaders({ 'Content-type': 'application/json' })
	};

	constructor(private http: HttpClient, private router: Router) {
		this.identifiant = sessionStorage.getItem('username');
		if (this.identifiant !== null) {
			this.authenticated = true;
		}
	}


	authenticate(credentials, callback) {
		// const headers = new HttpHeaders(credentials ? {
		//   authorization: 'Basic' + btoa(credentials.username + ':' + credentials.password)
		// } : {});


		this.http.post(this.url + '/loginCustom', credentials, this.httpOptions).subscribe(response => {
			if (response['username']) {
				sessionStorage.setItem('username', response['username']);
				sessionStorage.setItem('role', response['role']);
				sessionStorage.setItem('lastname', response['lastname']);
				sessionStorage.setItem('firstname', response['firstname']);
				this.authenticated = true;
			} else {
				this.authenticated = false;
			}
			return callback && callback();
		})
	}

	logout() {
		this.http.post(this.url + '/logout', {}).subscribe(() => {
			this.authenticated = false;
			this.router.navigateByUrl('/login');
			sessionStorage.clear();
		});
	}
}
