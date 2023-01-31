import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-page-edition-article',
  templateUrl: './page-edition-article.component.html',
  styleUrls: ['./page-edition-article.component.scss']
})
export class PageEditionArticleComponent {

  public formContact: FormGroup = this.formBuilder.group(
    {
      "titre": ["", [Validators.required]],
      "auteur": "",
      "contenu": ["", [Validators.required]]
    })

  constructor(private router: Router, private formBuilder: NonNullableFormBuilder) { }


  onSubmit(): void {

    if (this.formContact.valid) {
      alert("L'article a été ajouté ...")
      this.router.navigateByUrl("/accueil")
    }
  }


}
