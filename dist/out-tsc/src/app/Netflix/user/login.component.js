import * as tslib_1 from "tslib";
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.login = function (formvalues) {
        this.authService.loginUser(formvalues.userName, formvalues.password);
        this.router.navigate(['/Home']);
        console.log(formvalues);
    };
    LoginComponent.prototype.cancel = function () {
        this.router.navigate(['/Login']);
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            templateUrl: './login.component.html',
            styles: ["\n      em {float:right;padding-left:10px;color:#E05C65}\n  "]
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService, Router])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map