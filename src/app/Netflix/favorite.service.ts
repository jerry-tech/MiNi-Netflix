import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})

export class FavoriteService{
    favorites: any[] = [];

    deleteFromFavorite(movie: string)
    {
        this.favorites = this.favorites.splice(this.favorites.indexOf(movie), 2);
    }
    addToFavorite(movie: string)
    {
        if(!(this.favorites.indexOf(movie) > -1)){
            this.favorites.push(movie);
        }else {
            this.favorites.splice(this.favorites.indexOf(movie),1)
        }
        
    }
    addedToFavorite(movie: string)
    {
        return this.favorites.some(f => f === movie);
    }
}