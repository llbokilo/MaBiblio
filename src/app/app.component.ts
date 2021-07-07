import { Component } from '@angular/core';
import { Livre } from './livre.model';
import { LivresService } from './livres.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MaBiblio';

  listeLivres:Livre[] = [];

  constructor(private livreService:LivresService) {

    this.livreService.ajouterLivre(new Livre("Thriller", "Casse-Tête chinois à Vierzon", "Raymond PETIT", 2020, 100000));
    this.livreService.ajouterLivre(new Livre("Romance", "Infidélités et remords au bord du Cher", "Raymond PETIT", 2010, 100001));
    this.livreService.ajouterLivre(new Livre("Horreur", "Le cauchemar de Vierzon", "Raymond PETIT", 2021, 100002));
    this.livreService.ajouterLivre(new Livre("Guerre", "Il faut sauver le soldat du Cher", "Raymond PETIT", 2018, 100003));
    this.livreService.ajouterLivre(new Livre("Erotique", "A pingouin, pingouin et demi", "Raymond PETIT", 2007, 100004));
    this.livreService.ajouterLivre(new Livre("Historique", "Les grands chantiers metallurgiques de Bourges", "Raymond PETIT", 2008, 100005));

    this.listeLivres = livreService.listerLivres();
  }
}
