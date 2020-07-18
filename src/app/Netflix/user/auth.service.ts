import { IUser } from './user.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser;
  user: any;
  value: string;
  firstlet: string;
  seclet: string;
  redirectUrl: string;
  rest: string;
  myUser: BehaviorSubject<any>;
  jj: any;

  constructor() {
    this.myUser = new BehaviorSubject(sessionStorage.getItem('User'));
    this.jj = this.myUser.asObservable();
  }

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      password: password,
      favorite: []
    };

  }

  getUser() {
    return this.myUser.value;
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
  updateCurrentUser(userName: string, password: string) {
    this.currentUser.userName = userName;
    this.currentUser.password = password;
  }


}
