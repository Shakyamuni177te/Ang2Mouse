import { Injectable }                              from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Character } from './character';

// import Auth0 authorisation module
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class CharacterService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private charactersUrl = 'app/characters';  // URL to public characters
  private secretCharactersUrl = 'app/characters';  // URL to private characters
  
  constructor(private http: Http, private authHttp: AuthHttp) { }

  // ===== Public Character Retrieval Methods =====

  // get all public characters
  getCharacters(): Observable<Character[]> {
    return this.http.get(this.charactersUrl)
               .map(this.extractData)
               .catch(this.handleError);
  }

  // get public character
  getCharacter(id: number): Promise<Character> {
    return this.getCharacters()
               .toPromise()
               .then(characters => characters.find(character => character.id === id));
  }
  
  // create public character
  create(name: string): Observable<Character> {
    let body = JSON.stringify({ name });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.charactersUrl, body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }
  
  // delete public character
  delete(id: number): Promise<void> {
    const url = `${this.charactersUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  // update public character
  update(character: Character): Promise<Character> {
    const url = `${this.charactersUrl}/${character.id}`;
    return this.http
      .put(url, JSON.stringify(character), {headers: this.headers})
      .toPromise()
      .then(() => character)
      .catch(this.handleError);
  }  
  
  // ===== Private Character Retrieval Methods =====

  // Get all secret characters
  getSecretCharacters(): Observable<Character[]> {
    return this.authHttp
      .get(this.secretCharactersUrl)
      .map(response => response.json() as Character[])
      .catch(this.handleError);
  }

  // Get secret character
  getSecretCharacter(id: number): Promise<Character> {
    return this.getSecretCharacters()
      .toPromise()
      .then(characters => characters.find(character => character.id === id));
  }

  // Save secret character
  saveSecret(character: Character): Promise<Character> {
    if (character.id) {
      return this.putSecret(character);
    }
    return this.postSecret(character).toPromise();
  }

  // Delete secret character
  deleteSecret(character: Character): Promise<Response> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.secretCharactersUrl}/${character.id}`;

    return this.authHttp
      .delete(url, { headers: headers })
      .toPromise()
      .catch(this.handleError);
  }


  // Add new secret Character
  private postSecret(character: Character): Observable<Character> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.authHttp
      .post(this.secretCharactersUrl, JSON.stringify(character), { headers: headers })
      .map(res => res.json())
      .catch(this.handleError);
  }

  // Update existing private Character
  private putSecret(character: Character): Promise<Character> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.secretCharactersUrl}/${character.id}`;

    return this.authHttp
      .put(url, JSON.stringify(character), { headers: headers })
      .toPromise()
      .then(() => character)
      .catch(this.handleError);
  }


  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
