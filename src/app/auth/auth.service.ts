import { inject, Injectable } from '@angular/core';
import { APP_CONST } from '../config/constantes.config';
import { Credentials } from './dto/credentials.dto';
import { LoginResonse } from './dto/login-response.dto';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { APP_API } from '../config/app-api.config';





@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  login(credentials: Credentials): Observable<LoginResonse>
  {
    // Todo: Appeler l'api avec les credentials et retourner un observable
    return this.http.post<LoginResonse>(APP_API.login, credentials).pipe(
      // L'opérateur des effets de bords
      tap(response => {
        this.saveToken(response.id);
      })
    );
  }

  logout() {
    if(this.isAuthenticated()) {
      this.clearToken();
    }
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
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
