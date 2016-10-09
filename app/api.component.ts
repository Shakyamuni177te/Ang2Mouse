import { Component }  from '@angular/core';

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

@Component({
  selector: 'mouse-api',
  template: `
    <character-list></character-list>
    <character-list-promise></character-list-promise>
    <mouse-wiki></mouse-wiki>
    <mouse-wiki-smart></mouse-wiki-smart>
  `
})
export class AppComponent { }
