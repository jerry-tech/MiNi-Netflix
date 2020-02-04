import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FavoriteService } from './favorite.service';
import { AuthService } from './user/auth.service';
var MovieThumbnailComponent = /** @class */ (function () {
    function MovieThumbnailComponent(favService, auth) {
        this.favService = favService;
        this.auth = auth;
        this.movieId = new EventEmitter();
        this.imageWidth = 80;
        this.imageHeight = 70;
        this.vote = new EventEmitter();
    }
    Object.defineProperty(MovieThumbnailComponent.prototype, "voted", {
        set: function (val) {
            this.iconColor = val ? 'red' : 'white';
        },
        enumerable: true,
        configurable: true
    });
    MovieThumbnailComponent.prototype.favorite = function () {
        this.movieId.emit(this.movie);
    };
    MovieThumbnailComponent.prototype.movieAddedToFavorite = function () {
        if (sessionStorage.getItem('fav') !== null) {
            return sessionStorage.getItem('fav').split(',').indexOf(this.movie) > -1;
        }
        else {
            return false;
        }
    };
    MovieThumbnailComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], MovieThumbnailComponent.prototype, "movie", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], MovieThumbnailComponent.prototype, "movieId", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], MovieThumbnailComponent.prototype, "color", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], MovieThumbnailComponent.prototype, "count", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], MovieThumbnailComponent.prototype, "voted", null);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], MovieThumbnailComponent.prototype, "vote", void 0);
    MovieThumbnailComponent = tslib_1.__decorate([
        Component({
            selector: 'app-movie-thumbnail',
            templateUrl: './movie-thumbnail.component.html',
            styleUrls: ['./movie-thumbnail.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FavoriteService, AuthService])
    ], MovieThumbnailComponent);
    return MovieThumbnailComponent;
}());
export { MovieThumbnailComponent };
//# sourceMappingURL=movie-thumbnail.component.js.map