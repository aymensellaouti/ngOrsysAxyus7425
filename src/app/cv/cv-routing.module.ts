import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { authGuard } from "../auth/guards/auth.guard";
import { APP_ROUTES } from "../config/app-routes.config";
import { AddCvComponent } from "./add-cv/add-cv.component";
import { CvComponent } from "./cv/cv.component";
import { DetailsCvComponent } from "./details-cv/details-cv.component";


const routes: Routes = [
  { path: '', component: CvComponent },
  {
    path: APP_ROUTES.addCv,
    component: AddCvComponent,
    canActivate: [authGuard],
  },
  { path: APP_ROUTES.detailsCv, component: DetailsCvComponent },
];

@NgModule({
  // On a définit notre routeur
  imports: [RouterModule.forChild(routes)],
  // Tout ce qu'il y a à l'intérieur du module n'est visible que
  // pour le module
  // J'uilise export pour données l'accées à mes routes
  exports: [RouterModule]
})
export class CvRoutingModule { }
