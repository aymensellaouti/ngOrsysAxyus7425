import { Component, inject } from '@angular/core';
import { Credentials } from '../dto/credentials.dto';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/config/app-routes.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authService = inject(AuthService);
  toastr = inject(ToastrService);
  router = inject(Router);
  login(credentials: Credentials) {
    this.authService.login(credentials).subscribe({
      next: (response) => {
        this.toastr.success('Bienvenu chez vous :D');
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: (e) => {
        this.toastr.error('Veuillez vérifier vos credentials');
      }
    })
  }
}
