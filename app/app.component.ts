import { Component } from '@angular/core';

export class Character {
  id: number;
  name: string;
}

const CHARACTERS: Character[] = [
  { id: 1, name: 'Dragon-Bear' },
  { id: 2, name: 'Clown-Fox' },
  { id: 3, name: 'Boa-Duck' },
  { id: 4, name: 'Rabbit-Cat' },
  { id: 5, name: 'Furry-Giraffe' },
  { id: 6, name: 'Ariadne' },
  { id: 7, name: 'Deer-Wolf' },
  { id: 8, name: 'Tiger-Hummingbird' },
  { id: 9, name: 'Lene-Cow' },
  { id: 10, name: 'Ant-Salamander' },
  { id: 11, name: 'Bluewhale-Beaver' },
  { id: 12, name: 'Moon-Possum' }
];


@Component({
    selector: 'mouse-app',
    template: `<h1>{{title}}</h1>
               <h2>{{sectiontitle}}</h2>
               <div class="characterScreen container">
                 <div class="characterBases container">
                   <h3>Select Character</h3>
                   <ul class="characters">
                     <li *ngFor="let character of characters" 
                     [class.selected]="character === selectedCharacter"
                     (click)="onSelect(character)">
                       <span class="badge">{{character.id}}</span> {{character.name}}
                     </li>
                   </ul>
                 </div>
                 <div *ngIf="selectedCharacter" class="currentCharacter container">
                   <h3>Edit {{selectedCharacter.name}}</h3>
                   <div>
                     <label>id: {{selectedCharacter.id}}</label>
                   </div>
                   <div>
                     <label>name: {{selectedCharacter.name}}</label>
                     <input [(ngModel)]="selectedCharacter.name" placeholder="name">
                   </div>
                 </div>
               </div>`
styles: [`
  .container {
    overflow: hidden; /* Clearfix! */
    zoom: 1;  /* Triggering "hasLayout" in IE */
    display: block;
  }
  .characterBases {
    float: left;    
  }
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .characters {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .characters li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .characters li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .characters li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .characters .text {
    position: relative;
    top: -3px;
  }
  .characters .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
  .currentCharacter {
    position: relative;
    left: 20px;
  }
`]
})

export class AppComponent {
  title = 'Order Of The Mouse: Operation Dovecot';
  sectiontitle = 'Character Selection';
  characters = CHARACTERS;
  selectedCharacter = Character;
  onSelect(character: Character): void {
  this.selectedCharacter = character;
  }
}
