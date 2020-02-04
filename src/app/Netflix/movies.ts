export interface IMovies
{
    id: number;
    movieName: string;
    Genre: string;
    Director:string;
    Writer:string;
    Actors: string;
    Language: string;
    Country: string;
    starRating: number;
    year: string;
    synopsis: string;
    imageUrl: string;
      
}
export interface MovieResolved{
    movie: IMovies;
    error?: any;
}