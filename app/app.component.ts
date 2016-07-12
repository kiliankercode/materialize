import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ClientDetailComponent } from './client/client.component';
import { ClientService } from './client/client.service';
import { ArticleDetailComponent } from './article/article.component';
import { ArticleService } from './article/article.service';
import { FournisseurDetailComponent } from './fournisseur/fournisseur.component';
import { FournisseurService } from './fournisseur/fournisseur.service';

@Component({
    selector: 'my-app',
    template: `<nav>
      <a [routerLink]="['/client']" routerLinkActive="active" class="waves-effect waves-light btn" style="margin-left:20px;">CLIENT</a>
      <a [routerLink]="['/article']" routerLinkActive="active" class="waves-effect waves-light btn">ARTICLE</a>
      <a [routerLink]="['/fournisseur']" routerLinkActive="active" class="waves-effect waves-light btn">FOURNISSEUR</a>
    </nav>
    <router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES],
    providers: [ ClientDetailComponent, ArticleDetailComponent, FournisseurDetailComponent]
})

export class AppComponent  {
   
}