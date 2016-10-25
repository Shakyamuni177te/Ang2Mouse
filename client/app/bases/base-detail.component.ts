// Keep the Input import for now, we'll remove it later:
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { BasesService }  from './bases.service';
import { BasesSearchService }  from './bases-search.service';

@Component({
  moduleId: module.id,
  selector: 'base-detail',
  templateUrl: 'base-detail.component.html',
  styleUrls: [ 'base-detail.component.css' ]
})

export class BaseDetailComponent implements OnInit {

  ngOnInit(): void {

  }


}
