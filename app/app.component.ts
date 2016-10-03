import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'mouse-app',
  template: `<h1>{{title}}</h1>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/characters" routerLinkActive="active">Characters</a>
  </nav>
  <router-outlet></router-outlet>`,
  styleUrls: [ 'app.component.css' ]
})

export class AppComponent {
  title = 'Order Of The Mouse: Operation Dovecot';
}
