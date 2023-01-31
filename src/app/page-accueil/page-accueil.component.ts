import { Component } from '@angular/core';
import { Article } from 'src/models/article';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent {

  public nomApplication: String = "DEMO";

  public listeArticle: Article[] = [
    {
      auteur: "Franck",
      titre: "Article 1",
      contenu: "Contenu 3"
      
    },
    {
      auteur: "auteur 2",
      titre: "Article 2",
      contenu: "Contenu 2"
      
    },
    {
     
      titre: "Article 3",
      contenu: "Contenu 3",

    },
  ]

  onClickBouton(): void {
    this.nomApplication = "Autre nom"
  }
}
