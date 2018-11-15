import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
	url = 'http://localhost:8091/api/MyUsers';
	
	httpOptions = {
		headers: new HttpHeaders({'Content-type': 'application/json'})
	};
	
	constructor(private http: HttpClient, private router: Router) { }

	// La on met les méthodes qui discutent avec le back ex pour ajouter un utilisateur:
	//addUser(user: MyUser){
	//	console.log(this.url);
	//	this.http.post(this.url + '/addMyUser',user, this.httpOptions).subscribe(() => this.router.navigate(['/addUser']));
	//}
}
