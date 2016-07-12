/**
 * Article
 */
export class Article {
	id: number;
	identifiant: number;
	code: number;
	description: string;
	montant: number;
	
	constructor(id: number, identifiant: number, code: number, description: string, montant: number) {
		this.id = id;
		this.identifiant = identifiant;
		this.code = code;
		this.description = description;
		this.montant = montant;
	}
}