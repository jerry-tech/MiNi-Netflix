import { Injectable } from '@angular/core';
import { IMovies } from './movies';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subscriber, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators'; 

@Injectable({
    providedIn: 'root' 
})

export class MovieService
{
    // private movieUrl = 'api/movies/movies.json';
    movies: IMovies[];
    movie: any;
    errorMessage: any;
    constructor(private http: HttpClient,private movieService: MovieService){}
 
   getMovies(): IMovies[]{
      return movies;
   } 


   getMovie(id:number)
   {
     return movies.find(movie => {
       return movie.id === id;
     })
   }

  
    private initializeMovie(): IMovies {
        // Return an initialized object
        return {
            id: null,
            movieName: null,
            Genre: null,
            Director:null,
            Writer:null,
            Actors: null,
            Language: null,
            Country: null,
            starRating: null,
            year: null,
            synopsis: null,
            imageUrl: null 
        };
      }
}   

const movies = [
  {
    "id": 1,
    "movieName": "My tailor my heart",
    "Genre": "Romance",
    "Director":"Unavailable",
    "Writer":"Unavailable",
    "Actors":"Fredrick leonard, lota chukwu",
    "Language":"English",
    "Country":"Nigeria",
    "starRating": 4.5,
    "year": "2018",
    "synopsis": "A skilled tailor for men's clothing, wrongly uses a measurement to make an outfit for an arrogant man. This leads to chain of confrontations that leads to unexpected attraction.",
    "imageUrl": "assets/Images/My_Tailor.jpg"
  },
  {
      "id": 2,
      "movieName": "Isoken",
      "Genre": "Romance,Comedy",
      "Director":"Jedesola Osiberu",
      "Writer":"Jedesola Osiberu",
      "Actors":"Dacore Akande, Marc Rhys, Funke Akindele, Joseph Benjamin, Damilola Adegbite.",
      "Language":"English, Pidgin(English local)",
      "Country":"Nigeria",
      "starRating": 3.8,
      "year": "2017",
      "synopsis": "Everyone in the Osayande family worries about Isoken. Although she has what appears to be a perfect life-Isoken is still unmarried at 34 which, in a culture obseed with marraige is a cause for concern",
      "imageUrl": "assets/Images/Isoken.jpg"
    },
    {
      "id": 3,
      "movieName": "King of boys",
      "Genre": "Romance",
      "Director":"Kemi Adetiba",
      "Writer":"Kemi Adetiba",
      "Actors":"Sola Sobowale, Adesua Etomi, Reminisce, Toni tones, Jide Kosoko.",
      "Language":"English, Yoruba(native)",
      "Country":"Nigeria",
      "starRating": 4,
      "year": "2018",
      "synopsis": "King of boys follows the story of Alhaja Eniola Salami, a businesswoman and philanthropist with a checkered past and a promising political future.she is a pillar of society -- loved by many feared by most, and truly known by a select few. As her political ambitions see her outgrowing the underworld connections responsible for her considerable wealth, she's drawn into a power struggle that threatens everything she holds dear.",
      "imageUrl": "assets/Images/King_Of_Boys.jpg"
    },
    {
      "id": 4,
      "movieName": "The wedding party 2",
      "Genre": "Romance",
      "Director":"Niyi Akinmolayan,Banky Wellington,,",
      "Writer":"Naz Onuzo",
      "Actors":"Iretiola Doyle, Daniella Down,Adesua Etomi, Patience Ozokwor, Banky Wellington,Enyinna Nwigwe, Ikechukwu Onunaku, Richard Mofe Damijo.",
      "Language":"English, Yoruba and Igbo(Native)",
      "Country":"Nigeria",
      "starRating": 4.3,
      "year": "2019",
      "synopsis": "Dozie's (Banky Wellington) elder brother, Nonso (Enyinna Nwigwe), has continued his romance with Deardre (Daniella Down), Dunni's (Adesua Etomi) bridesmaid. Nonso takes Deardre on a date in Dubai and proposes marriage by accident. After a disastrous traditional engagement ceremony in Lagos, Nonso's family and Deardre's aristocratic British family reluctantly agree to a wedding in Dubai.",
      "imageUrl": "/assets/Images/The WeddingParty.jpg "
    },
    {
      "id": 5,
      "movieName": "Lion Heart",
      "Genre": "Romance",
      "Director":"Genevieve Nnaji",
      "Writer":"Genevieve Nnaji, Chinny Onwugbenu, Ishaya Bako",
      "Actors":"Genevieve Nnaji",
      "Language":"English, Igbo(native)",
      "Country":"Nigeria",
      "starRating": 3,
      "year": "2019",
      "synopsis": "Looking to prove her worth, a woman steps up  to the challenge to work with her crude and eccentric brother when her father,Chief Ernest Obiagu is forced to take a step back due to health issues.",
      "imageUrl": "assets/Images/Lion_Heart.jpg"
    },
     {
      "id": 6,
      "movieName": "Angel has fallen",
      "Genre": "Action & Adventure,Drama, Mystery & Suspense",
      "Director":"Ric Roman Waugh",
      "Writer":"Karin Benedikt, Robert Mark Kamen, Creighton Rothenberger",
      "Actors":"Morgan Freeman, Gerard Butler",
      "Language":"English",
      "Country":"United States",
      "starRating": 4,
      "year": "2019",
      "synopsis": "Mike Banning is framed for the attempted assassination of the President and must evade his own agency and the FBI as he tries to uncover the real threat.",
      "imageUrl": "assets/Images/Angel_Has_Fallen.jpg"
    },
    {
      "id": 7,
      "movieName": "Six underground",
      "Genre": "Romance",
      "Director":"Micheal Bay",
      "Writer":"Paul Wernick,Rhett Reese",	
      "Actors":"Ryan Reynolds",
      "Language":"English",
      "Country":"United states",
      "starRating": 4.8,
      "year": "2019",
      "synopsis": "6 billoniares form a vigilante squad after faking their deaths in order to take down notorious criminals.",
      "imageUrl": "assets/Images/Underground.jpg"
    },
    {
      "id": 8,
      "movieName": "Passengers",
      "Genre": "Sci-fic.Romance",
      "Director":"Morten Tyldum",
      "Writer":"Jon Spaihts",
      "Actors":"Jennifer Lawrence, Chris Pratt, lawrence Fishbourne, Andy Garcia",
      "Language":"English",
      "Country":"United States",
      "starRating": 4.9,
      "year": "2016",
      "synopsis": "A spacecraft travelling to a distant colony planet and transporting thousands of people has a malfunction in its sleep chambers. As a result, two passengers are awakened 90years early.",
      "imageUrl": "assets/Images/Passengers.jpg"
    },
    {
      "id": 9,
      "movieName": "The proposal",
      "Genre": "Comedy.Drama.Romance",
      "Director":"",
      "Writer":"",
      "Actors":"Sandra Bullock, Ryan Reynolds",
      "Language":"",
      "Country":"United States",
      "starRating": 4,
      "year": "2009",
      "synopsis": "A pushy boss forces her young assistant to many her in order to keep her VISA status in the U.S and avoid deportation to Canada",
      "imageUrl": "assets/Images/The Proposal.jpg"
    },
    {
      "id": 10,
      "movieName": "set it Up",
      "Genre": "Romance",
      "Director":"Claire Scanlon",
      "Writer":"	Katie Silberman",
      "Actors":"Zoey Deutch, Glen Powell, Lucy Liu, Taye Diggs, Joan Smalls, Meredith Hagner",
      "Language":"English",
      "Country":"United States",
      "starRating": 4.1,
      "year": "2018",
      "synopsis": "Two overworked and underpaid assistants come up with a plan to get their bosses off their backs by setting them up with each other.",
      "imageUrl": "assets/Images/Set_It_Up.jpg"
    }
    
] ;
 