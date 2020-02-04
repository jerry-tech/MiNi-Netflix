import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ok } from 'assert';

@Component({
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css']
})

export class LoginComponent {
  mouseOverLogin;
  password;
  userName;
  constructor(private authService: AuthService, private router: Router) {

  }
  login(formvalues) {
    this.authService.loginUser(formvalues.userName, formvalues.password);
     
    alert("Login Successfully");
    
    this.router.navigate(['/Home']);
    
    console.log(formvalues);
  }
  cancel() {
    this.router.navigate(['/Login']);
  }
}
