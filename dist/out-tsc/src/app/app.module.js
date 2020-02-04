import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MoviesInfoComponent } from './Netflix/movies-info.component';
import { MovieDetailComponent } from './Netflix/movie-detail.component';
import { MovieDetailGuard } from './Netflix/movie-detail.guard';
import { LoginComponent } from './Netflix/user/login.component';
import { MovieFavoriteComponent } from './Netflix/movie-favorite.component';
import { MovieThumbnailComponent } from './Netflix/movie-thumbnail.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                MoviesInfoComponent,
                MovieDetailComponent,
                LoginComponent,
                MovieFavoriteComponent,
                MovieThumbnailComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                HttpClientModule,
                ReactiveFormsModule,
                RouterModule.forRoot([
                    { path: 'Welcome', component: AppComponent },
                    { path: 'Login', component: LoginComponent },
                    { path: 'Home', component: MoviesInfoComponent },
                    { path: 'Favorites', component: MovieFavoriteComponent },
                    { path: 'Home/:id',
                        canActivate: [MovieDetailGuard],
                        component: MovieDetailComponent,
                    },
                    { path: '', redirectTo: 'Home', pathMatch: 'full' },
                    { path: '**', redirectTo: 'Home', pathMatch: 'full' }
                ])
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map