import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardLogin implements CanActivate {

  constructor(public auth: AuthService,
              private router: Router) {}

  canActivate() {
    console.log(this.auth.loggedIn());
    if (this.auth.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

}
