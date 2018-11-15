export class User {
	id: number;
	mail: string;
	mdp: string;
	nom: string;
	prenom: string;
	photo: string;

	constructor(mail?: string, mdp?: string, nom?: string, prenom?: string, photo?: string){
		this.mail = mail === undefined ? null : mail;
		this.mdp = mdp === undefined ? null : mdp;
		this.nom = nom === undefined ? null : nom;
		this.prenom = prenom === undefined ? null : prenom;
		this.photo = photo === undefined ? null : photo;
	}
}
