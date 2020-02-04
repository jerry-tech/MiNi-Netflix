import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.loginUser = function (userName, password) {
        this.currentUser = {
            id: 1,
            userName: userName,
            password: password,
            favorite: []
        };
    };
    AuthService.prototype.isAuthenticated = function () {
        return !!this.currentUser;
    };
    AuthService.prototype.updateCurrentUser = function (userName, password) {
        this.currentUser.userName = userName;
        this.currentUser.password = password;
    };
    AuthService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map