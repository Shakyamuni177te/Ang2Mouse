import { Component, OnInit } from '@angular/core';

import { Character } from './character';

import { CharacterService } from './character.service';

@Component({
    moduleId: module.id,
    selector: 'mouse-characters',
    template: `<h2>{{sectiontitle}}</h2>
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
               <character-detail [character]="selectedCharacter"></character-detail>
               </div>`,
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
`]
})

export class CharactersComponent implements OnInit {
  sectiontitle = 'Character Selection';
  characters: Character[];
  selectedCharacter: Character;
  

  constructor(private characterService: CharacterService) { }

  getCharacters(): void {
    this.characterService.getCharacters().then(characters => this.characters = characters);
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  onSelect(character: Character): void {
  this.selectedCharacter = character;
  }
}
