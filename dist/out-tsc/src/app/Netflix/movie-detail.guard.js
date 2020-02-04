import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
var MovieDetailGuard = /** @class */ (function () {
    function MovieDetailGuard(router) {
        this.router = router;
    }
    MovieDetailGuard.prototype.canActivate = function (next, state) {
        var id = +next.url[1].path;
        if (isNaN(id) || id < 0) {
            alert("Invalid movie Id");
            this.router.navigate(['/Home']);
            return false;
        }
        ;
        return true;
    };
    MovieDetailGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], MovieDetailGuard);
    return MovieDetailGuard;
}());
export { MovieDetailGuard };
//# sourceMappingURL=movie-detail.guard.js.map