import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MovieService } from './movies.service';
import { AuthService } from './user/auth.service';
import { FavoriteService } from './favorite.service';
// import { AuthService } from '../shared/authen.service';
var MoviesInfoComponent = /** @class */ (function () {
    function MoviesInfoComponent(movieService, authService, favService) {
        this.movieService = movieService;
        this.authService = authService;
        this.favService = favService;
        this.movies = [];
        this.filteredMovies = this.movies;
        this.movieFilter = 'lion';
    }
    Object.defineProperty(MoviesInfoComponent.prototype, "movieFilter", {
        get: function () {
            return this._movieFilter;
        },
        set: function (value) {
            this._movieFilter = value;
            this.filteredMovies = this.movieFilter ? this.performFilter(this.movieFilter) : this.movies;
        },
        enumerable: true,
        configurable: true
    });
    MoviesInfoComponent.prototype.performFilter = function (filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.movies.filter(function (movie) {
            return movie.movieName.toLocaleLowerCase().indexOf(filterBy) !== -1;
        });
    };
    MoviesInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieService.getMovies().subscribe(function (movies) {
            _this.movies = movies;
            _this.filteredMovies = _this.movies;
        }, function (error) { return _this.errorMessage = error; });
    };
    MoviesInfoComponent.prototype.addFavorite = function (data) {
        this.favService.addToFavorite(data);
        sessionStorage.setItem('fav', this.favService.favorites.toString());
    };
    MoviesInfoComponent = tslib_1.__decorate([
        Component({
            selector: 'app-movies-info',
            templateUrl: './movies-info.component.html',
            styleUrls: ['./movies-info.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [MovieService, AuthService, FavoriteService])
    ], MoviesInfoComponent);
    return MoviesInfoComponent;
}());
export { MoviesInfoComponent };
//# sourceMappingURL=movies-info.component.js.map