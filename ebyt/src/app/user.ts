export class User {
	id: number;
	username: string;
	password: string;
	nom: string;
	prenom: string;
	photo: string;

	constructor(username?: string, password?: string, nom?: string, prenom?: string, photo?: string){
		this.username = username === undefined ? null : username;
		this.password = password === undefined ? null : password;
		this.nom = nom === undefined ? null : nom;
		this.prenom = prenom === undefined ? null : prenom;
		this.photo = photo === undefined ? null : photo;
	}
}
