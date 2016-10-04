import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Character } from './character';
import { CHARACTERS } from './mock.characters';

@Injectable()
export class CharacterService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private charactersUrl = 'app/characters';  // URL to web api
  
  constructor(private http: Http) { }

  getCharacters(): Promise<Character[]> {
    return this.http.get(this.charactersUrl)
               .toPromise()
               .then(response => response.json().data as Character[])
               .catch(this.handleError);
  }

  getCharacter(id: number): Promise<Character> {
    return this.getCharacters()
               .then(characters => characters.find(character => character.id === id));
  }

  update(character: Character): Promise<Character> {
    const url = `${this.charactersUrl}/${character.id}`;
    return this.http
      .put(url, JSON.stringify(character), {headers: this.headers})
      .toPromise()
      .then(() => character)
      .catch(this.handleError);
  }  

  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
  }
}
