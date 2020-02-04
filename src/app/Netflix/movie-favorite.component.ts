import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/auth.service';
import { MovieService } from './movies.service';
import { FavoriteService } from './favorite.service';

@Component({
  selector: 'app-movie-favorite',
  templateUrl:'./movie-favorite.component.html',
  styleUrls: ['./movie-favorite.component.css']
})
export class MovieFavoriteComponent implements OnInit{
  fav: any[];
  movieList: any[];
movielist: any;
  constructor(private movieService: MovieService, private favService: FavoriteService, private auth: AuthService){}

  ngOnInit(){
    if(sessionStorage.getItem('fav') !== null)
    {
      this.fav = sessionStorage.getItem('fav').split(',');
      console.log(this.fav);
       this.movieList = this.movieService.getMovies().filter((movie) =>{
        return this.fav.indexOf(movie.movieName) >= 0;
       });
    }
  }
}
