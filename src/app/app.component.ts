import { Component, OnInit } from '@angular/core';
import { AuthService } from './Netflix/user/auth.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AlcProject';
  user : string;
  sessdata : string;
  myUser: BehaviorSubject<string>;
  jj: any;
  constructor(public auth: AuthService,private router: Router){
    this.myUser = new BehaviorSubject(sessionStorage.getItem('User'));
    this.jj = this.myUser.asObservable();
  }

  ngOnInit(){
    
  }

  getUser() {
    return this.myUser.value;
  }

  logout(){
    sessionStorage.removeItem('fav');
    sessionStorage.removeItem('User');
    this.auth.myUser.next(null);

    location.reload(true);
    confirm("Are Sure You Want to Log Out ?")
    this.router.navigate['/Home'];
  }

 

 
}
