export class Concert {
	id: number;
	artist: string;
	name: string;
	date: string;
	genre: string;
	description: string;
	nbMaxPlaces: number;
	price: number;
	nbBoughtPlace: number;
	active: boolean;
	urlVideo: string;
	place: string;

	constructor(artist?: string, name?: string, date?: string, genre?: string, description?: string, nbMaxPlaces?: number, price?: number, 
											nbBoughtPlace?: number, active?: boolean, urlVideo?: string, place?: string){
		this.artist = artist === undefined ? "artiste" : artist;
		this.name = name === undefined ? "nom" : name;
		this.date = date === undefined ? "01/01/2030" : date;
		this.genre = genre === undefined ? "genre" : genre;
		this.description = description === undefined ? "description" : description;
		this.nbMaxPlaces = nbMaxPlaces === undefined ? 1 : nbMaxPlaces;
		this.price = price === undefined ? 0 : price;
		this.nbBoughtPlace = nbBoughtPlace === undefined ? 0 : nbBoughtPlace;
		this.active = active === undefined ? true : active;
		this.urlVideo = this.urlVideo === undefined ? null : urlVideo;
		this.place = this.place === undefined ? "lieu" : place;
	}
}