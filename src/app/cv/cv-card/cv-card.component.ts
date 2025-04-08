import { Component, inject, Input } from '@angular/core';
import { Cv } from '../model/cv.model';
import { EmbaucheService } from '../services/embauche.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cv-card',
  templateUrl: './cv-card.component.html',
  styleUrls: ['./cv-card.component.css'],
})
export class CvCardComponent {
  // details() {
  //   if(this.cv)
  //    this.router.navigate([this.cv.id], {relativeTo: this.acr})
  // }
  // Je définis l'état du composant
  @Input()
  cv: Cv | null = null;
  // acr = inject(ActivatedRoute);
  // router = inject(Router);
  embaucheService = inject(EmbaucheService);
  toastr = inject(ToastrService);
  hire() {
    if(this.cv) {
      if(this.embaucheService.hire(this.cv)) {
        this.toastr.success(`
          ${this.cv.firstname} ${this.cv.name} a été pré sélectionné avec succès
        `);
      } else {
        this.toastr.warning(`
                  ${this.cv.firstname} ${this.cv.name} est déjà pré sélectionné
        `);
      }
    }
  }
}
