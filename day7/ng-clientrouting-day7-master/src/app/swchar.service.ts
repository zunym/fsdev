import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwcharService {

  constructor() { }

  characters = [
    { id: 1, name: 'Luke'},
    { id: 2, name: 'Darth Vader'},
    { id: 3, name: 'Darth Maul'},
    { id: 4, name: 'Hans Solo'},
  ]

  movies = [
    { 
      name: 'Attack of the clones',
      subtitle: 'Lucas Film',
      galleryUrl: 'https://vignette.wikia.nocookie.net/starwars/images/3/3a/Attack_of_the_Clones_Cover.jpg',
      description: 'Very good movie',
      cast: [2,3]
    },
    { 
      name: 'The Phantom Menace', 
      subtitle: 'Lucas Film',
      galleryUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Star_Wars_Phantom_Menace_poster.jpg/220px-Star_Wars_Phantom_Menace_poster.jpg',
      description: 'Very good movie',
      cast: [2,3,4]
    },
    { 
      name: 'Return of the Jedi', 
      subtitle: 'Lucas Film',
      galleryUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/ReturnOfTheJediPoster1983.jpg/220px-ReturnOfTheJediPoster1983.jpg',
      description: 'Very good movie',
      cast: [1,3]
    },
  ]

  results = [];

  getCharacters() {
    return this.characters;
  }

  searchCharCastInWhichFilm(charId){
    this.results = [];
    this.movies.forEach((value)=>{
      let indexValue: boolean = value.cast.includes(+charId);
      if(indexValue){
        this.results.push(value);
      }
    });
    return this.results;
  }
}
