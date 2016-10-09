import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';

import { Character } from './character';

import { CharacterService } from './character.service';

@Component({
    moduleId: module.id,
    selector: 'mouse-characters',
    templateUrl: 'characters.component.html',
    styleUrls: [ 'characters.component.css' ] 
})

export class CharactersComponent implements OnInit {

  sectiontitle = 'Character Selection';
  characters: Character[];
  selectedCharacter: Character;
  mode = 'Observable';
  errorMessage: string;  

  constructor(
    private router: Router,
    private characterService: CharacterService) { }

  getCharacters() {
    this.characterService.getCharacters()
                         .subscribe(
                                     characters => this.characters = characters
                                   );
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  onSelect(character: Character): void {
  this.selectedCharacter = character;
  }
  
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.characterService.create(name)
        .subscribe(
                     character => {
                     this.characters.push(character);
                     this.selectedCharacter = null;
                     }
                   );
  }
  
  delete(character: Character): void {
    this.characterService
      .delete(character.id)
      .then(() => {
        this.characters = this.characters.filter(c => c !== character);
        if (this.selectedCharacter === character) { this.selectedCharacter = null; }
      });
  }
 
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedCharacter.id]);
  }
}
