import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FavoriteService } from './favorite.service';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'app-movie-thumbnail',
  templateUrl: './movie-thumbnail.component.html',
  styleUrls: ['./movie-thumbnail.component.css']
})
export class MovieThumbnailComponent implements OnInit {
  @Input() movie:any;
  @Output() movieId = new EventEmitter();
  @Input() color: boolean;
  iconColor: string;
  user: string;
  constructor(private favService: FavoriteService,private auth: AuthService) { }

  favorite(){
    this.movieId.emit(this.movie.movieName);
  }

  movieAddedToFavorite(){
    if (sessionStorage.getItem('fav') !== null)
    {
     const result =  sessionStorage.getItem('fav').split(',').indexOf(this.movie.movieName) > -1;
     return result;
    }
    else{
      return false;
    }
  }




  ngOnInit() {
    this.user = sessionStorage.getItem('User');
    
  }
  getUser(){
    return !!this.user;
  }

}
