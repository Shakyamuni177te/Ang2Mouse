import { Injectable }                              from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Character } from './character';

@Injectable()
export class CharacterService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private charactersUrl = 'app/characters';  // URL to web api
  
  constructor(private http: Http) { }

  getCharacters(): Observable<Character[]> {
    return this.http.get(this.charactersUrl)
               .map(this.extractData)
               .catch(this.handleError);
  }

  getCharacter(id: number): Promise<Character> {
    return this.getCharacters()
               .toPromise()
               .then(characters => characters.find(character => character.id === id));
  }

  create(name: string): Observable<Character> {
    let body = JSON.stringify({ name });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.charactersUrl, body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.charactersUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }


  update(character: Character): Promise<Character> {
    const url = `${this.charactersUrl}/${character.id}`;
    return this.http
      .put(url, JSON.stringify(character), {headers: this.headers})
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
