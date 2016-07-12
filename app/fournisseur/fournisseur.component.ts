import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fournisseur }    from './fournisseur';
import { FournisseurService } from './fournisseur.service';

@Component({
    selector: 'fournisseur-form',
    templateUrl: 'app/fournisseur/fournisseur.component.html',
    providers: [FournisseurService]

})

export class FournisseurDetailComponent {
    private _listeFournisseurs: Fournisseur[];
    private _fournisseurService: FournisseurService;
    private _indiceEnCours: number;

    constructor(fournisseurService: FournisseurService) {
        this._fournisseurService = fournisseurService;
    }

    @Input() enrFournisseur: Fournisseur;
    titre = 'Saisie fournisseur';

    submitted = false;

    ngOnInit() {
        this._fournisseurService.getFournisseurs()
            .then(fournisseurs => {
                this._listeFournisseurs= fournisseurs;
                this.setEncours(0);
                });
    }

    onSubmit() {
        this.submitted = true;
        if (this.enrFournisseur.id < 0)
            this._fournisseurService.addFournisseur(this.enrFournisseur);
        else
            this._fournisseurService.setFournisseur(this.enrFournisseur);
        this._listeFournisseurs[this._indiceEnCours] = this.enrFournisseur;
    }

    active = true;

    private ajouterFournisseur() {
        this.enrFournisseur = new Fournisseur(0,'','',0,0);
        this.active = false;
        setTimeout(() => this.active = true, 0);
        this._indiceEnCours = this._listeFournisseurs.push(this.enrFournisseur) - 1;
    }

    private supprimerFournisseur() {
        this._fournisseurService.suppFournisseur(this.enrFournisseur);
        this._listeFournisseurs.splice(this._indiceEnCours, 1);
        if (this._indiceEnCours > 0)
            this._indiceEnCours--;
        this.setEncours(this._indiceEnCours);
    }

    private setEncours(ind: number): void {
        this.enrFournisseur = this._listeFournisseurs[ind];
        this._indiceEnCours = ind;
    }

    private setSuivant() {
        if (this._indiceEnCours < this._listeFournisseurs.length - 1)
            this.setEncours(++this._indiceEnCours);
    }

    private setPrecedent() {
        if (this._indiceEnCours > 0)
            this.setEncours(--this._indiceEnCours);
    }

}
