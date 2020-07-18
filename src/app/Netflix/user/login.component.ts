import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ok } from 'assert';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  mouseOverLogin;
  password;
  userName;
  firstlet: any;
  seclet: any;
  value: any;
  constructor(private authService: AuthService, private router: Router) {

  }
  login(formvalues) {
    this.authService.loginUser(formvalues.userName, formvalues.password);

    this.firstlet = formvalues.userName.charAt(0).toUpperCase();
    this.seclet = formvalues.userName.charAt(1).toUpperCase();
    this.value = this.firstlet + this.seclet;

    sessionStorage.setItem('User', this.value);
     //setting the value of the behavoural subject
     this.authService.myUser.next(this.value);

    alert("Login Successfully");

    this.router.navigate(['/Home']);

    console.log(formvalues);
  }
  cancel() {
    this.router.navigate(['/Login']);
  }
}
