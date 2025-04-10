import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { ColorComponent } from './components/color/color.component';
import { SecondComponent } from './components/second/second.component';
import { LampeComponent } from './directives/lampe/lampe.component';
import { APP_ROUTES } from './config/app-routes.config';
import { NF404Component } from './components/nf404/nf404.component';
import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [
  { path: '', component: FirstComponent },
  {
    // Toutes les routes qui commence par todo
    path: APP_ROUTES.todo,
    loadChildren: () => import('./todo/todo.module').then(
      m => m.TodoModule
    )
  },
  {
    // Toutes les routes qui commence par todo
    path: APP_ROUTES.cv,
    loadChildren: () => import('./cv/cv.module').then(
      m => m.CvModule
    )
  },
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
