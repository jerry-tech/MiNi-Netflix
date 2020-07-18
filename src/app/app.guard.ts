import { Injectable } from '@angular/core';
import { CanActivate,Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './Netflix/user/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private _authService: AuthService,private _router:Router){}
  canActivate() : boolean {
    if(this._authService.getUser()){
      return true;
    }else{
      this._router.navigate(['/Home']);
      return false;
    }
  }
 

}
