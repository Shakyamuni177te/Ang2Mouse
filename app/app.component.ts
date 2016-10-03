import { Component } from '@angular/core';

@Component({
  selector: 'mouse-app',
  template: `<h1>{{title}}</h1>
    <mouse-characters></mouse-characters>`
})
export class AppComponent {
  title = 'Order Of The Mouse: Operation Dovecot';
}
