import { Component } from "@angular/core";
import { Cv } from "../model/cv.model";

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent {
  cv: Cv | null = null;
  // 1- Injecter ActivatedRoute
  // 2- Récupérer l'id
  // 3- Cherche le cv qui correspond à l'id
    //3-1 si ok Affiche
    //3-2 si ko On redirige (il faut donc injecter le router) vers la liste des cvs
  constructor() {}

  deleteCv() {
    // Permettre la suppression du cv
    // Ensuite elle redirige
  }
}
