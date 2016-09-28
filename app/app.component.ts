import { Component } from '@angular/core';

export class character {
  id: number;
  name: string;
}

@Component({
    selector: 'mouse-app',
    template: `<h1>{{title}}</h1>
               <h2>{{sectiontitle}}</h2>
               <h3></h3>
               <div><label>id: {{character.id}}</label></div>
               <div><label>name: {{character.name}}</label></div>`
})

export class AppComponent {
  title = 'Order Of The Mouse: Operation Dovecot';
  sectiontitle = 'Character Selection';
    character: Character = {
    id: 1,
    name: 'Dragon-Bear'
  };
}
