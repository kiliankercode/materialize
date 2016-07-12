import { Injectable } from '@angular/core';
import { FOURNISSEURS } from './fournisseur.mock';
import { Fournisseur } from './fournisseur';

@Injectable()
export class FournisseurService {

    constructor() { }

    public getFournisseurs() {
        return Promise.resolve(FOURNISSEURS);
    }

    public getFournisseur(id : number) {
        return Promise.resolve(FOURNISSEURS.filter(fournisseur => fournisseur.id === id));
    }

    public setFournisseur(fournisseur : Fournisseur) : boolean {
        return false;
    }

    public addFournisseur(fournisseur : Fournisseur) : boolean {
        return false;
    }

    public suppFournisseur(fournisseur : Fournisseur) : boolean {
        return false;
    }

}