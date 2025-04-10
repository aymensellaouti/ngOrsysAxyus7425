import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/auth/auth.service';
import { APP_ROUTES } from 'src/app/config/app-routes.config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  authService = inject(AuthService);
  router = inject(Router);
  translateService = inject(TranslateService);
  constructor() {
    // définir le français comme étant la langue par défaut
    this.translateService.setDefaultLang('fr');
    // définit les langues qu'on gére anglais et francais
    const appSupportedLangs = ['en', 'fr'];
    // activer ces langues
    this.translateService.addLangs(appSupportedLangs);
    // récupérer la langue du Browser
    const browserLang = this.translateService.getBrowserLang() ?? '';
    // On lui a dit si on prend en charge la langue du naviguateur utilise
    // la sinon utilise la langue par défaut
    this.translateService.use(
      appSupportedLangs.includes(browserLang) ? browserLang : 'fr'
    );
  }

  switchLangage(langage: string) {
    this.translateService.use(langage);
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
    this.router.navigate([APP_ROUTES.login]);
  }
}
