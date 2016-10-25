import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { BasesSearchService }  from './bases-search.service';

@Component({
  moduleId: module.id,
  selector: 'base-search',
  templateUrl: 'base-search.component.html',
  styleUrls: [ 'base-search.component.css' ],
  providers: [ BasesSearchService ]
})

export class BaseSearchComponent implements OnInit {

  private searchTerms = new Subject<string>();

  constructor(
    private router: Router) {}
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
  }
}
