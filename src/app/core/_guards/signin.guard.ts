import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class SignInGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  // TODO: можно смотреть откуда пришел и редиректить обратно
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.authState
        .map(user => {
          return user
            ? this.router.navigate(['/app/catalogue']) && false
            : true;
        })
        .catch(() => {
          this.router.navigate(['/']);
          return Observable.of(false);
        });
  }
}
