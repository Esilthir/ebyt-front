export class User {
	id: number;
	username: string;
	password: string;
	lastname: string;
	firstname: string;

	constructor(username?: string, password?: string, lastname?: string, firstname?: string){
		this.username = username === undefined ? null : username;
		this.password = password === undefined ? null : password;
		this.lastname = lastname === undefined ? null : lastname;
		this.firstname = firstname === undefined ? null : firstname;
	}
}
