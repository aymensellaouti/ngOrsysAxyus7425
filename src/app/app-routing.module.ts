import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';
import { MiniWordComponent } from './directvies/mini-word/mini-word.component';
import { ColorComponent } from './components/color/color.component';
import { SecondComponent } from './components/second/second.component';
import { LampeComponent } from './directives/lampe/lampe.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { APP_ROUTES } from './config/app-routes.config';
import { NF404Component } from './components/nf404/nf404.component';
import { LoginComponent } from './auth/login/login.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { authGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: APP_ROUTES.cv, component: CvComponent },
  {
    path: APP_ROUTES.addCv,
    component: AddCvComponent,
    canActivate: [authGuard],
  },
  { path: APP_ROUTES.detailsCv, component: DetailsCvComponent },
  { path: APP_ROUTES.todo, component: TodoComponent, canActivate: [] },
  { path: 'word', component: MiniWordComponent },
  { path: 'color', component: ColorComponent },
  { path: 'login', component: LoginComponent },
  { path: ':quelquechose', component: SecondComponent },
  { path: 'test/lampe', component: LampeComponent },
  // Si tu ne matches aucune autre route affiche ce composant
  { path: '**', component: NF404Component },
];

@NgModule({
  // On a définit notre routeur
  imports: [RouterModule.forRoot(routes)],
  // Tout ce qu'il y a à l'intérieur du module n'est visible que
  // pour le module
  // J'uilise export pour données l'accées à mes routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
