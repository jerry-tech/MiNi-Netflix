import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { IMovies } from './movies';
import { MovieService } from './movies.service';
import { AuthService } from './user/auth.service';
import { FavoriteService } from './favorite.service';
// import { AuthService } from '../shared/authen.service';

@Component({
  selector: 'app-movies-info',
  templateUrl: './movies-info.component.html',
  styleUrls: ['./movies-info.component.css']
})
export class MoviesInfoComponent implements OnInit {
  iconColor: string;
  // movies: any[];
  _listFilter: string;

 

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredMovies = this.listFilter ? this.performFilter(this.listFilter) : this.movies;
  }
  
  filteredMovies: IMovies[];
  movies: IMovies[] = [];
  constructor(private movieService: MovieService,
       private favService: FavoriteService) {
      this.listFilter = '';
     
  }

  ngOnInit() : void{
    this.movies = this.movieService.getMovies(); 
    this.filteredMovies = this.movies;
    
  }

  performFilter(filterBy: string): IMovies[] {
    filterBy = filterBy.toLowerCase();
    return this.movies.filter((movie: IMovies) => movie.movieName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  addFavorite(data)
  {
    this.favService.addToFavorite(data);
    sessionStorage.setItem('fav', this.favService.favorites.toString());
  }


}
