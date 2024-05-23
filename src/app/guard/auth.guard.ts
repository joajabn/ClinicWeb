import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { LocalStorageService } from '../service/localstorage.service';

@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  canActivate(): boolean {
    if (!this.localStorageService.credentialsExists()) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }
}
