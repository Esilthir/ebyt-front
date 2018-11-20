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
	urlPic: string;
	urlPicRec: string;
	urlVideo: string;
	place: string;

	constructor(artist?: string, name?: string, date?: string, genre?: string, description?: string, nbMaxPlaces?: number, price?: number, nbBoughtPlace?: number, active?: boolean, urlPic?: string, urlPicRec?: string, urlVideo?: string, place?: string){
		this.artist = artist === undefined ? null : artist;
		this.name = name === undefined ? null : name;
		this.date = date === undefined ? null : date;
		this.genre = genre === undefined ? null : genre;
		this.description = description === undefined ? null : description;
		this.nbMaxPlaces = nbMaxPlaces === undefined ? null : nbMaxPlaces;
		this.price = price === undefined ? null : price;
		this.nbBoughtPlace = nbBoughtPlace === undefined ? null : nbBoughtPlace;
		this.active = active === undefined ? true : active;
		this.urlPic = this.urlPic === undefined ? null : urlPic;
		this.urlPicRec = this.urlPicRec === undefined ? null : urlPicRec;
		this.urlVideo = this.urlVideo === undefined ? null : urlVideo;
		this.place = this.place === undefined ? null : place;
	}
}