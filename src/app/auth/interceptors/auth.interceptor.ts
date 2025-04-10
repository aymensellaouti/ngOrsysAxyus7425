import { inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { APP_CONST } from 'src/app/config/constantes.config';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  authService = inject(AuthService);
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.authService.isAuthenticated()) {
      //console.log('in interceptor');
      const cloneReq = request.clone({
        setHeaders: {
          [APP_CONST.authorizationHeaderKey]: this.authService.getToken()
        }
      });
      return next.handle(cloneReq);
    }
    return next.handle(request);
  }
}

export const authProvider = {
  // J'ai un provider de type httpintercptor
  provide: HTTP_INTERCEPTORS,
  // c'est la class AuthInterceptor
  useClass: AuthInterceptor,
  // Pour le provider de type HTTP_Interceptor ca ne va pas etre juste une instance
  // mais un tableau d'instances
  multi: true
};
