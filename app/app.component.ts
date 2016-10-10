import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'mouse-app',
  template: `<h1>{{title}}</h1>
  <nav>
    <h4>Characters</h4>
    <a routerLink="/search" routerLinkActive="active">Search</a>
    <a routerLink="/characters" routerLinkActive="active">List</a>
  </nav>
  <router-outlet></router-outlet>`,
  styleUrls: [ 'app.component.css' ]
})

export class AppComponent {
  title = 'Order Of The Mouse: Operation Silk Scarf';
}
