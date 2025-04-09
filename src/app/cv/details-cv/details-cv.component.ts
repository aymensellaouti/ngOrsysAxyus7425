import { Component, inject } from "@angular/core";
import { Cv } from "../model/cv.model";
import { ActivatedRoute, Router } from "@angular/router";
import { CvService } from "../services/cv.service";
import { APP_ROUTES } from "src/app/config/app-routes.config";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent {
  cv: Cv | null = null;
  // Il permet de récupérer les informations sur la route active
  private acr = inject(ActivatedRoute);
  // Il nous permet de déclencher un routage ou une navigation programatiquement
  private router = inject(Router);
  private cvService = inject(CvService);
  private toaster = inject(ToastrService);
  authService = inject(AuthService);
  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
  // 1- Injecter ActivatedRoute
  constructor() {
  // 2- Récupérer l'id
  const id = this.acr.snapshot.params['id'];
  // 3- Cherche le cv qui correspond à l'id
  //3-1 si ok Affiche
  // this.cv = this.cvService.findCvById(id);
  this.cvService.getCvByIdFromApi(id).subscribe({
    next: (cv) => this.cv = cv,
    error: () => {
      this.router.navigate([APP_ROUTES.cv]);
    }
  });
  // if(!this.cv) {
  //     //3-2 si ko On redirige (il faut donc injecter le router) vers la liste des cvs
  //     this.router.navigate([APP_ROUTES.cv]);
  // }
  }

  deleteCv() {
    if (this.cv) {
      // Permettre la suppression du cv
      this.cvService.deleteCvByIdFromApi(this.cv.id).subscribe({
        next: () => {
          // Ensuite elle redirige
          this.router.navigate([APP_ROUTES.cv]);
        },
        error: (e) => {
          this.toaster.error(`Un problème est survenue merci de contacter l'admin`);
          console.log(e);
        }
      });

    }
  }
}
