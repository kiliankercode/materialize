/**
 * Article
 */
export class Fournisseur {
	id: number;
	societe : string;
	nom: string;
	facture: number;
	livraison: number;
	
	constructor(id : number, societe: string, nom: string, facture: number, livraison: number) {
		this.id = id;
		this.societe = societe;
		this.nom = nom;
		this.facture = facture;
		this.livraison = livraison;
	}
}