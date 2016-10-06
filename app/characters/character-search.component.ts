import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { CharacterSearchService } from './character-search.service';
import { Character } from './character';

@Component({
  moduleId: module.id,
  selector: 'character-search',
  templateUrl: 'character-search.component.html',
  styleUrls: [ 'character-search.component.css' ],
  providers: [CharacterSearchService]
})

export class CharacterSearchComponent implements OnInit {

  characters: Observable<Character[]>;

  private searchTerms = new Subject<string>();

  constructor(
    private characterSearchService: CharacterSearchService,
    private router: Router) {}
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.characters = this.searchTerms
      .debounceTime(150)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.characterSearchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Character[]>([]))
          .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Character[]>([]);
      });
  }

  gotoDetail(character: Character): void {
    let link = ['/detail', character.id];
    this.router.navigate(link);
  }
}
