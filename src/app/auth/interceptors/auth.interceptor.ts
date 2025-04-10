import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('in interceptor');
    //request.clone()
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
