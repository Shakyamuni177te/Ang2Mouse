import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Character } from './characters/character';
import { CharacterService } from './characters/character.service';

@Component({
  moduleId: module.id,
  selector: 'mouse-dashboard',
  templateUrl: 'missions.component.html',
  styleUrls: [ 'missions.component.css' ]
})

export class MissionsComponent implements OnInit {

  characters: Character[] = [];

  constructor(
    private router: Router,
    private characterService: CharacterService) { 
  }

  ngOnInit(): void {
    this.characterService.getCharacters()
      .subscribe(
                 characters => this.characters = characters.slice(1, 5));
  }

  gotoDetail(character: Character): void {
    let link = ['/detail', character.id];
    this.router.navigate(link);
  }
}
