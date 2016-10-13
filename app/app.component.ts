import { Component }    from '@angular/core';
import { AuthService }  from './auth.service';

@Component({
  moduleId: module.id,
  selector: 'mouse-app',
  template: `<h1>{{title}}</h1>
  <nav>
    <h4>Characters</h4>
    <a routerLink="/search" routerLinkActive="active">Search</a>
    <a routerLink="/characters" routerLinkActive="active">List</a>
    <a routerLink="/secret-heroes" routerLinkActive="authService.loggedIn()" routerLinkActive="active">Secret Characters</a>
    <a (click)=authService.login() *ngIf="!authService.loggedIn()">Log In</a>
    <a (click)=authService.logout() *ngIf="authService.loggedIn()">Log Out</a>
  </nav>
  <router-outlet></router-outlet>`,
  styleUrls: [ 'app.component.css' ]
})

export class AppComponent {
  
  title = 'Order Of The Mouse: Operation Silk Scarf';

  constructor(private authService: AuthService) {}
}
