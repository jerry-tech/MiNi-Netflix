import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MovieService } from './movies.service';
import { FavoriteService } from './favorite.service';
var MovieFavoriteComponent = /** @class */ (function () {
    function MovieFavoriteComponent(movieService, favService) {
        this.movieService = movieService;
        this.favService = favService;
        this.favorite = this.favService.favorites;
    }
    MovieFavoriteComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem('fav') !== null) {
            this.fav = sessionStorage.getItem('fav').split(',');
            // this.movielist = this.movieService.getMovies().lift((movie)=> {
            //   return this.fav.indexOf(movie.movieName) >=0;
            //   this.movieList = this
            //  });
            return this.favService.favorites;
        }
    };
    MovieFavoriteComponent = tslib_1.__decorate([
        Component({
            selector: 'app-movie-favorite',
            templateUrl: './movie-favorite.component.html',
            styleUrls: ['./movie-favorite.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [MovieService, FavoriteService])
    ], MovieFavoriteComponent);
    return MovieFavoriteComponent;
}());
export { MovieFavoriteComponent };
//# sourceMappingURL=movie-favorite.component.js.map