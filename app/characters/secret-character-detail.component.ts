// Keep the Input import for now, we'll remove it later:
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Character } from './character';

import { CharacterService } from './character.service';

@Component({
  moduleId: module.id,
  selector: 'secret-character-detail',
  templateUrl: 'secret-character-detail.component.html',
  styleUrls: [ 'secret-character-detail.component.css' ]
})

export class SecretCharacterDetailComponent implements OnInit {
  character: Character;

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
    this.characterService.getSecretCharacter(id)
      .then(character => this.character = character);
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
  this.characterService.update(this.character)
    .then(() => this.goBack());
  }

}
