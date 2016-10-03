import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

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
  

  constructor(
    private router: Router,
    private characterService: CharacterService) { }

  getCharacters(): void {
    this.characterService.getCharacters().then(characters => this.characters = characters);
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  onSelect(character: Character): void {
  this.selectedCharacter = character;
  }
 
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedCharacter.id]);
  }
}
