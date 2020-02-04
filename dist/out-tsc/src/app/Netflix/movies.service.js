import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
var MovieService = /** @class */ (function () {
    function MovieService(http, movieService) {
        this.http = http;
        this.movieService = movieService;
        this.movieUrl = 'api/movies/movies.json';
    }
    MovieService.prototype.getMovies = function () {
        return this.http.get(this.movieUrl)
            .pipe(tap(function (data) { return console.log('All: ' + JSON.stringify(data)); }), catchError(this.handleError));
    };
    MovieService.prototype.getMovie = function (id) {
        if (id === 0) {
            return of(this.initializeMovie());
        }
        var url = this.movieUrl + "/{}id";
        return this.http.get(url)
            .pipe(tap(function (data) { return console.log('getProduct: ' + JSON.stringify(data)); }), catchError(this.handleError));
    };
    MovieService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    };
    MovieService.prototype.initializeMovie = function () {
        // Return an initialized object
        return {
            id: null,
            movieName: null,
            Genre: null,
            Director: null,
            Writer: null,
            Actors: null,
            Language: null,
            Country: null,
            Rating: null,
            year: null,
            synopsis: null,
            imageUrl: null
        };
    };
    MovieService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, MovieService])
    ], MovieService);
    return MovieService;
}());
export { MovieService };
//# sourceMappingURL=movies.service.js.map