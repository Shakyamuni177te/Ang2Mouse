// Keep the Input import for now, we'll remove it later:
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Character }        from '../characters/character';
import { CharacterService } from '../characters/character.service';

import { BasesService }  from './bases.service';
import { BasesSearchService }  from './bases-search.service';

@Component({
  moduleId: module.id,
  selector: 'base-detail',
  templateUrl: 'base-detail.component.html',
  styleUrls: [ 'base-detail.component.css' ]
})

export class BaseDetailComponent implements OnInit {
 
  characterService: CharacterService;
  character: Character;

  constructor(
    private basesService: BasesService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
    this.characterService.getCharacter(id)
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
