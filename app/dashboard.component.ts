import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Character } from './character';
import { CharacterService } from './character.service';

@Component({
  moduleId: module.id,
  selector: 'mouse-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

  characters: Character[] = [];

  constructor(
    private router: Router,
    private characterService: CharacterService) { 
  }

  ngOnInit(): void {
    this.characterService.getCharacters()
      .then(characters => this.characters = characters.slice(1, 5));
  }

  gotoDetail(character: Character): void {
    let link = ['/detail', character.id];
    this.router.navigate(link);
  }
}
