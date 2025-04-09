import { inject, Injectable } from '@angular/core';
import { APP_CONST } from '../config/constantes.config';
import { Credentials } from './dto/credentials.dto';
import { LoginResonse } from './dto/login-response.dto';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(credentials: Credentials)
  //: Observable<LoginResonse>
  {
    // Todo: Appeler l'api avec les credentials et retourner un observable
  }

  logout() {}

  isAuthenticated(): boolean {
    return false;
  }

  getToken(): string {
    return localStorage.getItem(APP_CONST.tokenKey) ?? '';
  }

  clearToken(): void {
    localStorage.removeItem(APP_CONST.tokenKey);
  }

  saveToken(tokenValue: string): void {
    localStorage.setItem(APP_CONST.tokenKey, tokenValue);
  }
}
