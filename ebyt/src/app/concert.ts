export class Concert {
	id: number;
	artist: string;
	date: string;
	genre: string;
	description: string;
	nbMaxPlace: number;
	price: number;
	nbBoughtPlace: number;

	constructor(artist?: string, date?: string, genre?: string, description?: string, nbMaxPlace?: number, price?: number, nbBoughtPlace?: number){
		this.artist = artist === undefined ? null : artist;
		this.date = date === undefined ? null : date;
		this.genre = genre === undefined ? null : genre;
		this.description = description === undefined ? null : description;
		this.nbMaxPlace = nbMaxPlace === undefined ? null : nbMaxPlace;
		this.price = price === undefined ? null : price;
		this.nbBoughtPlace = nbBoughtPlace === undefined ? null : nbBoughtPlace;
	}
}