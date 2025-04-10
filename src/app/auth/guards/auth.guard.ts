import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { APP_ROUTES } from 'src/app/config/app-routes.config';

export const authGuard: CanActivateFn = (route, state) => {
  // Vérifier qu'il est authentifié
    const authService = inject(AuthService);
    const router = inject(Router);
    // si ko => redirige vers login on retourne false
    if (!authService.isAuthenticated()) {
      router.navigate([APP_ROUTES.login]);
      return false;
    }
    // sinon => on retourne true
    return true;
};
