import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './user/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailGuard implements CanActivate {
  user: string;

  constructor(private router: Router, private auth:AuthService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

     let id = +next.url[1].path;
     if(isNaN(id) || id < 0 || id > 10)
     {
       alert("The Movie Currently Not Available Try Another");
       this.router.navigate(['/Home']);
       return false;
     };
    return true
  }

  }
