import { Component, OnInit } from '@angular/core';
import { AuthService } from './Netflix/user/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AlcProject';
  user : string;
  sessdata : string;
  constructor(public auth: AuthService,private router: Router){}

  ngOnInit(){
    if(sessionStorage.getItem !== null)
    {
     this.user = sessionStorage.getItem('User');
      // console.log(this.user);
    }
    
  }

  resultsess(){
      return !!this.user
  }
  logout(val){
    sessionStorage.removeItem('fav');
    sessionStorage.removeItem('User');

    location.reload(true);
    confirm("Are Sure You Want to Log Out ?")
    this.router.navigate['/Home'];
  }

 

 
}
