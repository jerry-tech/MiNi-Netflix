import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from './movies.service';
var MovieDetailComponent = /** @class */ (function () {
    function MovieDetailComponent(router, route, movieService) {
        this.router = router;
        this.route = route;
        this.movieService = movieService;
        this.pageTitle = 'Movie Details';
    }
    MovieDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var id = +params.get('id');
            _this.getMovie(id);
        });
    };
    MovieDetailComponent.prototype.getMovie = function (id) {
        var _this = this;
        this.movieService.getMovie(id).subscribe(function (movie) { return _this.onMovieRetrieved(movie); }, function (error) { return _this.errorMessage = error; });
    };
    MovieDetailComponent.prototype.onMovieRetrieved = function (movie) {
        this.movie = movie;
        if (this.movie) {
            this.pageTitle = "Movie Detail: " + this.movie.movieName;
        }
        else {
            this.pageTitle = 'No movie found';
        }
    };
    MovieDetailComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Movie Rating' + message;
    };
    MovieDetailComponent.prototype.onBack = function () {
        this.router.navigate(['/Home']);
    };
    MovieDetailComponent = tslib_1.__decorate([
        Component({
            selector: 'app-movie',
            templateUrl: './movie-detail.component.html',
            styleUrls: ['./movie-detail.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router, ActivatedRoute,
            MovieService])
    ], MovieDetailComponent);
    return MovieDetailComponent;
}());
export { MovieDetailComponent };
//# sourceMappingURL=movie-detail.component.js.map