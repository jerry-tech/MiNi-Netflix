import { IUser } from './user.model';
import { Injectable } from '@angular/core';
import { getTypeNameForDebugging } from '@angular/core/src/change_detection/differs/iterable_differs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser;
  user: any;
  value: string;
  firstlet: string;
  seclet:string;
  redirectUrl:string;
   rest:string; 

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      password: password,
      favorite: []
    };
   
    this.firstlet = userName.charAt(0).toUpperCase();
    this.seclet = userName.charAt(1).toUpperCase();
    this.value = this.firstlet + this.seclet;
    
    
      sessionStorage.setItem('User', this.value);
  }


  isAuthenticated() {
    return !!this.currentUser;
  }
  updateCurrentUser(userName: string, password: string) {
    this.currentUser.userName = userName;
    this.currentUser.password = password;
  }


}
