import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovies, MovieResolved } from './movies';
import { MovieService } from './movies.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  pageTitle: string = 'Movie Details';
  errorMessage: string;
  movie: IMovies;
  themovie : any;
  constructor(private router: Router,private route: ActivatedRoute,
              private movieService: MovieService) { }

    ngOnInit() : void{
       const id = +this.route.snapshot.params['id'];
       this.themovie = this.movieService.getMovie(id);//for normal
      // this.route.paramMap.subscribe(
      //   params => {
      //     const id = +params.get('id');
          //  this.getMovie(id);
      //   }
      // );
     }
     
  // getMovie(id: number){
  //   this.movieService.getMovie(id).
  //   // subscribe(
  //   //   movie => this.onMovieRetrieved(movie),
  //   //   error => this.errorMessage = <any>error);
   
  // }
  onMovieRetrieved(movie: IMovies): void {
    this.movie = movie;

    if (this.movie) {
      this.pageTitle = `Movie Detail: ${this.movie.movieName}`;
    } else {
      this.pageTitle = 'No movie found';
    }
  }

  onRatingClicked(message:string): void {
    this.pageTitle = 'Movie Rating:' + message;
}
  onBack(): void{
    this.router.navigate(['/Home']);
  }

}
