import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Character } from '../characters/character';

import { CharacterService } from '../characters/character.service';

@Component({
    moduleId: module.id,
    selector: 'mouse-characters',
    templateUrl: 'base.component.html',
    styleUrls: [ 'base.component.css' ] 
})

export class BaseComponent implements OnInit {

  sectiontitle = 'Base Facility:';
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
