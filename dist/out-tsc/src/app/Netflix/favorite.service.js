import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var FavoriteService = /** @class */ (function () {
    function FavoriteService() {
        this.favorites = [];
    }
    FavoriteService.prototype.deleteFromFavorite = function (movie) {
        this.favorites = this.favorites.splice(this.favorites.indexOf(movie), 2);
    };
    FavoriteService.prototype.addToFavorite = function (movie) {
        if (!(this.favorites.indexOf(movie) > -1)) {
            this.favorites.push(movie);
        }
        console.log(this.favorites);
    };
    FavoriteService.prototype.addedToFavorite = function (movie) {
        return this.favorites.some(function (f) { return f === movie; });
    };
    FavoriteService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        })
    ], FavoriteService);
    return FavoriteService;
}());
export { FavoriteService };
//# sourceMappingURL=favorite.service.js.map