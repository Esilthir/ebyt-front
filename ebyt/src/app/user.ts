export class User {
	id: number;
	username: string;
	password: string;
	lastname: string;
	firstname: string;
	picture: string;

	constructor(username?: string, password?: string, lastname?: string, firstname?: string,	picture?: string){
		this.username = username === undefined ? null : username;
		this.password = password === undefined ? null : password;
		this.lastname = lastname === undefined ? null : lastname;
		this.firstname = firstname === undefined ? null : firstname;
		this	picture =	picture === undefined ? null :	picture;
	}
}
