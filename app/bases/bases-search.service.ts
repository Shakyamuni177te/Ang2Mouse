import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Base }      from './base';

@Injectable()
export class BasesSearchService {

  constructor(private http: Http) {}

}

