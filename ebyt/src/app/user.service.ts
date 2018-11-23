import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from './user';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class UserService {
	private url = 'http://localhost:8070';
	private urlUser = 'http://localhost:8070/user';
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
				sessionStorage.setItem('id', response['id']);
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

	addUser(user : User){
		this.http.post(this.urlUser + '/', user, this.httpOptions).subscribe(() => this.router.navigate(['/']));
	}

	updateUser(user : User){
		console.log(user);
		this.http.put(this.urlUser + '/' + user.id, user, this.httpOptions).subscribe();
	}

	getUser(id : number) : Observable<User>{
		return this.http.get<User>(this.urlUser + '/' + id, this.httpOptions);
	}

	getUsers() : Observable<Array<User>>{
		return this.http.get<Array<User>>(this.urlUser + '/all', this.httpOptions);
	}

	search(username?: string, lastname?: string, firstname?: string) : Observable<Array<User>> {
		let optionsParams = 
		{ 	params: new HttpParams(),
			headers: new HttpHeaders({'Content-type': 'application/json'}),
			reportProgress: true
		};
		if (username) {
			optionsParams.params = optionsParams.params.set('username', username);
		}
		if (lastname) {
			optionsParams.params = optionsParams.params.set('lastname',lastname);
		}
		if (firstname) {
			optionsParams.params = optionsParams.params.set('firstname', firstname);
		}

		return this.http.get<Array<User>>(this.urlUser + '/getAll', optionsParams);
	}
}
