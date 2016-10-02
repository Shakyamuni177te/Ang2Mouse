import { Component, Input } from '@angular/core';
import { Character } from './character';

@Component({
  selector: 'character-detail',
  template: `<div *ngIf="character" class="currentCharacter container">
               <h3>Edit {{character.name}}</h3>
               <div>
                 <label>id: {{character.id}}</label>
               </div>
               <div>
                 <label>name: {{character.name}}</label>
                 <input [(ngModel)]="character.name" placeholder="name">
               </div>
             </div>`,
  styles: [`
    .container {
    overflow: hidden; /* Clearfix! */
    zoom: 1;  /* Triggering "hasLayout" in IE */
    display: block;
    }
    .currentCharacter {
    position: relative;
    left: 20px;
    }
  `]
})
export class CharacterDetailComponent {
  @Input()
  character: Character;
}
